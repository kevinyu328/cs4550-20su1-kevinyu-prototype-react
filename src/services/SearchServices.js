const searchByTitle = (title) =>
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=afe0ad21`)
      .then(response => response.json())


const searchByImdbID = (id) =>
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=afe0ad21`)
      .then(response => response.json())


const getImdbIdByTitleYear = (title, year) =>
    fetch(`https://www.omdbapi.com/?t=${title}&y=${year}&apikey=afe0ad21`)
      .then(response => response.json())




export default {
  searchByTitle,
  searchByImdbID,
  getImdbIdByTitleYear
}


