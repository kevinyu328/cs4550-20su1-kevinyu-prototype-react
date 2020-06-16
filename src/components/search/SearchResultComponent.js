import React from "react";
import SearchResultRowComponent from "./SearchResultRowComponent";
import SearchServices from "../../services/SearchServices";
import {Link} from "react-router-dom";
import "./Search.style.client.css"


export default class SearchResultComponent extends React.Component {
  state = {
    movies: []
  }


  componentDidMount() {
    SearchServices.searchByTitle(this.props.match.params.criteria)
      .then(results => this.setState({movies: results.Search}))
  }


  render() {
    return (
        <div className='container'>
          <h2>Search Results</h2>
          <div className='list-group'>
            {
              this.state.movies.map(movie =>

                  <Link key={movie.imdbID}
                        className='list-group-item'
                        to={`/details/${movie.imdbID}`}>

                    <div className='wbdv-search-result-poster-title-year'>
                      <img src={movie.Poster}
                           className='wbdv-movie-poster-search'/>

                      <div className='wbdv-search-result-title-year'>
                        <span>
                          {movie.Title} ({movie.Year})
                        </span>
                      </div>
                    </div>


                  </Link>


              )
            }
          </div>
        </div>


    )
  }
}