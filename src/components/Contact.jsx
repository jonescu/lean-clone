import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <div className="contact">
        <Banner/>
        <Nav/>
        <h1>Contact</h1>
      </div>
      <div className="work-together">
        <div className="work-together-info">
          <h2>How can we help your business grow?</h2>
          <p>Experience and innovation in a single touch.</p>
          <span>CALL US</span>
          <p>+1 (800) 799 5491</p>
          <span>VISIT US</span>
          <p>Monday - Friday</p>
          <p>9am - 6pm EST</p>
        </div>
        <div className='work-together-form'>
          <form action="#">
            <input type="text" id='name' placeholder='Name' required/>
            <input type="tel" name="" id="phone" placeholder='Phone Number' required/>
            <input type="email" id='email' placeholder='Email Address' required/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button id='sendmessage'>Send a message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact