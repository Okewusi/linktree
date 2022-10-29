import React from 'react'
import Link from './Link'
import "./linksection.css"
import Tech from './Tech'

const LinkSection = () => {

  return (
    <div id='LinkSectionContainer'>
      <Link href='https://twitter.com/pelcool' name="twitter" socials="Twitter Link" />
      <Link href='https://training.zuri.team/' name="btn__zuri" socials="Zuri Team" />
      <Link href='http://books.zuri.team' name="books" socials="Zuri Books" />
      <Link href='http://books.zuri.team/python-for-begineers?ref_id=ComfortOluwapelumi' name="book_python" socials="Python Books" />
      <Link href='https://background.zuri.team' name="pitch" socials="Background Check for Coders" />
      <Link href='https://books.zuri.team/design-rules' name="book_design" socials="Design Books" />
      <Tech />
    </div>
  )
}

export default LinkSection