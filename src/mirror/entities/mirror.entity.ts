import { Resolution } from '@prisma/client';

export class MirrorEntity {
  id: string;
  episodeId: string;
  resolution: Resolution;
  createdAt: Date;
  updatedAt: Date;
}
