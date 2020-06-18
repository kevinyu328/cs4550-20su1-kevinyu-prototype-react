export const findFavoriteMoviesForUser = (username) =>
    fetch(`/api/users/${username}/favorites`)
      .then(response => response.json())



export const addMovieToFavorites = (username, movie) =>
    fetch(`/api/users/${username}/favorites`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())