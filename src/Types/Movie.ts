export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  watched: boolean;
  rating?: number;
  review?: string;
}
