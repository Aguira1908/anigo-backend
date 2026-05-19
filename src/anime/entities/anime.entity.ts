import { AnimeStatus } from '@prisma/client';
import { GenreEntity } from '../../genre/entities/genre.entity';

export class AnimeEntity {
  id: string;
  title: string;
  titleJapan: string | null;
  slug: string;
  type: string | null;
  coverImage: string | null;
  status: AnimeStatus;
  studio: string | null;
  totalEpisodes: number | null;
  releaseDate: Date | null;
  rating: number | null;
  synopsis: string | null;
  url: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  genres?: GenreEntity[];
}
