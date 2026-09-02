import type { Movie } from '../Types/Movie';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card" >
      <img
        src={props.movie.posterUrl}
        alt={props.movie.title}
        style={{ width: '100px', height: '150px' }}
      />
      <h3>{props.movie.title}</h3>
    </div>
  );
}

export default MovieCard;
