import { useState } from 'react'
import '../App.css'
import FirstWelcome from './FrontPage';
import MovieList from './Movies';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  watched: boolean;
  rating?: number;
}

function App() {
  const [newList, setNewList] = useState<Movie[]>([]);
  const [show, setShow] = useState(false);
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);
  const normalizeTitle = (movie: Movie) => movie.title.toLowerCase();

  const addToList = (title: string) => {
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

  const removeMovie = (id: number) => {
    setNewList(prev => prev.filter(movie => movie.id !== id));
  };

  return (
    <BrowserRouter>
      <>
      <nav>
        <Link style={{ marginRight: '10px' }} to="/Home">FrontPage </Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes >
        <Route path="/Home" element={<FirstWelcome movies={newList.length} />} />
        <Route path="/movies" element={<MovieList onAddMovie={addToList} />} />
      </Routes>
      
        <div className="card">
          <button onClick={changeOpen}>Show Movies</button>
          {show && (
            <div>
              <h2>Your Movie Collection</h2>
              <button onClick={changeClose}>Close</button>
              <button onClick={() => setNewList([])}>Clear All Movies</button>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {newList.length > 0 ? (
                  newList.map(movie => (
                    <MovieItem
                      key={movie.id}
                      movie={movie}
                      onRemoveMovie={removeMovie}
                    />
                  ))
                ) : (
                  <li>No movies added yet.</li>)}
              </ul>
            </div>
          )}
        </div>
      </>
    </BrowserRouter>
  )
}

function MovieItem({ movie, onRemoveMovie }: { movie: Movie; onRemoveMovie: (id: number) => void }) {
  return (
    <li>
      {movie.title}
      <button onClick={() => onRemoveMovie(movie.id)}
        style={{ marginLeft: '20px' }}
      >Remove</button>
    </li>
  );
}


export default App; MovieItem;

