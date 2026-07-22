import { useState } from 'react';
import type { Movie } from '../Types/Movie';

export const useMovies = () => {
    const [inputValue, setInputValue] = useState('');
    const [newList, setNewList] = useState<Movie[]>([]);
    const [show, setShow] = useState(false);
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
                    rating: undefined,
                    review: '',
                },
            ]);
        }
    };

    const addReview = (id: number, value: string) => {
        setNewList(prev =>
            prev.map(movie =>
                movie.id === id ? { ...movie, review: value } : movie
            )
        );
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
    const clearMovies = () => setNewList([]);

    return {
        inputValue,
        setInputValue,
        newList,
        setNewList,
        show,
        setShow,
        changeOpen,
        changeClose,
        addToList,
        removeMovie,
        toggleWatched,
        updateRating,
        addReview,
        clearMovies
    };
}
