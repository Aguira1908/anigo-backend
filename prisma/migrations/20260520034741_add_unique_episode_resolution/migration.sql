/*
  Warnings:

  - A unique constraint covering the columns `[episodeId,resolution]` on the table `mirrors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "mirrors_episodeId_resolution_key" ON "mirrors"("episodeId", "resolution");
