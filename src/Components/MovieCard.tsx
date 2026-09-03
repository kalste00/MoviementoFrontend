import {useNavigate} from "react-router-dom";
import type {Movie} from "../Types/Movie";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard(props: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movies/${props.movie.id}`)}
    >
      <h3>{props.movie.title}</h3>
      <img
        src={props.movie.posterUrl}
        alt={props.movie.title}
        style={{width: "200px"}}
      />
      
    </div>
  );
}

export default MovieCard;
