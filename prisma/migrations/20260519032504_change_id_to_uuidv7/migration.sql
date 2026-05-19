/*
  Warnings:

  - The primary key for the `_AnimeToGenre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `animes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `episodes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `mirrors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `stream_servers` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_AnimeToGenre" DROP CONSTRAINT "_AnimeToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "episodes" DROP CONSTRAINT "episodes_animeId_fkey";

-- DropForeignKey
ALTER TABLE "mirrors" DROP CONSTRAINT "mirrors_episodeId_fkey";

-- DropForeignKey
ALTER TABLE "stream_servers" DROP CONSTRAINT "stream_servers_mirrorId_fkey";

-- AlterTable
ALTER TABLE "_AnimeToGenre" DROP CONSTRAINT "_AnimeToGenre_AB_pkey",
ALTER COLUMN "A" SET DATA TYPE TEXT,
ADD CONSTRAINT "_AnimeToGenre_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "animes" DROP CONSTRAINT "animes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "animes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "animes_id_seq";

-- AlterTable
ALTER TABLE "episodes" DROP CONSTRAINT "episodes_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "animeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "episodes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "episodes_id_seq";

-- AlterTable
ALTER TABLE "mirrors" DROP CONSTRAINT "mirrors_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "episodeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "mirrors_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "mirrors_id_seq";

-- AlterTable
ALTER TABLE "stream_servers" DROP CONSTRAINT "stream_servers_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "mirrorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "stream_servers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "stream_servers_id_seq";

-- AddForeignKey
ALTER TABLE "episodes" ADD CONSTRAINT "episodes_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "animes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mirrors" ADD CONSTRAINT "mirrors_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stream_servers" ADD CONSTRAINT "stream_servers_mirrorId_fkey" FOREIGN KEY ("mirrorId") REFERENCES "mirrors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimeToGenre" ADD CONSTRAINT "_AnimeToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "animes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
