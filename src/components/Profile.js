import React from 'react'
import profilePicture from "../assets/profile.JPG"
import share from "../assets/share.jpg"
import mobile from "../assets/mobile.jpg"
import "./Profile.css"

const Profile = () => {
  return (
    <div id='profile'>
        <div id='profileContainer'>
          <img src={profilePicture} id='profile_img' alt='profile'/>
          <a href='_'>
            <img src={mobile} id='mobile_share' alt='profile'/>
          </a>
          <a href='_'>
            <img src={share} id='share_link' alt='share button'/>
          </a>
        </div>
        <p id='twitter'>Pelcool</p>
        <p id='slack'>Comfort Oluwapelumi</p>
    </div>
  )
}

export default Profile