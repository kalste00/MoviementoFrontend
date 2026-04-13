import '../App.css';
import FirstWelcome from './FrontPage';
import MovieList from './Movies';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
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
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;