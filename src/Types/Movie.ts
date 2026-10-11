export interface Movie {
  id: number;
  imdbId: string;
  title: string;
  year: string;
  posterUrl: string;
  description: string;
  genre: string;
  director: string;
  actors: string;
  watched: boolean;
  rating?: number;
  review?: string;
}