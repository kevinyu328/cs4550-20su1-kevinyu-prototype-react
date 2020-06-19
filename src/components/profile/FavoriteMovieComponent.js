import React from "react";
import {Link} from "react-router-dom";
import SearchServices from "../../services/SearchServices";

export default class FavoriteMovieComponent extends React.Component {
  state = {
    movieFromOmdb: '',
  }

  componentDidMount() {
    SearchServices.searchByImdbID(this.props.movie.imdbId)
      .then(response => this.setState({movieFromOmdb: response}))
  }


  render() {
    return (
        <div className='mb-4 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
          <Link key={this.props.movie.imdbId}
                to={`/details/${this.state.movieFromOmdb.imdbID}`}>
            <div className="wbdv-favorite-movie-title-year">

              <img className="card-img-top"
                   src={this.state.movieFromOmdb.Poster}/>
                <span>
                  {this.state.movieFromOmdb.Title}
                </span>
                <span>
                  ({this.state.movieFromOmdb.Year})
                </span>
            </div>
          </Link>
        </div>
    )
  }



}