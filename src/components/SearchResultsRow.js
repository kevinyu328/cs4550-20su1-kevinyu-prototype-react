import React from "react";
import {Link} from "react-router-dom";
import "./MovieDetails.style.client.css"

export default class SearchResultsRow extends React.Component {
  render() {
    return (
        <tr>
          <td>
            <Link to={`/movieDetails/${this.props.movie.imdbID}`}>
              <img src={this.props.movie.Poster}
                   className='wbdv-movie-poster-search'/>
            </Link>
          </td>
          <td>
            <Link to={`/movieDetails/${this.props.movie.imdbID}`}>
              {this.props.movie.Title}
            </Link>
          </td>
          {/*<td>*/}
          {/*  <Link to={`/movieDetails/${this.props.movie.imdbID}`}>*/}
          {/*    {this.props.movie.Year}*/}
          {/*  </Link>*/}
          {/*</td>*/}
        </tr>
    )
  }
}
