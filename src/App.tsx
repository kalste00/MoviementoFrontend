import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const [newList, setNewList] = useState<string[]>([]);
  const[show, setShow] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);

  var addToList = (e: React.FormEvent) => {
    e.preventDefault();
    const value = input.current?.value;
    if (value) {
      setNewList([...newList, value]);
    }
    if
    (input.current) {
      input.current.value = '';
    }
  };

  return (
    <>
    <FirstWelcome />
    <MovieList onAddMovie={addToList} />
      <div className="card">
      </div>
    </>
  )
}

function MovieList({ onAddMovie }: { onAddMovie: (e: React.FormEvent) => void }) {

  var movies: string[] = [];
    const listItems = movies.map(movies =>
      <li>{movies}</li>
    );
    return <ul>{listItems}</ul>;
  return (
    
    <div className="movie-list">
      <h2>Your Movie Collection</h2>
     
      <form className="add-movie-form" onSubmit={onAddMovie}>
        <input type="text" placeholder="Add a new movie..." />
        <button type="submit">Add Movie</button>
      </form>
      </div>
  );
}



function FirstWelcome() {
  const movies = 0;

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

