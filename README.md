# Anigo Backend

REST API backend for an anime streaming platform. Built with NestJS, Prisma ORM, PostgreSQL, and Redis.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [API Reference](#api-reference)
- [Authentication](#authentication)
- [Caching Strategy](#caching-strategy)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

---

## Overview

Anigo Backend provides a complete RESTful API for managing anime content, including series metadata, episodes, streaming mirrors, and multi-resolution stream servers. It features JWT-based authentication with HttpOnly cookie sessions, a two-tier caching layer (in-memory + Redis), and event-driven cache invalidation.

---

## Tech Stack

| Category       | Technology                                      |
| -------------- | ----------------------------------------------- |
| Runtime        | Node.js                                         |
| Framework      | NestJS 11                                       |
| Language       | TypeScript 5                                    |
| ORM            | Prisma 7 (with `@prisma/adapter-pg`)            |
| Database       | PostgreSQL 15                                   |
| Cache / Store  | Redis 7 (via Keyv + cache-manager)              |
| Queue          | BullMQ (backed by Redis)                        |
| Auth           | Passport.js + JWT (`HttpOnly` cookies)           |
| Hashing        | Argon2 (passwords), SHA-256 (refresh tokens)    |
| Logging        | Pino (via nestjs-pino)                           |
| Validation     | class-validator + class-transformer             |
| Containerization | Docker Compose                                |

---

## Architecture

```
Client Request
      |
      v
  main.ts (Bootstrap)
      |-- cookie-parser
      |-- ValidationPipe (whitelist, transform)
      |-- ResponseInterceptor (standardized JSON envelope)
      |-- AllExceptionsFilter (Prisma + HTTP error handling)
      |
      v
  AppModule
      |
      |-- AuthModule ............ JWT auth, register/login/refresh/logout
      |-- UserModule ............ User CRUD (protected)
      |-- AnimeModule ........... Anime CRUD with genre relations
      |-- GenreModule ........... Genre CRUD (many-to-many with Anime)
      |-- EpisodeModule ......... Episode CRUD (belongs to Anime)
      |-- MirrorModule .......... Mirror CRUD (belongs to Episode)
      |-- StreamserverModule .... Stream server CRUD (belongs to Mirror)
      |
      |-- PrismaModule .......... Database access layer
      |-- CacheModule ........... Two-tier cache (Memory + Redis)
      |-- BullModule ............ Job queue (Redis-backed)
      |-- EventEmitterModule .... Event-driven cache invalidation
```

### Standardized API Response

All successful responses follow a consistent JSON envelope:

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "request success",
  "data": { }
}
```

Error responses use a matching structure:

```json
{
  "status": "error",
  "statusCode": 404,
  "message": "Anime with ID xxx not found",
  "path": "/anime/xxx",
  "timestamp": "2026-05-25T04:00:00.000Z"
}
```

---

## Prerequisites

- **Node.js** >= 18
- **Docker** and **Docker Compose** (for PostgreSQL and Redis)
- **npm** >= 9

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/anigo-backend.git
cd anigo-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start infrastructure services

```bash
docker compose up -d
```

This starts PostgreSQL (port `5432`) and Redis (port `6379`) in the background.

### 4. Configure environment

Copy the example environment file and adjust values as needed:

```bash
cp .env.example .env
```

See [Environment Variables](#environment-variables) for the full reference.

### 5. Run database migrations

```bash
npx prisma migrate dev
```

### 6. Start the development server

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`.

---

## Environment Variables

| Variable          | Description                        | Default                  |
| ----------------- | ---------------------------------- | ------------------------ |
| `DATABASE_URL`    | PostgreSQL connection string       | *(required)*             |
| `REDIS_HOST`      | Redis host                         | `localhost`              |
| `REDIS_PORT`      | Redis port                         | `6379`                   |
| `REDIS_DB_QUEUE`  | Redis database index for BullMQ    | `0`                      |
| `REDIS_DB_CACHE`  | Redis database index for caching   | `1`                      |
| `NODE_ENV`        | Environment (`development` / `production`) | `development`   |
| `PORT`            | Application port                   | `3000`                   |
| `JWT_SECRET`      | Secret key for JWT signing         | *(required in production)* |
| `FRONTEND_URL`    | Allowed CORS origin                | `*` (all origins)        |

---

## Database Schema

The database follows a hierarchical relational model:

```
User

Anime ──< Episode ──< Mirror ──< StreamServer
  |
  >──< Genre  (many-to-many)
```

### Models

**User**
| Column     | Type     | Notes                        |
| ---------- | -------- | ---------------------------- |
| id         | UUID v7  | Primary key                  |
| username   | String   | Unique                       |
| password   | String   | Argon2 hash                  |
| role       | String   | Default: `USER`              |
| createdAt  | DateTime | Auto-generated               |

**Anime**
| Column        | Type        | Notes                      |
| ------------- | ----------- | -------------------------- |
| id            | UUID v7     | Primary key                |
| title         | String      |                            |
| titleJapan    | String?     | Optional Japanese title    |
| slug          | String      | Unique, URL-friendly       |
| type          | String?     |                            |
| coverImage    | String?     | URL to cover art           |
| status        | AnimeStatus | `ON_GOING`, `COMPLETED`, `UPCOMING`, `PENDING` |
| studio        | String?     |                            |
| totalEpisodes | Int?        |                            |
| releaseDate   | Date?       |                            |
| rating        | Float?      |                            |
| synopsis      | Text?       |                            |
| url           | String?     | Source URL                 |
| isActive      | Boolean     | Default: `true`            |

**Genre** — Auto-incremented integer ID, unique `title`, many-to-many with Anime.

**Episode** — UUID v7 ID, belongs to Anime. Contains `episodeNumber`, `slug` (unique), and optional `mirrorLink`.

**Mirror** — UUID v7 ID, belongs to Episode. Unique constraint on `[episodeId, resolution]`. Resolution enum: `P320`, `P480`, `P720`.

**StreamServer** — UUID v7 ID, belongs to Mirror. Unique constraint on `[mirrorId, platform]`. Stores `embedUrl`, `embedHtml`, and `dataContent`.

---

## API Reference

Base URL: `http://localhost:3000`

### Authentication

| Method | Endpoint         | Description                | Auth Required |
| ------ | ---------------- | -------------------------- | ------------- |
| POST   | `/auth/register` | Register a new user        | No            |
| POST   | `/auth/login`    | Login and receive tokens   | No            |
| POST   | `/auth/refresh`  | Rotate refresh token       | Cookie        |
| POST   | `/auth/logout`   | Revoke tokens and clear cookies | Cookie   |

### Users

| Method | Endpoint      | Description        | Auth Required |
| ------ | ------------- | ------------------ | ------------- |
| GET    | `/user`       | List all users     | Yes (JWT)     |
| GET    | `/user/:id`   | Get user by ID     | Yes (JWT)     |
| PATCH  | `/user/:id`   | Update user        | Yes (JWT)     |
| DELETE | `/user/:id`   | Delete user        | Yes (JWT)     |

### Anime

| Method | Endpoint      | Description         | Auth Required |
| ------ | ------------- | ------------------- | ------------- |
| GET    | `/anime`      | List all anime      | No            |
| GET    | `/anime/:id`  | Get anime by ID     | No            |
| POST   | `/anime`      | Create anime        | Yes (JWT)     |
| PATCH  | `/anime/:id`  | Update anime        | Yes (JWT)     |
| DELETE | `/anime/:id`  | Delete anime        | Yes (JWT)     |

### Genre

| Method | Endpoint      | Description         | Auth Required |
| ------ | ------------- | ------------------- | ------------- |
| GET    | `/genre`      | List all genres     | No            |
| GET    | `/genre/:id`  | Get genre by ID     | No            |
| POST   | `/genre`      | Create genre        | Yes (JWT)     |
| PATCH  | `/genre/:id`  | Update genre        | Yes (JWT)     |
| DELETE | `/genre/:id`  | Delete genre        | Yes (JWT)     |

### Episode

| Method | Endpoint         | Description          | Auth Required |
| ------ | ---------------- | -------------------- | ------------- |
| GET    | `/episode`       | List all episodes    | No            |
| GET    | `/episode/:id`   | Get episode by ID    | No            |
| POST   | `/episode`       | Create episode       | Yes (JWT)     |
| PATCH  | `/episode/:id`   | Update episode       | Yes (JWT)     |
| DELETE | `/episode/:id`   | Delete episode       | Yes (JWT)     |

### Mirror

| Method | Endpoint       | Description        | Auth Required |
| ------ | -------------- | ------------------ | ------------- |
| GET    | `/mirror`      | List all mirrors   | No            |
| GET    | `/mirror/:id`  | Get mirror by ID   | No            |
| POST   | `/mirror`      | Create mirror      | Yes (JWT)     |
| PATCH  | `/mirror/:id`  | Update mirror      | Yes (JWT)     |
| DELETE | `/mirror/:id`  | Delete mirror      | Yes (JWT)     |

### Stream Server

| Method | Endpoint              | Description              | Auth Required |
| ------ | --------------------- | ------------------------ | ------------- |
| GET    | `/streamserver`       | List all stream servers  | No            |
| GET    | `/streamserver/:id`   | Get stream server by ID  | No            |
| POST   | `/streamserver`       | Create stream server     | Yes (JWT)     |
| PATCH  | `/streamserver/:id`   | Update stream server     | Yes (JWT)     |
| DELETE | `/streamserver/:id`   | Delete stream server     | Yes (JWT)     |

---

## Authentication

The application implements a **dual-token strategy**:

1. **Access Token** — Short-lived JWT (15 minutes), signed with `JWT_SECRET`. Sent as an `HttpOnly` cookie.
2. **Refresh Token** — Long-lived opaque token (7 days), stored as a SHA-256 hash in Redis. Sent as an `HttpOnly` cookie.

### Token Flow

```
1. Client sends POST /auth/login with credentials
2. Server validates credentials (Argon2 verify)
3. Server generates:
   - JWT access token (15 min TTL)
   - Opaque refresh token (7 day TTL, stored in Redis as SHA-256 hash)
4. Both tokens are set as HttpOnly cookies
5. Client sends requests with cookies automatically attached
6. When access token expires, client calls POST /auth/refresh
7. Server rotates refresh token (old token revoked, new token issued)
8. POST /auth/logout revokes refresh token and clears all cookies
```

### Security Measures

- **HttpOnly cookies** prevent XSS-based token theft
- **Argon2** for password hashing (memory-hard, resistant to GPU attacks)
- **SHA-256** for refresh token storage (high-entropy tokens make dictionary attacks infeasible)
- **Token rotation** on refresh invalidates the previous refresh token
- **SameSite** cookie attribute set to `none` in production, `lax` in development

---

## Caching Strategy

The application uses a **two-tier cache** architecture:

| Tier       | Backend              | TTL       | Purpose                     |
| ---------- | -------------------- | --------- | --------------------------- |
| L1 (fast)  | In-memory (Cacheable)| 2 minutes | Low-latency reads           |
| L2 (shared)| Redis (Keyv)         | Default   | Shared across instances     |

Cache and queue operations use **separate Redis databases** to avoid key collisions:
- DB 0 — BullMQ job queue
- DB 1 — Cache store

### Event-Driven Invalidation

Cache invalidation is handled centrally through `@nestjs/event-emitter`. When any service mutates data, it emits an `entity.mutated` event. The `CacheInvalidationListener` then invalidates all affected keys, including cascading to parent entities:

| Entity Mutated | Keys Invalidated                                           |
| -------------- | ---------------------------------------------------------- |
| streamserver   | `/streamserver`, `/streamserver/:id`, `/mirror`, `/mirror/:mid` |
| mirror         | `/mirror`, `/mirror/:id`, `/episode`, `/episode/:eid`     |
| episode        | `/episode`, `/episode/:id`, `/anime`, `/anime/:aid`       |
| anime          | `/anime`, `/anime/:id`                                     |
| genre          | `/genre`, `/genre/:id`, `/anime` (many-to-many cascade)   |
| user           | `/user`, `/user/:id`                                       |

---

## Project Structure

```
anigo-backend/
├── prisma/
│   └── schema.prisma            # Database schema definition
├── src/
│   ├── main.ts                  # Application bootstrap
│   ├── app.module.ts            # Root module (imports all feature modules)
│   ├── app.controller.ts        # Health check / root controller
│   ├── app.service.ts           # Root service
│   │
│   ├── auth/                    # Authentication module
│   │   ├── auth.controller.ts   # Login, register, refresh, logout endpoints
│   │   ├── auth.service.ts      # Token generation, validation, revocation
│   │   ├── dto/                 # LoginDto, RegisterDto
│   │   ├── entities/            # AuthEntity response shape
│   │   ├── guards/              # JwtAuthGuard
│   │   └── strategies/          # Passport JWT strategy
│   │
│   ├── user/                    # User CRUD module
│   ├── anime/                   # Anime CRUD module
│   ├── genre/                   # Genre CRUD module
│   ├── episode/                 # Episode CRUD module
│   ├── mirror/                  # Mirror CRUD module
│   ├── streamserver/            # Stream server CRUD module
│   │
│   ├── prisma/                  # PrismaService (database client)
│   │
│   └── common/
│       ├── cache/               # CacheInvalidationListener, EntityMutatedEvent
│       ├── dto/                 # ApiResponse DTO (standardized envelope)
│       ├── filters/             # AllExceptionsFilter (global error handler)
│       ├── helper/              # Utility functions
│       └── interceptors/        # ResponseInterceptor (response formatting)
│
├── test/                        # E2E test configuration
├── docker-compose.yml           # PostgreSQL + Redis containers
├── package.json
├── tsconfig.json
└── .env                         # Environment variables (not committed)
```

---

## Scripts

| Command                | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run start`        | Start the application                    |
| `npm run start:dev`    | Start in watch mode (auto-reload)        |
| `npm run start:debug`  | Start in debug mode with watch           |
| `npm run start:prod`   | Start production build (`node dist/main`)|
| `npm run build`        | Compile TypeScript to JavaScript         |
| `npm run lint`         | Run ESLint with auto-fix                 |
| `npm run format`       | Format code with Prettier                |
| `npm run test`         | Run unit tests                           |
| `npm run test:watch`   | Run tests in watch mode                  |
| `npm run test:cov`     | Run tests with coverage report           |
| `npm run test:e2e`     | Run end-to-end tests                     |

---

## License

This project is **UNLICENSED** — proprietary and not open source.
