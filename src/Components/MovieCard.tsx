import { useNavigate } from 'react-router-dom';
import type { Movie } from '../Types/Movie';

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
      <img
        src={props.movie.posterUrl}
        alt={props.movie.title}
      />
      <h3>{props.movie.title}</h3>
    </div>
  );
}

export default MovieCard;