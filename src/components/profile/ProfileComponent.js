import React from "react";
import "./Profile.style.client.css"

export default class ProfileComponent extends React.Component {
  render() {
    return (
        <div className='container'>
          <h2>Profile</h2>

          <div className='row'>

            <div className='col-4 wbdv-profile-picture-info'>
              <img className='wbdv-profile-pic'
                   src='https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg'/>

              <div className='wbdv-profile-personal-info'>
                Personal Info
                <ul>
                  <li>Username</li>
                  <li>Email</li>
                  <li>Phone</li>
                  <li>Date of Birth</li>
                </ul>

                <button>Edit Info</button>
              </div>

            </div>


            <div className='col-8 wbdv-profile-main-content'>

              <div className='wbdv-profile-favorite-movies'>
                Favorite Movies
              </div>

              <div className='wbdv-profile-following'>
                Following
              </div>

              <div className='wbdv-profile-recent-comments'>
                Recent Comments
              </div>

            </div>

          </div>

        </div>
    )
  }
}