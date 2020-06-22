import React from "react";
import "../components/home/HomeComponent.style.client.css"
import {Link} from "react-router-dom";
import SearchContainer from "./SearchContainer";
import {getNewNetflixReleaseInUs, searchByFilters} from "../services/HomeServices";
import FilterSearchComponent from "../components/search/FilterSearchComponent";
import {checkLogin} from "../services/UserServices";

class HomeContainer extends React.Component {
  state = {
    newNetflixReleaseInUS: [],
    user: null,
  }



  componentDidMount() {
    getNewNetflixReleaseInUs().then(movies => this.setState({newNetflixReleaseInUS: movies.ITEMS}))

    checkLogin()
    .catch(e => {this.props.history.push("/")})
    .then(user => {
      if(user)
        this.setState({
          user: user
        })
    })

  }





  logout = () => {
    fetch("http://localhost:8080/api/logout", {
      method: 'POST',
      credentials: "include"
    })
    .then(response => {
      this.setState({
        user: null
      })
      this.props.history.push("/")
    })
  }





  render() {
    return (
        <div className='container'>

          {
            this.state.user &&
            <nav className="navbar fixed-top navbar-light bg-light">

              <Link to={"/"} className="navbar-brand">
                What Movie Should I Watch Next?
              </Link>

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






          <div className='wbdv-home-content'>
            <h1>
              What Movie Should I Watch Next?
            </h1>

            <div className='wbdv-home-website-description'>
              <p>
                Having trouble choosing a movie to watch next?
                Use this website to quickly discover a movie to watch based on the streaming services available to you.
              </p>
            </div>


            <SearchContainer/>


            <div className='wbdv-forum-filter-btns'>
              <Link to={`/forums`}>
                <button className='wbdv-home-forum-btn btn btn-outline-secondary'>
                  Discussion Forums
                </button>
              </Link>



              <Link to={`/filterSearch`}>
                <button className='wbdv-home-filter-btn btn btn-outline-secondary'>
                  Search Through Filters
                </button>
              </Link>

            </div>




          </div>

          <div className='wbdv-home-popular-movies'>
            <h3>
              Popular movies & TV shows on Netflix:
            </h3>

            <div className="row wbdv-home-movie-grid">
              {/*{console.log(this.state.newNetflixReleaseInUS)}*/}
              {
                this.state.newNetflixReleaseInUS.map(movie =>
                    <div className='mb-4 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
                      <Link to={`/details/${movie.imdbid}`}>
                        <img className="card-img-top"
                             src={movie.image}/>

                        <div className="card-body">
                          {movie.title}

                        </div>
                      </Link>

                    </div>

                )
              }
            </div>
          </div>




        </div>
    )
  }

}


export default HomeContainer