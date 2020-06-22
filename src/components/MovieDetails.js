import React from "react";
import SearchServices from "../services/SearchServices"
import "./MovieDetails.style.client.css"
import {checkLogin} from "../services/UserServices";
import {Link, Redirect} from "react-router-dom";
import {addMovieToFavorites} from "../services/MovieServices";


export default class MovieDetails extends React.Component {
  state = {
    details: '',
    user: null,
    query: '',
    success: null,
  }

  componentDidMount() {
    checkLogin()
    .catch(e => '')
    .then(user => {
      if(user)
        this.setState({
          user: user
        })
    })

    this.getMovieDetails(this.props.match.params.imdbID)
  }

  getMovieDetails = (id) =>
      SearchServices.searchByImdbID(id)
        .then(details => this.setState({
          details: details
        }))


  logout = () => {
    fetch("https://cs4550-20su1-proto-server.herokuapp.com/api/logout", {
      method: 'POST',
      credentials: "include"
    })
    .then(response => this.props.history.push("/"))

  }


  addToFavorites = (movieId) => {
    if(!this.state.user) {
      alert('Please log in to add a movie to your favorites list')
      this.props.history.push("/login")
    } else {
      addMovieToFavorites(this.state.user.username, {imdbId: this.state.details.imdbID})
      this.setState({
        success: `${this.state.details.Title} successfully added to favorites list`
      })
    }
  }




  render() {
    return (
        <div className='container wbdv-movie-details-container'>

          {
            this.state.user &&
            <nav className="navbar fixed-top navbar-light bg-light">

              <Link to={"/"} className="navbar-brand">
                What Movie Should I Watch Next?
              </Link>


              <div className='wbdv-search-field-and-btn'>
                <input  className="wbdv-nav-search-field form-control mr-sm-2"
                        type="search"
                        placeholder="Search For a Movie Title"
                        aria-label="Search"
                        title="Search for a movie here"
                        value={this.state.query}
                        onChange={(event) => this.setState({
                          query: event.target.value
                        })}/>
                <Link to={`/search/${this.state.query}`}>
                  <button className="btn btn-danger my-2 my-sm-0"
                          type="submit">
                    Search
                    {/*<i className="fa fa-plus"/>*/}
                  </button>
                </Link>

              </div>

              <div>
                <ul className='navbar-nav wbdv-nav-login-signup'>
                  <li className='wbdv-nav-signup nav-item'>
                    <Link to={'/profile'}>
                      <button className='btn btn-outline-success'>
                        My profile
                      </button>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <button onClick={this.logout}
                            className='btn btn-danger'>
                      Log out
                    </button>
                  </li>

                </ul>
              </div>
            </nav>
          }

          {
            !this.state.user &&
            <nav className="navbar fixed-top navbar-light bg-light">

              <Link to={"/"} className="navbar-brand">
                What Movie Should I Watch Next?
              </Link>

              <div className='wbdv-search-field-and-btn'>
                <input  className="wbdv-nav-search-field form-control mr-sm-2"
                        type="search"
                        placeholder="Search For a Movie Title"
                        aria-label="Search"
                        title="Search for a movie here"
                        value={this.state.query}
                        onChange={(event) => this.setState({
                          query: event.target.value
                        })}/>
                <Link to={`/search/${this.state.query}`}>
                  <button className="btn btn-danger my-2 my-sm-0"
                          type="submit">
                    Search
                    {/*<i className="fa fa-plus"/>*/}
                  </button>
                </Link>

              </div>

              <div>
                <ul className='navbar-nav wbdv-nav-login-signup'>
                  <li className='wbdv-nav-signup nav-item'>
                    <Link to={'/register'}>
                      <button className='btn btn-outline-success'>
                        Sign up
                      </button>
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to={'/login'}>
                      <button className='btn btn-warning'>
                        Log in
                      </button>
                    </Link>
                  </li>

                </ul>
              </div>
            </nav>
          }

          <h3>Movie Details</h3>

          {
            this.state.success &&
            <div className="alert alert-success">
              {this.state.success}
            </div>
          }

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

              <button onClick={() => this.addToFavorites(this.props.match.params.imdbID)}
                      className='btn btn-danger wbdv-details-add-to-fav-btn'>
                Add to favorites
              </button>

            </div>


          </div>

        </div>
    )
  }
}