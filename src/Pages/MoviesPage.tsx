import MovieList from "../Components/Movies";
import type { MovieListProps } from "../Types/MovieListProps";
import MovieCard from "../Components/MovieCard";

function MoviePage(props: MovieListProps) {
  return (
    <div>
      <h1>Movies Page</h1>
      <MovieList {...props} />
      <div className="movie-grid">
        {props.newList.length > 0 ? (
          props.newList.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <p>No movies added yet.</p>
        )}
      </div>
    </div>
  );
}

export default MoviePage;