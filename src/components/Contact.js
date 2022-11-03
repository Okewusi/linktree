import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='formContainer'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
            <div className='names'>
                <label htmlFor="first_name"> First Name</label>
                <input type="text" name="first_name" id='first_name' placeholder='Enter your first name'/>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" id='last_name' placeholder='Enter your last name'/>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email' placeholder='yourname@email.com'/>
            <label htmlFor="message">Message</label>
            <input type="email" name="message" id='message' placeholder="Send me a message and I'll reply as soon as possible"/>
            <label>
            <input type="checkbox" id="agreement" name='agreement'/>
            You agree to providing your data to Comfort Oluwapelumi who may contact you
            </label>
            <button id='btn__submit'>Send message</button>
        </form>
    </div>
  )
}

export default Contact