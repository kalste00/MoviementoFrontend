import '../App.css';
import FirstWelcome from './FrontPage';
import MoviePage from './MoviesPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useMovies } from '../Hooks/useMovies';

function App() {
  const {
    newList,
    inputValue,
    setInputValue,
    show,
    changeOpen,
    changeClose,
    addToList,
    removeMovie,
    toggleWatched,
    updateRating,
    clearMovies,
    addReview,
  } = useMovies();

  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link style={{ marginRight: '10px' }} to="/">
          FrontPage
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FirstWelcome />} />

        <Route
          path="/movies"
          element={
            <MoviePage
              newList={newList}
              inputValue={inputValue}
              setInputValue={setInputValue}
              show={show}
              changeOpen={changeOpen}
              changeClose={changeClose}
              addToList={addToList}
              removeMovie={removeMovie}
              toggleWatched={toggleWatched}
              updateRating={updateRating}
              clearMovies={clearMovies}
              addReview={addReview}
              onAddReview={addReview}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;