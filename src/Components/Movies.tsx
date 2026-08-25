import MovieItem from './MovieItem';
import type { MovieListProps } from '../Types/MovieListProps';

function MovieList(props: MovieListProps) {
  return (

    <div className="movie-list">
      <h2>Your Movie Collection</h2>


      <form
        className="add-movie-form"
        onSubmit={e => {
          e.preventDefault();
          props.addToList(props.inputValue);
          props.setInputValue('');
        }}
      >
        <input
          type="text"
          placeholder="Add a new movie..."
          value={props.inputValue}
          onChange={e => props.setInputValue(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>

      <div className="card" style={{ marginTop: '20px' }}>
        <button onClick={props.changeOpen}>Show Movies</button>

        {props.show && (
          <div style={{ marginTop: '20px' }}>
            <button onClick={props.changeClose} style={{ marginRight: '10px' }}>
              Close
            </button>

            <button onClick={props.clearMovies}>
              Clear All Movies
            </button>

            <table style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Watched</th>
                  <th>Review</th>
                  <th>Rating</th>
                </tr>
              </thead>

              {props.newList.length > 0 ? (
                props.newList.map(movie => (
                  <MovieItem
                    key={movie.id}
                    movie={movie}    
                    onRemoveMovie={props.removeMovie}
                    onToggleWatched={props.toggleWatched}
                    onUpdateRating={props.updateRating}
                    onAddReview={props.onAddReview}
                    addReview={props.addReview}
                  />
                ))
              ) : (
                <li>No movies added yet.</li>
              )}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieList;