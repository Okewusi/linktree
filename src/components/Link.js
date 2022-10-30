import React from 'react'
import "./link.css"

const Link = ({href, socials, name,subtext}) => {
  return (
      <a 
        href={href}  id={name} target="_blank" className="link" rel='noopener noreferrer'>
        {socials}
        <sub>{subtext}</sub>
      </a>
  )
}

export default Link