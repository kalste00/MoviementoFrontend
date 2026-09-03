import type { Movie } from './Movie';

export type MovieListProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  newList: Movie[];
  clearMovies: () => void;
  addToList: (title: string) => void;
  removeMovie: (id: number) => void;
  addReview: (id: number, value: string) => void;
  toggleWatched: (id: number) => void;
  updateRating: (id: number, rating: number) => void;
};