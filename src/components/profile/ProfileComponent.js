import React from "react";
import "./Profile.style.client.css"
import {Link} from "react-router-dom";
import {checkLogin} from "../../services/UserServices";
import {findFavoriteMoviesForUser} from "../../services/MovieServices";
import SearchServices from "../../services/SearchServices";

export default class ProfileComponent extends React.Component {
  state = {
    query: '',
    user: {
      username: '',
      password: '',
      email: '',
      phone: '',
      favorites: [],
      // sections: []
    },
    details: '',
  }

  componentDidMount() {
    checkLogin()
    .catch(e => {this.props.history.push("/")})
    .then(user => {
      if(user)
        this.setState({
          user: user
        })
    })


    findFavoriteMoviesForUser(this.state.user.username)
      .then(response => this.setState({
        user: {
          ...this.state.user,
          favorites: response
        }
      }))




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
        <div className='container wbdv-profile-container'>

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
                <li className='nav-item'>
                  <button onClick={this.logout}
                          className='btn btn-danger'>
                    Log out
                  </button>
                </li>

              </ul>
            </div>
          </nav>


            <h2>Profile</h2>

            <div className='row'>

              <div className='col-4 wbdv-profile-picture-info'>
                <img className='wbdv-profile-pic'
                     src='https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg'/>

                <div className='wbdv-profile-personal-info'>
                  Personal Info
                  <ul>
                    <li>Username: {this.state.user.username}</li>
                    <li>Password: {this.state.user.password}</li>
                    <li>Email: {this.state.user.email}</li>
                    <li>Phone: {this.state.user.phone}</li>
                    {/*<li>Date of Birth</li>*/}
                  </ul>

                  <Link to={'/profileEdit'}>
                    <button>Edit Info</button>
                  </Link>

                </div>

              </div>


              <div className='col-8 wbdv-profile-main-content'>

                <div className='wbdv-profile-favorite-movies'>
                  <span>
                    Favorite Movies
                  </span>

                  {/*<ul>*/}
                  {/*  {*/}
                  {/*    this.state.user.favorites.map(movie =>*/}
                  {/*    <li>*/}
                  {/*      {*/}
                  {/*        SearchServices.searchByImdbID(movie.id)*/}
                  {/*          .then(details => this.setState({*/}
                  {/*            details: details*/}
                  {/*          }))*/}
                  {/*      }*/}
                  {/*      {this.state.details.Title}*/}
                  {/*    </li>*/}

                  {/*    )*/}
                  {/*  }*/}
                  {/*</ul>*/}

                </div>

                <div className='wbdv-profile-following'>
                  Following
                </div>

                <div className='wbdv-profile-recent-comments'>
                  Recent Comments
                </div>

              </div>

            </div>


        </div>
    )
  }
}