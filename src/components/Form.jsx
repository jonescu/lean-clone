import React from 'react'

function Form() {
  return (
    <div className="section-five">
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/03/contactus.jpg" alt="" />
        <div className='form-container'>
          <h1>Let's Work Together</h1>
          <p>Experience and innovation in a single touch.</p>
          <form action="#">
            <input type="text" id='name' placeholder='Name' required/>
            <input type="tel" name="" id="phone" placeholder='Phone Number' required/>
            <input type="email" id='email' placeholder='Email Address' required/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button id='sendmessage'>Send a message</button>
          </form>
        </div>
      </div>
  )
}

export default Form
