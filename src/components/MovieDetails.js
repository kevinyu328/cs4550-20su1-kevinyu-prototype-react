import React from "react";
import SearchServices from "../services/SearchServices"
import "./MovieDetails.style.client.css"


export default class MovieDetails extends React.Component {
  state = {
    details: '',
  }

  componentDidMount() {
    // SearchServices.searchByImdbID(this.props.match.params.imdbID)
    //   .then(details => this.setState({
    //     details: details
    // }))

    this.getMovieDetails(this.props.match.params.imdbID)
  }

  getMovieDetails = (id) =>
      SearchServices.searchByImdbID(id)
        .then(details => this.setState({
          details: details
        }))



  render() {
    return (
        <div className='container'>
          <h3>Movie Details</h3>

          <div className='row justify-content-center'>
            <h4 className='mb-4'>{this.state.details.Title + " (" + this.state.details.Year + ")"}</h4>
          </div>


          <div className='row'>
            <div className='col-4'>
              <img className="wbdv-movie-poster"
                   src={this.state.details.Poster}/>
            </div>

            <div className='col-8 details-container'>

              <div className='wbdv-genre-runtime'>
                <span>Genre: {this.state.details.Genre}</span>
                <span>Runtime: {this.state.details.Runtime}</span>
                <span>Director: {this.state.details.Director}</span>
                <span>Actors: {this.state.details.Actors}</span>

              </div>

              <div className="wbdv-movie-ratings mt-3">
                <ul className="list-group">
                  {this.state.details !== '' ? (this.state.details.Ratings.map((item, index) => (
                      <li key={item.Source}
                          className='list-group-item'>{item.Source}: {item.Value}</li>
                  ))) : ''}
                </ul>
              </div>

              <div className='wbdv-movie-plot mt-4'>
                <p>
                  {this.state.details.Plot}
                </p>
              </div>

              <button className='btn btn-danger wbdv-details-add-to-fav-btn'>
                Add to favorites
              </button>

            </div>


          </div>

        </div>
    )
  }
}