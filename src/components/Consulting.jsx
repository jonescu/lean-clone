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
      <div className="five-step-grid">
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/6-1.png" alt="" />
        <div>
          <h3>Assessment</h3>
          <p>Our first step ensures your business has what it needs to deliver on your goals. It helps you expand and grow your business in a way that is smart and strategic. It provides a solid foundation for making sound decisions.</p>
        </div>
        <div>
        <h3>Strategic Planning</h3>
          <p>It’s hard to accomplish anything without a plan. Our strategic planning also helps businesses determine where to spend time, human capital, and money.</p>
        </div>
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/7-1.png" alt="" />
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/8-1.png" alt="" />
        <div>
          <h3>Execution</h3>
          <p>Our Execution process represents a disciplined process or a logical set of related activities that enable your organisation to take a strategy and make it work. As we believe without a careful, planned approach to execution, strategic goals cannot be attained.</p>
        </div>
        <div>
        <h3>Organizational Development</h3>
          <p>Our organizational development process is an action model exclusively designed to understand known problems, set measurable goals, implement changes, and analyze results.</p>
        </div>
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/9-1.png" alt="" />
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/10-1.png" alt="" />
        <div>
          <h3>Sustainability</h3>
          <p>In today`s ever-evolving world, debating whether to incorporate sustainability into your business strategy is no longer an option. Therefore our prime focus is to consider a values-driven approach when developing business strategies can be vital to long-term success.</p>
        </div>
      </div>
      <div className="hard-line"></div>
      <div className="services">
        <div className="services-info">
          <h3>Our Consulting Services</h3>
          <ul>
            <li>Strategy & Development</li>
            <li>Mergers & Acquisitions</li>
            <li>Project Management</li>
            <li>Operational Excellence (Inventory, turnaround, quality management, and more)</li>
            <li>Lean Manufacturing</li>
            <li>Human Resources</li>
            <li>Health and Safety</li>
            <li>Turnaround Management</li>
          </ul>
          <button>Contact us for more information!</button>
        </div>
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/dylan-gillis-KdeqA3aTnBY-unsplash-1920x1280.jpg" alt="" />
      </div>
      <Footer/>
    </>
  )
}

export default Consulting
