import React from "react";
// import SearchResultRowComponent from "./SearchResultRowComponent";
import {searchByFilters} from "../../services/HomeServices"
import {Link} from "react-router-dom";
// import "./Search.style.client.css"
import SearchServices from "../../services/SearchServices";
import FilterSearchResults from "./FilterSearchResults";


export default class FilterSearchComponent extends React.Component {
  state = {
    movieFromOmdb: '',
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
  //   SearchServices.getImdbIdByTitleYear(this.props.movie.Source.Title, this.props.movie.Source.Year)
  //     .then(response => this.setState({movieFromOmdb: response}))
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
    this.search(this.state.providers, this.state.genres)
  }


  search = (providers, genres) =>
      searchByFilters(providers, genres)
      .then(response => this.setState({filterSearchResults: response.Hits}))

  // constructor(props) {
  //   super(props);
  //
  //
  //   SearchServices.getImdbIdByTitleYear(this.props.movie.Source.Title, this.props.movie.Source.Year)
  //     .then(response =>
  //             // console.log(response.imdbID)
  //         this.state = {
  //       hi: 'hi',
  //       imdbId: response.imdbID
  //   }
  //   )
  //
  //   // this.state= {
  //   //
  //   // }
  //
  // }


  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.movie !== this.props.movie) {
      // console.log('hi')
      // this.setState({movieFromOmdb: this.props.movies})
      this.componentDidMount()
    }
  }

  render() {
    return (
        <div className='wbdv-home-filter-search container'>
          <nav className="navbar fixed-top navbar-light bg-light">

            <div className='wbdv-nav-brand-search-field'>
              <Link to={"/"} className="navbar-brand">
                What Movie Should I Watch Next?
              </Link>


              {/*<form className="form-inline">*/}
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
            </div>

            {/*</form>*/}

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

          <h3>Search Through These Filters:</h3>

          <div className='wbdv-provider-checkbox'>
            <h5>Available Streaming Services: </h5>
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
            <h5>Genres:</h5>
            <div className='row'>

              <div className='col wbdv-genre-checkbox-left'>
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
              </div>




              <div className='col wbdv-genre-checkbox-right'>
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
            </div>
          </div>





          {/*<Link to={`/search/filter`}>*/}
          <button className='btn btn-primary wbdv-submit-filter-btn'
                  onClick={() => {
                    this.populateSearch()
                    // console.log(this.state.filterSearchResults)
                  }}>
            Submit
          </button>

          <div className='row wbdv-filter-result-grid'>
            {
              this.state.filterSearchResults.map(movie =>

                  <FilterSearchResults key={movie.Source.Id}
                                       movie={movie}/>


              )
            }
          </div>










        </div>

    )
  }
}