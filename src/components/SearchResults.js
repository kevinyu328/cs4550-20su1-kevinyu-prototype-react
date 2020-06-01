import React from "react";
import SearchResultsRow from "./SearchResultsRow";


export default class SearchResults extends React.Component {
  render() {
    return (
        <div>
          <h2>Results</h2>
          <table className='table'>
            {/*<thead>*/}
            {/*  <tr>*/}
            {/*    <th>Poster</th>*/}
            {/*    <th>Title</th>*/}
            {/*    <th>Year</th>*/}
            {/*  </tr>*/}
            {/*</thead>*/}
            <tbody>
            {
              this.props.movies.map(movie =>
                  <SearchResultsRow key={movie.imdbID}
                                    movie={movie}/>
              )
            }
            </tbody>
          </table>
        </div>


    )
  }
}