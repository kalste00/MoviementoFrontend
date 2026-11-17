
import { useState, useEffect } from 'react';
import type { Movie } from '../Types/Movie';
import movieImage from '../Images/movie.jpeg';
import { getMovies } from '../API/movieApi';

export const useMovies = () => {
    const [inputValue, setInputValue] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const normalizeTitle = (movie: Movie) => movie.title.toLowerCase();

    const addToList = (title: string) => {
        const trimmedTitle = title.trim();

        const id = movies.length > 0
            ? movies[movies.length - 1].id + 1
            : 1;

        if (
            trimmedTitle !== '' &&
            !movies.some(movie =>
                normalizeTitle(movie) === trimmedTitle.toLowerCase()
            )
        ) {
            const newMovie: Movie = {
                id: id,
                title: trimmedTitle,
                imdbId: '',
                year: '',
                posterUrl: movieImage,
                description: '',
                genre: '',
                director: '',
                actors: '',
                watched: false,
                rating: undefined,
                review: ''
            };

            setMovies(prev => [...prev, newMovie]);
        }
    };

    const addReview = (id: number, value: string) => {
        setMovies(prev =>
            prev.map(movie =>
                movie.id === id ? { ...movie, review: value } : movie
            )
        );
    };

    const removeMovie = (id: number) => {
        setMovies(prev => prev.filter(movie => movie.id !== id));
    };

    const toggleWatched = (id: number) => {
        setMovies(prev =>
            prev.map(movie =>
                movie.id === id
                    ? { ...movie, watched: !movie.watched }
                    : movie
            )
        );
    };

    const updateRating = (id: number, rating: number) => {
        setMovies(prev =>
            prev.map(movie =>
                movie.id === id ? { ...movie, rating: rating } : movie
            )
        );
    };

    const clearMovies = () => setMovies([]);

    useEffect(() => {
        async function loadMovies() {
            try {
                const data = await getMovies();
                setMovies(data);
            } catch (error) {
                setError('Could not load movies');
            } finally {
                setLoading(false);
            }
        }

        loadMovies();
    }, []);

    return {
        movies,
        setMovies,
        loading,
        error,
        inputValue,
        setInputValue,
        addToList,
        removeMovie,
        toggleWatched,
        updateRating,
        addReview,
        clearMovies
    };
};
