import type {MovieItemProps} from '../Types/MovieItemProps';

function MovieItem({
  movie,
  onRemoveMovie,
  onToggleWatched,
  onUpdateRating,
  onAddReview
}: MovieItemProps) {
    return (
    <li style={{ marginBottom: '16px' }}>
      <strong>{movie.title}</strong>

      <div style={{ marginTop: '6px' }}>
        <label>
          <input
            type="checkbox"
            checked={movie.watched}
            onChange={() => onToggleWatched(movie.id)}
          />{' '}
          Watched
        </label>
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>
          Review:{' '}
          <input
            type="text"
            placeholder="Add a review..."
            value={movie.review}
            onChange={e => onAddReview(movie.id, e.target.value)}
          />
        </label>

        <button onClick={() => onAddReview(movie.id, '')} style={{ marginLeft: '8px' }}>
          Save
        </button>
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>
          Rating:{' '}
          <select
            value={movie.rating ?? ''}
            onChange={e => onUpdateRating(movie.id, Number(e.target.value))}
          >
            <option value="">Choose rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
      </div>

      <button
        onClick={() => onRemoveMovie(movie.id)}
        style={{ marginTop: '8px' }}
      >
        Remove
      </button>
    </li>
  );
}
export default MovieItem;