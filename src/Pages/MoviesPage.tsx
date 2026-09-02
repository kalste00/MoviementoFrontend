import MovieItem from "../Components/MovieItem";
import MovieList from "../Components/Movies";
import type { MovieListProps } from "../Types/MovieListProps";

function MoviePage(props: MovieListProps) {
  return (
    <div>
      <h1>Movies Page</h1>
      <p>Here you can manage your movie collection.</p>

      <MovieList {...props} />
      <table
        style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}
      >
        {props.newList.length > 0 ? (
          props.newList.map(movie => (
            <td>
              <img src={props.image} style={{ width: '100px', height: '150px' }} />
            </td>
          ))
        ) : (
          <li>No movies added yet.</li>
        )}
      </table>
    </div>
  );
}

export default MoviePage;