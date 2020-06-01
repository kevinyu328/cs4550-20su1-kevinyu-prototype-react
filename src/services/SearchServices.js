const searchByTitle = (title) =>
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=afe0ad21`)
      .then(response => response.json())


const searchByImdbID = (id) =>
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=afe0ad21`)
      .then(response => response.json())





export default {
  searchByTitle,
  searchByImdbID
}


