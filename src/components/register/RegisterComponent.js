import React from "react";
import {Link} from "react-router-dom";

export default class RegisterComponent extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone: '',
    error: null
  }


  register = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      fetch("http://localhost:8080/api/register", {
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          phone: this.state.phone,
        }),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        credentials: "include"
      }).then(response => response.json())
      .catch(e => {
        this.setState({
          error: 'Unable to register. User with specified username already exists.'
        })
      })
      .then(currentUser => {
        if (currentUser) {
          this.props.history.push("/")
        }
      })
    } else {
      this.setState({
        error: 'Username or password cannot be blank.'
      })
    }
  }



  render() {
    return(
        <div className='container wbdv-register-container'>
          <h2>Register</h2>

          {
            this.state.error &&
            <div className="alert alert-danger">
              {this.state.error}
            </div>
          }

          {/*Username label and input field -->*/}
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

          {/*Password label and input field -->*/}
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

          <div className="form-group row">
            <label htmlFor="email"
                   className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input id="email"
                     type="email"
                     placeholder="Email"
                     title="Type your email here"
                     className="wbdv-field wbdv-email form-control"
                     onChange={(e) => this.setState({email: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="phone"
                   className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input id="phone"
                     type="phone"
                     placeholder="Phone number"
                     title="Type your phone number here"
                     className="wbdv-field wbdv-phone form-control"
                     onChange={(e) => this.setState({phone: e.target.value})}
              />
            </div>
          </div>


          <div className='wbdv-register-cancel-login'>
            <button
                onClick={this.register}
                className="btn btn-primary btn-block">
              Register
            </button>

            <span className='float-right'>
              Already have an account?
              <Link to="/login">
                Log in
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