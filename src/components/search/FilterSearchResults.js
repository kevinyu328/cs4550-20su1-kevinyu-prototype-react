import React from "react";
import {Link} from "react-router-dom";
import SearchServices from "../../services/SearchServices";

export default class FilterSearchResults extends React.Component {
  state = {
    movieFromOmdb: '',
  }

  componentDidMount() {
    SearchServices.getImdbIdByTitleYear(this.props.movie.Source.Title, this.props.movie.Source.Year)
    .then(response => this.setState({movieFromOmdb: response}))
  }


  render() {
    return (
        <div className='mb-4 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
          <Link key={this.props.movie.Source.Id}
                to={`/details/${this.state.movieFromOmdb.imdbID}`}>
            <img className="card-img-top"
                 src={this.state.movieFromOmdb.Poster}/>

            <div className="card-body">
              {this.props.movie.Source.Title}
              ({this.props.movie.Source.Year})
            </div>
          </Link>
        </div>
    )
  }
}