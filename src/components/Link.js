import React from 'react'
import "./link.css"

const Link = ({href, socials, name}) => {
  return (
    <div id='linkContainer'>
        <a href={href} className="link" id={name} target="_blank" rel='noopener noreferrer'>{socials}</a>
    </div>
  )
}

export default Link