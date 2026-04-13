
function FirstWelcome({ movies }: { movies: number }) {
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
export default FirstWelcome;