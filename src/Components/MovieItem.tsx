import type {MovieItemProps} from '../Types/MovieItemProps';
import { useState } from 'react';

function MovieItem(props: MovieItemProps) {
    const [reviewInput, setReviewInput] = useState(props.movie.review ?? '');
    return (
    <li style={{ marginBottom: '16px' }}>
      <strong>{props.movie.title}</strong>

      <div style={{ marginTop: '6px' }}>
          <input
            type="checkbox"
            checked={props.movie.watched}
            onSubmit={() => props.onToggleWatched(props.movie.id)}
          />{' '}
          Watched

        <form
          className="review-form"
          onSubmit={e => {
            e.preventDefault();
            props.addReview(props.movie.id, reviewInput);
            setReviewInput('')
          }}
          >
          Add a Review:{' '}
          <input
            type="text"
            placeholder="Add a review..."
            value = {reviewInput}
            onChange={e => setReviewInput(e.target.value)}
          />
          <button type="submit">Save Review</button>
        </form>
        Review: {props.movie.review}
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>
          Rating:{' '}
          <select
            value={props.movie.rating ?? ''}
            onChange={e => props.onUpdateRating(props.movie.id, Number(e.target.value))}
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
        onClick={() => props.onRemoveMovie(props.movie.id)}
        style={{ marginTop: '8px' }}
      >
        Remove
      </button>
    </li>
  );
}
export default MovieItem;