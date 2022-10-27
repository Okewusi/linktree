import React from 'react'
import profilePicture from "../assets/profile.JPG"
import "./Profile.css"

const Profile = () => {
  return (
    <div id='profile'>
        <div id='profileContainer'>
            <img src={profilePicture} id='profile_img' alt='profile'/>
        </div>
        <p id='twitter'>Pelcool</p>
        <p id='slack'>Comfort Oluwapelumi</p>
    </div>
  )
}

export default Profile