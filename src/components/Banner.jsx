import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
function Nav() {
  return (
    <div className='banner-container'>
      <div className='contact-info'>
        <p className='address'><FontAwesomeIcon icon={faLocationDot} className='font-awesome'/> 235 Dixon Road Unit 106, Etobicoke, ON, M9P 2M5 Canada</p>
        <p className='phone-number'><FontAwesomeIcon icon={faPhone} className='font-awesome'/> +1 (800) 799 5491</p>
      </div>
      <div className='social-icons'>
        <ul>
          <li><FontAwesomeIcon icon={faFacebook}/></li>
          <li><FontAwesomeIcon icon={faInstagram}/></li>
          <li><FontAwesomeIcon icon={faLinkedin}/></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav