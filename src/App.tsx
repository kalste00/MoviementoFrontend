import { useState } from 'react'
import './App.css'

function App() {
  const [newList, setNewList] = useState<string[]>([]);
  const[show, setShow] = useState(false);
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);
  const normalizeTitle = (title: string) => title.toLowerCase();

  var addToList = (title: string) => {
    if (title.trim() !== '' && !newList.some(movie => normalizeTitle(movie) === normalizeTitle(title))) {
      setNewList(prev => [...prev, title]);
    }
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
            <ul>
              {newList.map((movie, index) => (
                <li key={index}>{movie}</li>
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

