import React from 'react'
import zuri from "../assets/zuri.jpg"
import ingressive from "../assets/I4G.jpg"
import text from "../assets/footertext.jpg"
import "./footer.css"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <img src={zuri} alt="zuri logo"/>
        <img src={text} alt="internship"/>
        <img src={ingressive} alt="Ingressive for good logo"/>
    </div>
  )
}

export default Footer