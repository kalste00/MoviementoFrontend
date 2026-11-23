import type { Movie } from '../Types/Movie';

const API_URL = "http://localhost:5000/api/movie";

export async function getMovies(): Promise<Movie[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    return await response.json();

}

export async function getMovieById(id: string): Promise<Movie> {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch movie with id ${id}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

export async function addMovie(movie: Movie): Promise<Movie> {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    });

    if (!response.ok) {
        throw new Error(`Failed to add movie: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

export async function updateMovie(id: string, movie: Movie): Promise<Movie> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
    });

    if (!response.ok) {
        throw new Error(`Failed to update movie with id ${id}: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

export async function deleteMovie(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to delete movie with id ${id}: ${response.status} ${response.statusText}`);
    }
}

export async function clearMovies(): Promise<void> {

    const response = await fetch(API_URL,{
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error(`Failed to clear movies: ${response.status} ${response.statusText}`);
    }
}

