import React from "react";
import SearchResults from "./SearchResults";
import SearchServices from "../services/SearchServices"


export default class Search extends React.Component {
  state = {
    search: '',
    movies: []
  }


  searchMovie = () =>
      SearchServices.searchByTitle(this.state.search)
        .then(results => this.setState({movies: results.Search}))

  render() {
    return (
        <div className="container">

        <h2>Search</h2>
          <div className="input-group mb-3">
            <input type="text"
                   className="form-control"
                   placeholder="Search"
                   value={this.state.search}
                   onChange={event => this.setState({search: event.target.value})}/>

            <div className="input-group-append">
              <button className="btn btn-primary"
                      type="button"
                      id="button-addon2"
                      onClick={this.searchMovie}>
                Search
              </button>
            </div>
          </div>

        <SearchResults movies={this.state.movies}/>

        </div>
    )
  }
}