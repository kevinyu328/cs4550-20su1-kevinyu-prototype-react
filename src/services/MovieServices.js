export const findFavoriteMoviesForUser = (username) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/users/${username}/favorites`)
      .then(response => response.json())



export const addMovieToFavorites = (username, movie) =>
    fetch(`https://cs4550-20su1-proto-server.herokuapp.com/api/users/${username}/favorites`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {"content-type": "application/json"}
    })
      .then(response => response.json())
