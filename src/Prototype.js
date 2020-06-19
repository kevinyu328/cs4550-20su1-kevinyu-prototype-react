import React from "react";
import SearchContainer from "./containers/SearchContainer";
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import HomeContainer from "./containers/HomeContainer"
import LoginComponent from "./components/login/LoginComponent";
import RegisterComponent from "./components/register/RegisterComponent";
import SearchResultComponent from "./components/search/SearchResultComponent";
import FilterSearchComponent from "./components/search/FilterSearchComponent";
import ProfileComponent from "./components/profile/ProfileComponent";
import DiscussionForumContainer
  from "./containers/DiscussionForumContainer";
import EditProfileComponent from "./components/profile/EditProfileComponent";
import AnonProfileComponent from "./components/profile/AnonProfileComponent";
import DiscussionForumComponent
  from "./components/forum/DiscussionForumComponent";


export default class Prototype extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>

            <Route exact
                   path="/"
                   component={HomeContainer}/>

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
                   path="/filterSearch"
                   component={FilterSearchComponent}/>


            <Route exact
                   path="/search/:criteria"
                   component={SearchResultComponent}/>


             <Route exact
                    path="/details/:imdbID"
                    component={MovieDetails}/>


            <Route exact
                   path="/profile"
                   component={ProfileComponent}/>

            <Route exact
                   path="/profile/:username"
                   component={AnonProfileComponent}/>

            <Route exact
                   path="/profileEdit"
                   component={EditProfileComponent}/>


            <Route exact
                   path="/forums"
                   component={DiscussionForumContainer}/>


            <Route exact
                   path="/forums/:forumId"
                   component={DiscussionForumComponent}/>



          </div>

        </BrowserRouter>


        // <div className="container">
        //   <h1>Prototype</h1>
        //   <Search/>
        // </div>

    )
  }
}
