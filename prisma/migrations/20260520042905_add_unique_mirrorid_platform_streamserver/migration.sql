/*
  Warnings:

  - A unique constraint covering the columns `[mirrorId,platform]` on the table `stream_servers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "stream_servers_mirrorId_platform_key" ON "stream_servers"("mirrorId", "platform");
