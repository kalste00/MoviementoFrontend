
import type { MovieListProps } from "../Types/MovieListProps";
import MovieItem from "../Components/MovieItem";

export function MovieDetails(props: MovieListProps) {
    return (
        <div>
            <h1>Movie Details Page</h1>
            <p>Here you can view and edit details of a specific movie.</p>
            <div className="card" style={{ marginTop: '20px' }}>
                <div style={{ marginTop: '20px' }}>

                    <table style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                        {props.newList.length > 0 ? (
                            props.newList.map(movie => (
                                <MovieItem
                                    key={movie.id}
                                    movie={movie}
                                    onRemoveMovie={props.removeMovie}
                                    onToggleWatched={props.toggleWatched}
                                    onUpdateRating={props.updateRating}
                                    onAddReview={props.onAddReview}
                                    addReview={props.addReview}
                                />
                            ))
                        ) : (
                            <li>No movies added yet.</li>
                        )}

                        <button onClick={props.clearMovies}>
                            Clear All Movies
                        </button>
                    </table>
                </div>
            </div>
        </div>
    );
}