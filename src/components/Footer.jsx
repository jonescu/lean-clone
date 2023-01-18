import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
      <footer>
        <div className='newsletter'>
          <h1>Subscribe to our Newsletter</h1>
          <div className="subscribe" >
            <input type="email" placeholder='Your Email' required/>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="connect">
          <div className='createdBy'>&copy; Lean Excellence 2022 | Created by Nick Jonescu</div>
          <div className='footer-socials'>
            <p>info@leanexcellence.ca</p>
            <ul>
              <li><FontAwesomeIcon icon={faFacebook}/></li>
              <li><FontAwesomeIcon icon={faInstagram}/></li>
              <li><FontAwesomeIcon icon={faLinkedin}/></li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer
