export const findFavoriteMoviesForUser = (username) =>
    fetch(`http://localhost:8080/api/users/${username}/favorites`)
      .then(response => response.json())



export const addMovieToFavorites = (username, movie) =>
    fetch(`http://localhost:8080/api/users/${username}/favorites`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())
