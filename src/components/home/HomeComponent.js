import React from "react";
import "./HomeComponent.style.client.css"
import {Link} from "react-router-dom";
import SearchContainer from "../../containers/SearchContainer";
import {getNewNetflixReleaseInUs} from "../../services/HomeServices";

class HomeComponent extends React.Component {
  state = {
    newNetflixReleaseInUS: [],
  }

  // componentDidMount() {
  //   getNewNetflixReleaseInUs().then(movies => this.setState({newNetflixReleaseInUS: movies.ITEMS}))
  // }

  render() {
    return (
        <div className='container'>

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

          </div>

          {/*<div className='wbdv-home-popular-movies'>*/}
          {/*  <h3>*/}
          {/*    Popular movies & TV shows on Netflix:*/}
          {/*  </h3>*/}

          {/*  <div className="row">*/}
          {/*  /!*{console.log(this.state.newNetflixReleaseInUS)}*!/*/}
          {/*    {*/}
          {/*      this.state.newNetflixReleaseInUS.map(movie =>*/}
          {/*          <div className='mb-4 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>*/}
          {/*            <Link to={`/details/${movie.imdbid}`}>*/}
          {/*              <img className="card-img-top"*/}
          {/*                   src={movie.image}/>*/}

          {/*              <div className="card-body">*/}
          {/*                {movie.title}*/}

          {/*              </div>*/}
          {/*            </Link>*/}

          {/*          </div>*/}

          {/*      )*/}
          {/*    }*/}
          {/*  </div>*/}
          {/*</div>*/}


        </div>
    )
  }

}


export default HomeComponent