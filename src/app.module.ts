import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BullModule } from '@nestjs/bullmq';
import { LoggerModule } from 'nestjs-pino';
import { UserModule } from './user/user.module';
import { CacheModule } from '@nestjs/cache-manager';
import { Keyv } from 'keyv';
import KeyvRedis from '@keyv/redis';
import { KeyvCacheableMemory } from 'cacheable';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AuthModule } from './auth/auth.module';
import { GenreModule } from './genre/genre.module';
import { AnimeModule } from './anime/anime.module';
import { EpisodeModule } from './episode/episode.module';
import { MirrorModule } from './mirror/mirror.module';
import { StreamserverModule } from './streamserver/streamserver.module';
import { CacheInvalidationListener } from './common/cache/cache-invalidation.listener';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    LoggerModule.forRoot({
      pinoHttp: {
        ...(process.env.NODE_ENV === 'production'
          ? {}
          : {
              transport: {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                },
              },
            }),
      },
    }),

    PrismaModule,

    EventEmitterModule.forRoot(),

    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          host: config.get<string>('REDIS_HOST', 'localhost'),
          port: config.get<number>('REDIS_PORT', 6379),
          db: config.get<number>('REDIS_DB_QUEUE', 0),
        },
      }),
    }),

    CacheModule.registerAsync({
      isGlobal: true,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const host = config.get<string>('REDIS_HOST', 'localhost');
        const port = config.get<number>('REDIS_PORT', 6379);
        const db = config.get<number>('REDIS_DB_CACHE', 1);
        const redisUri = `redis://${host}:${port}/${db}`;

        return {
          stores: [
            new Keyv({
              store: new KeyvCacheableMemory({ ttl: 120000, lruSize: 5000 }),
            }),

            new KeyvRedis(redisUri),
          ],
        };
      },
    }),

    UserModule,

    AuthModule,

    GenreModule,

    AnimeModule,

    EpisodeModule,

    MirrorModule,

    StreamserverModule,
  ],
  controllers: [AppController],
  providers: [AppService, CacheInvalidationListener],
})
export class AppModule {}
