import type { MovieListProps } from '../Types/MovieListProps';

function MovieList(props: MovieListProps) {
  return (

    <div className="movie-list">
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
    </div>
  );
}

export default MovieList;