import { useState } from 'react';

interface Movie {
  id: number;
  title: string;
  watched: boolean;
  rating?: number;
}

function MovieList() {
  const [inputValue, setInputValue] = useState('');
  const [show, setShow] = useState(false);
  const [newList, setNewList] = useState<Movie[]>([]);
  const changeOpen = () => setShow(true);
  const changeClose = () => setShow(false);
  const normalizeTitle = (movie: Movie) => movie.title.toLowerCase();

  const addToList = (title: string) => {
    const trimmedTitle = title.trim();
    const id = newList.length > 0 ? newList[newList.length - 1].id + 1 : 1;

    if (
      trimmedTitle !== '' &&
      !newList.some(movie => normalizeTitle(movie) === trimmedTitle.toLowerCase())
    ) {
      setNewList(prev => [
        ...prev,
        {
          id: id,
          title: trimmedTitle,
          watched: false,
        },
      ]);
    }
  };

  const removeMovie = (id: number) => {
    setNewList(prev => prev.filter(movie => movie.id !== id));
  };

  const toggleWatched = (id: number) => {
    setNewList(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const updateRating = (id: number, rating: number) => {
    setNewList(prev =>
      prev.map(movie =>
        movie.id === id ? { ...movie, rating: rating } : movie
      )
    );
  };

  return (
    <div className="movie-list">
      <h2>Your Movie Collection</h2>

      <form
        className="add-movie-form"
        onSubmit={e => {
          e.preventDefault();
          addToList(inputValue);
          setInputValue('');
        }}
      >
        <input
          type="text"
          placeholder="Add a new movie..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>

      <div className="card" style={{ marginTop: '20px' }}>
        <button onClick={changeOpen}>Show Movies</button>

        {show && (
          <div style={{ marginTop: '20px' }}>
            <button onClick={changeClose} style={{ marginRight: '10px' }}>
              Close
            </button>

            <button onClick={() => setNewList([])}>Clear All Movies</button>

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
              {newList.length > 0 ? (
                newList.map(movie => (
                  <MovieItem
                    key={movie.id}
                    movie={movie}
                    onRemoveMovie={removeMovie}
                    onToggleWatched={toggleWatched}
                    onUpdateRating={updateRating}
                  />
                ))
              ) : (
                <li>No movies added yet.</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

type MovieItemProps = {
  movie: Movie;
  onRemoveMovie: (id: number) => void;
  onToggleWatched: (id: number) => void;
  onUpdateRating: (id: number, rating: number) => void;
};

function MovieItem({
  movie,
  onRemoveMovie,
  onToggleWatched,
  onUpdateRating,
}: MovieItemProps) {
  return (
    <li style={{ marginBottom: '16px' }}>
      <strong>{movie.title}</strong>

      <div style={{ marginTop: '6px' }}>
        <label>
          <input
            type="checkbox"
            checked={movie.watched}
            onChange={() => onToggleWatched(movie.id)}
          />{' '}
          Watched
        </label>
      </div>

      <div style={{ marginTop: '6px' }}>
        <label>
          Rating:{' '}
          <select
            value={movie.rating ?? ''}
            onChange={e => onUpdateRating(movie.id, Number(e.target.value))}
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
        onClick={() => onRemoveMovie(movie.id)}
        style={{ marginTop: '8px' }}
      >
        Remove
      </button>
    </li>
  );
}

export default MovieList;