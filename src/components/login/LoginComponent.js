import React from "react";
import {Link} from "react-router-dom";
import "./Login.style.client.css"

export default class LoginComponent extends React.Component {
  state = {
    username: '',
    password: '',
    error: null,
  }


  login = () => {
    fetch("https://cs4550-20su1-proto-server.herokuapp.com/api/login", {
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password}),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      credentials: "include"
    }).then(response => response.json())
    .catch(e => {
      this.setState({
        error: `Not a recognized user. Please re-enter the correct credentials or register if you are a new user.`
      })
    })
    .then(currentUser => {
      if(currentUser)
        this.props.history.push("/")
    })
  }


  render() {
    return(
        <div className='container login-container'>
          <h2>Login</h2>
          {
            this.state.error &&
            <div className="alert alert-danger">
              {this.state.error}
            </div>
          }


          {/*Username label and input field*/}
          <div className="form-group row">

            <label htmlFor="username"
                   className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input id="username"
                     type="text"
                     placeholder="Username"
                     title="Type your username here"
                     className="wbdv-field wbdv-username form-control"
                     onChange={(e) => this.setState({username: e.target.value})}
              />
            </div>
          </div>


          {/*Password label and input field */}
          <div className="form-group row">
            <label htmlFor="password"
                   className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input id="password"
                     type="password"
                     placeholder="Password"
                     title="Type your password here"
                     className="wbdv-field wbdv-password form-control"
                     onChange={(e) => this.setState({password: e.target.value})}
              />
            </div>
          </div>

          <div className='wbdv-login-cancel-signup'>
            <button
                onClick={this.login}
                className="btn btn-primary btn-block">
              Log in
            </button>

            <span className='float-right'>
              Don't have an account?
              <Link to="/register">
                Sign up
              </Link>
            </span>



              <Link to={'/'}>
                Cancel
              </Link>
            </div>




        </div>
    )
  }
}