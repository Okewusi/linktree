import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='formContainer'>
        <h2 className='heading'>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
            <div className='names'>
                <div className='fn'> 
                    <label htmlFor="first_name"> First Name</label>
                    <input type="text" name="first_name" id='first_name' placeholder='Enter your first name'/> 
                </div>
                <div className='ln'>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" id='last_name' placeholder='Enter your last name'/>
                </div>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email' placeholder='yourname@email.com'/>
            <label htmlFor="message">Message</label>
            <input type="email" name="message" id='message' placeholder="Send me a message and I'll reply as soon as possible"/>
            <div className='option'>
                <input type="checkbox" id="agreement" name='agreement'/>
                <label id='tick'>You agree to providing your data to Comfort Oluwapelumi who may contact you</label>
            </div>
            
            <button id='btn__submit'>Send message</button>
        </form>
    </div>
  )
}

export default Contact