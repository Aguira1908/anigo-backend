-- CreateEnum
CREATE TYPE "AnimeStatus" AS ENUM ('ON_GOING', 'COMPLETED', 'UPCOMING', 'PENDING');

-- CreateEnum
CREATE TYPE "Resolution" AS ENUM ('P320', 'P480', 'P720');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "animes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "titleJapan" TEXT,
    "slug" TEXT NOT NULL,
    "type" TEXT,
    "status" "AnimeStatus" NOT NULL DEFAULT 'ON_GOING',
    "studio" TEXT,
    "totalEpisodes" INTEGER,
    "releaseDate" DATE,
    "rating" DOUBLE PRECISION,
    "synopsis" TEXT,
    "url" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "animes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episodes" (
    "id" SERIAL NOT NULL,
    "animeId" INTEGER NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT,
    "episodeNumber" INTEGER NOT NULL,
    "mirrorLink" TEXT,
    "urlEpisode" TEXT,
    "releaseDate" DATE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mirrors" (
    "id" SERIAL NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "resolution" "Resolution" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mirrors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stream_servers" (
    "id" SERIAL NOT NULL,
    "mirrorId" INTEGER NOT NULL,
    "platform" VARCHAR(100) NOT NULL,
    "dataContent" TEXT,
    "embedUrl" TEXT,
    "embedHtml" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stream_servers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AnimeToGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AnimeToGenre_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "animes_slug_key" ON "animes"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "genres_title_key" ON "genres"("title");

-- CreateIndex
CREATE UNIQUE INDEX "episodes_slug_key" ON "episodes"("slug");

-- CreateIndex
CREATE INDEX "_AnimeToGenre_B_index" ON "_AnimeToGenre"("B");

-- AddForeignKey
ALTER TABLE "episodes" ADD CONSTRAINT "episodes_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "animes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mirrors" ADD CONSTRAINT "mirrors_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stream_servers" ADD CONSTRAINT "stream_servers_mirrorId_fkey" FOREIGN KEY ("mirrorId") REFERENCES "mirrors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToGenre" ADD CONSTRAINT "_AnimeToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "animes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToGenre" ADD CONSTRAINT "_AnimeToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;
