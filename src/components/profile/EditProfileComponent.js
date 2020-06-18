import React from "react";
import {Link} from "react-router-dom";
import {checkLogin} from "../../services/UserServices";

export default class EditProfileComponent extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      phone: '',
      // sections: []
    },
    updated: false,
    error: null,
    query: '',
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
  }

  update = () => {
    if (this.state.user.username !== '' && this.state.user.password !== '') {

      fetch("http://localhost:8080/api/profile/update", {
        body: JSON.stringify(this.state.user),
        headers: {
          'content-type': 'application/json'
        },
        method: 'PUT',
        credentials: "include"
      })
      .then(response => response.json())
      .then(user => this.setState({
        user: {
          username: user.username,
          password: user.password
        },
        updated: true,
      }))

      // console.log(this.state.user)
      // console.log(this.state.user.username, this.state.user.password)
    } else {
      this.setState({
        error: 'Cannot update username and password with blank fields.'
      })
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
    return(
        <div className='container wbdv-edit-profile-container'>

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

          {
            this.state.error &&
            <div className="alert alert-danger">
              {this.state.error}
            </div>
          }

          <h1>Profile</h1>
          {
            this.state.updated &&
            <div className="alert alert-success">
              Profile updated succesfully.
            </div>
          }

          {/*username text field -->*/}
          <div className="form-group row">
            <label htmlFor="username"
                   className="col-sm-1 col-form-label">Username</label>
            <div className="col-sm-11">
              <input id="username"
                     type="text"
                     title="Enter an updated username here"
                     className="wbdv-field wbdv-username form-control"
                     value={this.state.user.username}
                     onChange={(e) =>
                         this.setState({
                           user: {
                             ...this.state.user,
                             username: e.target.value}})}/>
            </div>
          </div>


          <div className="form-group row">
            <label htmlFor="password"
                   className="col-sm-1 col-form-label">Password</label>
            <div className="col-sm-11">
              <input id="password"
                     title="Enter an updated password here"
                     className="wbdv-field wbdv-password form-control"
                     value={this.state.user.password}
                     onChange={(e) => this.setState({
                       user: {
                         ...this.state.user,
                         password: e.target.value}})}/>
            </div>
          </div>



          <div className="form-group row">
            <label htmlFor="email"
                   className="col-sm-1 col-form-label">Email</label>
            <div className="col-sm-11">
              <input id="email"
                     type='email'
                     title="Enter an updated email here"
                     className="wbdv-field wbdv-password form-control"
                     value={this.state.user.email}
                     onChange={(e) => this.setState({
                       user: {
                         ...this.state.user,
                         email: e.target.value}})}/>
            </div>
          </div>


          <div className="form-group row">
            <label htmlFor="phone"
                   className="col-sm-1 col-form-label">Phone Number</label>
            <div className="col-sm-11">
              <input id="phone"
                     type='phone'
                     title="Enter an updated phone number here"
                     className="wbdv-field wbdv-password form-control"
                     value={this.state.user.phone}
                     onChange={(e) => this.setState({
                       user: {
                         ...this.state.user,
                         phone: e.target.value}})}/>
            </div>
          </div>







          <button
              onClick={this.update}
              className="btn btn-success btn-block">
            Update
          </button>

          <Link to={'/profile'}>
            <button className='btn btn-outline-warning btn-block wdbv-edit-return-btn'>
              Return to profile page
            </button>
          </Link>


          {/*{*/}
          {/*  this.state.user && this.state.user.sections.length > 0 &&*/}
          {/*  <div>*/}
          {/*    <h3>Sections</h3>*/}
          {/*    <ul className="list-group">*/}
          {/*      {this.state.user.sections.map(section =>*/}
          {/*          <li key={section.id}*/}
          {/*              className="list-group-item">*/}
          {/*            {section.title}*/}
          {/*          </li>*/}
          {/*      )}*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*}*/}



        </div>
    )
  }




}
