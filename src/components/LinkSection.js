import React from 'react'
import Link from './Link'
import "./linksection.css"
import Tech from './Tech'


const LinkSection = () => {

  return (
    <div id='LinkSectionContainer'>
      <Link href='https://twitter.com/pelcool' name="twitter" socials="Twitter Link" subtext="Reach out to me on twitter" />
      <Link href='https://training.zuri.team/' name="btn__zuri" socials="Zuri Team" subtext="Find out about Zuri training here"/>
      <Link href='http://books.zuri.team' name="books" socials="Zuri Books" subtext="Check out helpful books"/>
      <Link href='http://books.zuri.team/python-for-begineers?ref_id=ComfortOluwapelumi' name="book_python"  socials="Python Books" subtext="You can learn python with these books" />
      <Link href='https://background.zuri.team' name="pitch" socials="Background Check for Coders" subtext="Find out about programmers"/>
      <Link href='https://books.zuri.team/design-rules' name="book_design" socials="Design Books" subtext="Learn UI designs"/>
      <Link href='/contact' name="contact" socials="Contact Me" subtext="Want to Connect ?"/>
      <Tech />
    </div>
  )
}

export default LinkSection