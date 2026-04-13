import {useState} from 'react'

function MovieList({ onAddMovie }: { onAddMovie: (title: string) => void }) {
  const [inputValue, setInputValue] = useState('');

    return (
    <div className="movie-list">
      <h2>Your Movie Collection</h2>
      <form className="add-movie-form" onSubmit={e => {
        e.preventDefault();
        onAddMovie(inputValue);
        setInputValue('');
      }}>
        <input type="text" placeholder="Add a new movie..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type="submit">Add Movie</button>
      </form>
      </div>
      
  );
}

export default MovieList;
