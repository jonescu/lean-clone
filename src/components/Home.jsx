import React from 'react'
import Banner from './Banner'
import Nav from './Nav'

function Home() {
  return (
    <>
      <div className='home'>
        <Banner/>
        <Nav/>
        <h1>Accelerate your business growth</h1>
        <button>Let's Connect</button>
      </div>
      <div className="section-two">
        <div className="welcome-statement">
          <h2>Welcome to Lean Excellence Canada</h2>
          <p>Over the years our consultants have been facilitating change in organizations through process improvements, developing procedures, and providing customized training to fit the needs of our clients. We pride ourselves on the development of strategic plans and being experts in execution and implementation.</p>
          <p>Our team holds extensive experience in business and management consulting, in various industries such as: Manufacturing, Health Care, Supply Change Management, Logistics, Health & Safety, and Human Resource Management. Through our experiences, we understand the challenges that many owners, managers, and supervisors face, in day-to-day and big-picture operations.</p>
        </div>
        <div className="section-two-image">
          <img src="	https://leanexcellence.ca/wp-content/uploads/2022/03/about-left.png" alt="" />
        </div>
      </div>
     </>
  )
}

export default Home