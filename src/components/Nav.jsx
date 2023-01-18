import React from 'react'
import { Link } from 'react-router-dom' 

function Nav() {
  return (
    <div className='nav-container'>
      <img src="https://leanexcellence.ca/wp-content/uploads/2022/03/logo.png" alt="" />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Training'>Training</Link>
        <Link to='/Consulting'>Consulting</Link>
        <Link to='/Sigma'>Sigma</Link>
        <Link to='/Team'>Team</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
    </div>
  )
}

export default Nav