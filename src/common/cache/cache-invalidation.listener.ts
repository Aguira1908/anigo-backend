import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';
import { PinoLogger } from 'nestjs-pino';
import { EntityMutatedEvent } from './entity-mutated.event';

/**
 * Centralized cache invalidation listener.
 *
 * Listens for 'entity.mutated' events emitted by services after any
 * data mutation and invalidates the relevant cache keys, including
 * cascading invalidation for parent entities whose cached responses
 * include nested child data via Prisma `include`.
 *
 * Cache key mapping:
 * ┌──────────────────┬──────────────────────────────────────────────────────────┐
 * │ Entity Mutated   │ Keys Invalidated                                        │
 * ├──────────────────┼──────────────────────────────────────────────────────────┤
 * │ streamserver     │ /streamserver, /streamserver/:id, /mirror, /mirror/:mid │
 * │ mirror           │ /mirror, /mirror/:id, /episode, /episode/:eid          │
 * │ episode          │ /episode, /episode/:id, /anime, /anime/:aid            │
 * │ anime            │ /anime, /anime/:id                                      │
 * │ genre            │ /genre, /genre/:id, /anime (many-to-many)              │
 * │ user             │ /user, /user/:id                                        │
 * └──────────────────┴──────────────────────────────────────────────────────────┘
 */
@Injectable()
export class CacheInvalidationListener {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly logger: PinoLogger,
  ) {
    this.logger.setContext(CacheInvalidationListener.name);
  }

  @OnEvent('entity.mutated')
  async handleEntityMutated(event: EntityMutatedEvent): Promise<void> {
    const keysToDelete = this.buildKeysToDelete(event);

    await Promise.all(keysToDelete.map((key) => this.cacheManager.del(key)));

    this.logger.info(
      `[${event.entity}.${event.action}] Invalidated cache keys: [${keysToDelete.join(', ')}]`,
    );
  }

  /**
   * Builds the full list of cache keys that need to be invalidated
   * based on the entity type and its parent relationships.
   */
  private buildKeysToDelete(event: EntityMutatedEvent): string[] {
    const keys: string[] = [];
    const { entity, id, parentIds } = event;

    // 1. Always invalidate the entity's own list and detail keys
    keys.push(`/${entity}`);
    if (id) {
      keys.push(`/${entity}/${id}`);
    }

    // 2. Cascade invalidation to parent entities
    switch (entity) {
      case 'streamserver':
        // StreamServer belongs to Mirror → invalidate mirror cache
        if (parentIds?.mirrorId) {
          keys.push('/mirror', `/mirror/${parentIds.mirrorId}`);
        }
        break;

      case 'mirror':
        // Mirror belongs to Episode → invalidate episode cache
        if (parentIds?.episodeId) {
          keys.push('/episode', `/episode/${parentIds.episodeId}`);
        }
        break;

      case 'episode':
        // Episode belongs to Anime → invalidate anime cache
        if (parentIds?.animeId) {
          keys.push('/anime', `/anime/${parentIds.animeId}`);
        }
        break;

      case 'genre':
        // Genre has many-to-many with Anime → invalidate anime list cache
        keys.push('/anime');
        break;

      // 'anime' and 'user' have no parent entity to cascade to
    }

    return keys;
  }
}
