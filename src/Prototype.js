import React from "react";
import Search from "./components/Search";
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";


export default class Prototype extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact
                   path="/"
                   component={Search}/>


             <Route path="/movieDetails/:imdbID"
                    component={MovieDetails}/>


          </div>

        </BrowserRouter>


        // <div className="container">
        //   <h1>Prototype</h1>
        //   <Search/>
        // </div>

    )
  }
}
