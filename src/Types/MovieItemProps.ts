import type { Movie } from './Movie';

export type MovieItemProps = {
  movie: Movie;
  onRemoveMovie: (id: number) => void;
  onToggleWatched: (id: number) => void;
  onAddReview: (id: number, value: string) => void;
  onUpdateRating: (id: number, rating: number) => void;
};
