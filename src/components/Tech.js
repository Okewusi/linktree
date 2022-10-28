import React from 'react'
import github from "../assets/github.jpg"
import slack from "../assets/slack.jpg"
import "./tech.css"

const Tech = () => {
  return (
    <div id='techContainer'>
        <a href='https://app.slack.com/client/T042F7V19Q8/D048G3CPG2W/rimeto_profile/U0488054LMC' target="_blank" rel='noopener noreferrer'>
          <img src={slack} alt="github" className='links'/>
        </a>
        <a href='https://github.com/Okewusi' target="_blank" rel='noopener noreferrer'>
          <img src={github} alt="slack" className='links'/>
        </a>
    </div>
  )
}

export default Tech