import type { Movie } from './Movie';

export type MovieItemProps = {
  movie: Movie;
  addReview: (id: number, value: string) => void;
  onRemoveMovie: (id: number) => void;
  onToggleWatched: (id: number) => void;
  onUpdateRating: (id: number, rating: number) => void;
};
