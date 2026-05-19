export class StreamserverEntity {
  id: string;
  mirrorId: string;
  platform: string;
  dataContent: string | null;
  embedUrl: string | null;
  embedHtml: string | null;
  createdAt: Date;
  updatedAt: Date;
}
