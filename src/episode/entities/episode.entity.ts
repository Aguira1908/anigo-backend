import { AnimeEntity } from '../../anime/entities/anime.entity';

export class EpisodeEntity {
  id: string;
  animeId: string;
  slug: string;
  title: string | null;
  episodeNumber: number;
  mirrorLink: string | null;
  urlEpisode: string | null;
  releaseDate: Date | null;
  createdAt: Date;
  updatedAt: Date;

  // Relations
  anime?: AnimeEntity;
  mirrors?: any[];
}
