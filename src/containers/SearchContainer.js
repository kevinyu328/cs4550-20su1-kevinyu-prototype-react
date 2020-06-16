import React from "react";
import SearchResultComponent from "../components/search/SearchResultComponent";
import SearchServices from "../services/SearchServices"
import {Link, Redirect} from "react-router-dom";


export default class SearchContainer extends React.Component {
  state = {
    search: '',
    movies: [],
    redirect: null,
  }



  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
        <div className="container">

          <div className="wbdv-search-bar-button">
            <input type="text"
                   className="form-control"
                   placeholder="Search For a Movie"
                   value={this.state.search}
                   onChange={event => this.setState({search: event.target.value})}
                   onKeyPress={(event =>  {
                       if(event.key === "Enter") {
                         this.setState({redirect: `/search/${this.state.search}`})
                       }})}/>

            <div>
              <Link to={`/search/${this.state.search}`}>
                <button className="wbdv-search-btn btn btn-dark"
                        type="button"
                        id="button-addon2"
                    // onClick={this.searchMovie}
                >
                  Search
                </button>
              </Link>
            </div>
          </div>

        {/*<SearchResultComponent movies={this.state.movies}/>*/}

        </div>
    )
  }
}