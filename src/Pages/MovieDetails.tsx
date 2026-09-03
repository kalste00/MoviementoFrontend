import { useParams, useNavigate } from "react-router-dom";
import MovieItem from "../Components/MovieItem";
import type { MovieListProps } from "../Types/MovieListProps";

export function MovieDetails(props: MovieListProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const movie = props.newList.find(
    movie => movie.id === Number(id)
  );

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div>
      <h1>Movie Details Page</h1>

      <div className="card" style={{ marginTop: "20px" }}>
        <img src={movie.posterUrl} alt={movie.title} style={{width: "200px"}} />
        <MovieItem
          movie={movie}
          addReview={props.addReview}
          onRemoveMovie={props.removeMovie}
          onToggleWatched={props.toggleWatched}
          onUpdateRating={props.updateRating}
        />

        <button onClick={() => navigate("/movies")}>
          Back to Movielist
        </button>
      </div>
    </div>
  );
}