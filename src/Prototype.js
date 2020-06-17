import React from "react";
import SearchContainer from "./containers/SearchContainer";
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import HomeComponent from "./components/home/HomeComponent"
import LoginComponent from "./components/login/LoginComponent";
import RegisterComponent from "./components/register/RegisterComponent";
import SearchResultComponent from "./components/search/SearchResultComponent";
import FilterSearchComponent from "./services/FilterSearchComponent";


export default class Prototype extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>

            <Route exact
                   path="/"
                   component={HomeComponent}/>

            <Route exact
                   path="/login"
                   component={LoginComponent}/>

            <Route exact
                   path="/register"
                   component={RegisterComponent}/>

            {/*<Route exact*/}
            {/*       path="/search"*/}
            {/*       component={SearchContainer}/>*/}

            <Route exact
                   path="/search/filter"
                   component={FilterSearchComponent}/>


            <Route exact
                   path="/search/:criteria"
                   component={SearchResultComponent}/>


             <Route path="/details/:imdbID"
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
