const searchByTitle = (title) =>
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=afe0ad21`)
      .then(response => response.json())


const searchByImdbID = (id) =>
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=afe0ad21`)
      .then(response => response.json())





export default {
  searchByTitle,
  searchByImdbID
}


