import React from 'react'
import "./link.css"

const Link = ({href, socials, name}) => {
  return (
    <a href={href} className="link" id={name} target="_blank" rel='noopener noreferrer'>{socials}</a>
  )
}

export default Link