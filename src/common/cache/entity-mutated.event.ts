/**
 * Domain event emitted by services after any data mutation (create, update, delete).
 * Consumed by CacheInvalidationListener to invalidate relevant cache keys.
 *
 * @example
 * this.eventEmitter.emit('entity.mutated',
 *   new EntityMutatedEvent('streamserver', 'created', newServer.id, {
 *     mirrorId: newServer.mirrorId,
 *   }),
 * );
 */
export class EntityMutatedEvent {
  constructor(
    /** The entity type that was mutated (e.g. 'streamserver', 'mirror', 'episode') */
    public readonly entity: string,

    /** The type of mutation that occurred */
    public readonly action: 'created' | 'updated' | 'deleted',

    /** The ID of the mutated entity */
    public readonly id: string | number,

    /** Optional parent entity IDs for cascading cache invalidation */
    public readonly parentIds?: {
      mirrorId?: string;
      episodeId?: string;
      animeId?: string;
    },
  ) {}
}
