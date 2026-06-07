import MovieList from "../Components/Movies";
import type { MovieListProps } from "../Types/MovieListProps";

function MoviePage(props: MovieListProps) {
  return (
    <div>
      <h1>Movies Page</h1>
      <p>Here you can manage your movie collection.</p>

      <MovieList {...props} />
    </div>
  );
}

export default MoviePage;