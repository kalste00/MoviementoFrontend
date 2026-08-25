import type { MovieItemProps } from '../Types/MovieItemProps';
import { useState } from 'react';

function MovieItem(props: MovieItemProps) {
  const [reviewInput, setReviewInput] = useState(props.movie.review ?? '');
  const [isBlank, setIsBlank] = useState(false);

  return (
      <tbody>
        <tr>
          <td>{props.movie.title}</td>

        <td>
          <input
            type="checkbox"
            checked={props.movie.watched}
            onChange={() => props.onToggleWatched(props.movie.id)}
          />{' '}
          Watched
        </td>

        <form
          className="review-form"
          onSubmit={e => {
            e.preventDefault();

            if (reviewInput.trim() === '') {
              setIsBlank(true);
            }

            setIsBlank(false);
            props.addReview(props.movie.id, reviewInput);
            setReviewInput('');
          }}
        >
          <div style={{ marginTop: '10px' }}>
            Add a Review:{' '}
            <input
              type="text"
              placeholder="Add a review..."
              value={reviewInput}
              onChange={e => {
                setReviewInput(e.target.value);

                if (isBlank && e.target.value.trim() !== '') {
                  setIsBlank(false);
                }
              }}
            />
            <button type="submit">Save Review</button>
          </div>

          {isBlank && (
            <p style={{ color: 'red', marginTop: '5px' }}>
              Error: Review cannot be blank.
            </p>
          )}
        </form>

        <td>
          {props.movie.review || 'No review added yet.'}
        </td>

      <td>
        <label>
          Rating:{' '}
          <select
            value={props.movie.rating ?? ''}
            onChange={e =>
              props.onUpdateRating(props.movie.id, Number(e.target.value))
            }
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
      </td>
    </tr>

      <button
        onClick={() => props.onRemoveMovie(props.movie.id)}
        style={{ marginTop: '8px' }}
      >
        Remove
      </button>
      
    </tbody>
  );
}

export default MovieItem;