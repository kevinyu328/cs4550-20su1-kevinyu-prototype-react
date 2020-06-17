import React from "react";
import "./HomeComponent.style.client.css"
import {Link} from "react-router-dom";
import SearchContainer from "../../containers/SearchContainer";
import {getNewNetflixReleaseInUs, searchByFilters} from "../../services/HomeServices";
import FilterSearchComponent from "../../services/FilterSearchComponent";

class HomeComponent extends React.Component {
  state = {
    newNetflixReleaseInUS: [],
    netflixChecked: false,
    huluChecked: false,
    primeChecked: false,
    action: false,
    comedy: false,
    drama: false,
    horror: false,
    mystery: false,
    thriller: false,
    romance: false,
    providers: [],
    genres: [],
    filterSearchResults: [],
  }

  // componentDidMount() {
  //   getNewNetflixReleaseInUs().then(movies => this.setState({newNetflixReleaseInUS: movies.ITEMS}))
  // }




  populateSearch = () => {
    if(this.state.netflixChecked) {
      this.setState(prevState => ({
        providers: [...prevState.providers, "Netflix"]
      }))
    }
    if(this.state.huluChecked) {
      this.setState(prevState => ({
        providers: [...prevState.providers, "Hulu"]
      }))
    }
    if(this.state.primeChecked) {
      this.setState(prevState => ({
        providers: [...prevState.providers, "AmazonPrimeVideo"]
      }))
    }
    if(this.state.action) {
      this.setState(prevState => ({
        genres: [...prevState.genres, "Action"]
      }))
    }
    if(this.state.comedy) {
      this.setState(prevState => ({
        genres: [...prevState.genres, "Comedy"]
      }))
    }
    if(this.state.drama) {
      this.setState(prevState => ({
        genres: [...prevState.genres, "Drama"]
      }))
    }
    if(this.state.horror) {
      this.setState(prevState => ({
        genres: [...prevState.genres, "Horror"]
      }))
    }
    if(this.state.mystery) {
      this.setState(prevState => ({
        genres: [...prevState.genres, "Mystery"]
      }))
    }
    if(this.state.thriller) {
      this.setState(prevState => ({
        genres: [...prevState.genres, "Thriller"]
      }))
    }
    if(this.state.romance) {
      this.setState(prevState => ({
        genres: [...prevState.genres, "Romance"]
      }))
    }
    // console.log(this.state.providers)
    // console.log(this.state.genres)
  }


  search = (providers, genres) =>
      searchByFilters(providers, genres)
        .then(response => this.setState({filterSearchResults: response.Hits}))




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




            <div className='wbdv-home-filter-search'>
              <h2>Or search through these filters:</h2>

              <div className='wbdv-provider-checkbox'>
                <label htmlFor='netflix'>
                  Netflix
                  <input type='checkbox'
                         name='provider'
                         id='netflix'
                         value='Netflix'
                         onChange={event => {
                           this.setState({netflixChecked: !this.state.netflixChecked})
                           // this.setState(prevState => ({
                           //   providers: [...prevState.providers, e.target.value]
                           // }))
                         }}/>
                </label>
                <label htmlFor='hulu'>
                  Hulu
                  <input type='checkbox'
                         name='provider'
                         id='hulu'
                         value='Hulu'
                         onChange={event => {
                           this.setState({huluChecked: !this.state.huluChecked})}}/>
                </label>
                <label htmlFor='prime'>
                  Amazon Prime Video
                  <input type='checkbox'
                         name='provider'
                         id='prime'
                         value='AmazonPrimeVideo'
                         onChange={event => {
                           this.setState({primeChecked: !this.state.primeChecked})}}/>
                </label>
              </div>



              <div className='wbdv-genre-checkbox'>
                <label htmlFor='action'>
                  Action
                  <input type='checkbox'
                         name='genre'
                         id='action'
                         value='Action'
                         onChange={event => {
                           this.setState({action: !this.state.action})}}/>
                </label>
                <label htmlFor='comedy'>
                  Comedy
                  <input type='checkbox'
                         name='genre'
                         id='comedy'
                         value='Comedy'
                         onChange={event => {
                           this.setState({comedy: !this.state.comedy})}}/>
                </label>
                <label htmlFor='drama'>
                  Drama
                  <input type='checkbox'
                         name='genre'
                         id='drama'
                         value='Drama'
                         onChange={event => {
                           this.setState({drama: !this.state.drama})}}/>
                </label>
                <label htmlFor='horror'>
                  Horror
                  <input type='checkbox'
                         name='genre'
                         id='horror'
                         value='Horror'
                         onChange={event => {
                           this.setState({horror: !this.state.horror})}}/>
                </label>
                <label htmlFor='mystery'>
                  Mystery
                  <input type='checkbox'
                         name='genre'
                         id='mystery'
                         value='Mystery'
                         onChange={event => {
                           this.setState({mystery: !this.state.mystery})}}/>
                </label>
                <label htmlFor='thriller'>
                  Thriller
                  <input type='checkbox'
                         name='genre'
                         id='thriller'
                         value='Thriller'
                         onChange={event => {
                           this.setState({thriller: !this.state.thriller})}}/>
                </label>
                <label htmlFor='romance'>
                  Romance
                  <input type='checkbox'
                         name='genre'
                         id='romance'
                         value='Romance'
                         onChange={event => {
                           this.setState({romance: !this.state.romance})}}/>
                </label>
              </div>





              {/*<Link to={`/search/filter`}>*/}
                <button className='btn btn-primary'
                        onClick={() => {
                          this.populateSearch()
                          this.search(this.state.providers, this.state.genres)
                          // console.log(this.state.filterSearchResults)
                        }}>
                  Submit
                </button>
              {/*</Link>*/}

              <FilterSearchComponent movies={this.state.filterSearchResults}/>







            </div>

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