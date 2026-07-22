import type { Movie } from './Movie';

export type MovieListProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  newList: Movie[];
  show: boolean;
  changeOpen: () => void;
  changeClose: () => void;
  clearMovies: () => void;
  addToList: (title: string) => void;
  removeMovie: (id: number) => void;
  onAddReview: (id: number, value: string) => void;
  addReview: (id: number, value: string) => void;
  toggleWatched: (id: number) => void;
  updateRating: (id: number, rating: number) => void;
  onAddReview: (id: number, value: string) => void;
};