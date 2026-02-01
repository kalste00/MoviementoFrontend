import { useState } from 'react'
import './App.css'

interface Movie {
  id: number;
  title: string;
  watched: boolean;
  rating?: number;
}

function App() {
  const [newList, setNewList] = useState<Movie[]>([]);
  const[show, setShow] = useState(false);
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);
  const normalizeTitle = (movie: Movie) => movie.title.toLowerCase();

  var addToList = (title: string) => {
    let id = newList.length > 0 ? newList[newList.length - 1].id + 1 : 1;
    if (
      title.trim() !== '' &&
      !newList.some(movie => normalizeTitle(movie) === title.trim().toLowerCase())
    ) {
      setNewList(prev => [
        ...prev,
        { id: id, title: title.trim(), watched: false }
      ]);
    }
  };

  var removeMovie = () => {
    setNewList(prev => prev.slice(0, -1));
  };

  return (
    <>
    <FirstWelcome movies={newList.length} /> 
    <MovieList onAddMovie={addToList} />

      <div className="card">
        <button onClick={changeOpen}>Show Movies</button>
        {show && (
          <div>
            <h2>Your Movie Collection</h2>
            <button onClick={changeClose}>Close</button>
            <button onClick={() => setNewList([])}>Clear All Movies</button>
            <button onClick={() => removeMovie()}>Remove</button>
            <ul>
              {newList.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
              {newList.length === 0 && <li>No movies added yet.</li>}

            </ul>
      </div>
        )}
      </div>
    </>
  )
}

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



function FirstWelcome({ movies }: { movies: number }) {

  return (
    <div className="welcome-message">
      <h1>Welcome to Moviemento!</h1>
      <p>Your ultimate movie management app.</p>

      {movies === 0 ? (
        <p>You have no movies in your collection. Start adding some!</p>
      ) : (
        <p>You have {movies} movies in your collection.</p>
      )}
    </div>
  );
}


export default App; FirstWelcome; MovieList;

