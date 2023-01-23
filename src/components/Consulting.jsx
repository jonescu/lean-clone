import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

function Consulting() {
  return (
    <>
      <div className="consulting">
        <Banner/>
        <Nav/>
        <h1>Consulting</h1>
      </div>
      <div className="five-step">
        <div className="left">
          <h2>Our 5 Step Process</h2>
          <p>Our professional team of consultants will work hand-inhand with you and your team to implement a customized consulting solution to achieve your short and long term business goals.</p>
          <div className="five-step-list">
            <ul>
              <li><FontAwesomeIcon icon={faSquareCheck} className='fa-check'/>Assessment</li>
              <li><FontAwesomeIcon icon={faSquareCheck} className='fa-check'/>Strategic Planning</li>
              <li><FontAwesomeIcon icon={faSquareCheck} className='fa-check'/>Execution</li>
              <li><FontAwesomeIcon icon={faSquareCheck} className='fa-check'/>Organizational Development</li>
              <li><FontAwesomeIcon icon={faSquareCheck} className='fa-check'/>Sustainability</li>
            </ul>
          </div>
        </div>
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/5.png" alt="" />
      </div>
      <div className="hero">
        <h2>Execution of Effective Change Management</h2>
        <p>through creative and well-planned transformation support of Excellence.</p>
      </div>
      <Footer/>
    </>
  )
}

export default Consulting
