import React from "react";
import SearchResultRowComponent from "./SearchResultRowComponent";
import SearchServices from "../../services/SearchServices";
import {Link} from "react-router-dom";
import "./Search.style.client.css"
import {checkLogin} from "../../services/UserServices";


export default class SearchResultComponent extends React.Component {
  state = {
    movies: [],
    query: '',
    user: null,
  }


  componentDidMount() {
    SearchServices.searchByTitle(this.props.match.params.criteria)
      .then(results => this.setState({movies: results.Search}))

    checkLogin()
    .catch(e => '')
    .then(user => {
      if(user)
        this.setState({
          user: user
        })
    })
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.match.params.criteria !== this.props.match.params.criteria) {
      this.componentDidMount()
    }
  }

  logout = () => {
    fetch("http://localhost:8080/api/logout", {
      method: 'POST',
      credentials: "include"
    })
    .then(response => this.props.history.push("/"))

  }

  render() {
    return (
        <div className='wbdv-search-results container'>
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