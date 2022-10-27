import React from 'react'
import github from "../assets/github.jpg"
import "./tech.css"

const Tech = () => {
  return (
    <div id='techContainer'>
        <a href='https://github.com/Okewusi'>
            <img src={github} alt="github" className='links' target="_blank" rel='noopener noreferrer'/>
        </a>
    </div>
  )
}

export default Tech