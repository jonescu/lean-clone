import React from 'react'
import Banner from './Banner'
import Nav from './Nav'

function Home() {
  return (
    <>
      <div className='home'>
        {/* Top Bar */}
        <Banner/>
        <Nav/>
        <h1>Accelerate your business growth</h1>
        <button>Let's Connect</button>
      </div>
      {/* Section Two */}
      <div className="section-two">
        <div className="welcome-section">
          <h2>Welcome to Lean Excellence Canada</h2>
          <p>Over the years our consultants have been facilitating change in organizations through process improvements, developing procedures, and providing customized training to fit the needs of our clients. We pride ourselves on the development of strategic plans and being experts in execution and implementation.</p>
          <p>Our team holds extensive experience in business and management consulting, in various industries such as: Manufacturing, Health Care, Supply Change Management, Logistics, Health & Safety, and Human Resource Management. Through our experiences, we understand the challenges that many owners, managers, and supervisors face, in day-to-day and big-picture operations.</p>
          <div className='testimonial'>
            <p>“I worked with Lean Excellence for the first time a few years back. They were able to streamline my production process and increase my efficiency by 30% within 6 months.”</p>
            <p>Tony C.</p>
            <p>Equipment Manufacturer</p>
          </div>
        </div>
        <img src="https://leanexcellence.ca/wp-content/uploads/2022/03/about-left.png" alt="" />
      </div>
      {/* Section Three */}
      <div className="section-three">
        <div className='philosophy-heading'>
          <h1>Our Philosophy</h1>
          <p>We believe every company has three dimensions of performance, which impact the growth, efficiency and core values of each organization.</p>
        </div>
        <div className="card">
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/3.png" alt="" />
          <h3>Culture & Growth</h3>
          <p>Enabling clarity and employee development within your organization will maintain and level your overall company visions, goals and strategy.</p>
        </div>
        <div className="card">
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/2-1.png" alt="" />
          <h3>Strategies & Systems</h3>
          <p>Using strategies and systems within all levels of management and employees can expand opportunities for growth, quality and productivity.</p>
        </div>
        <div className="card">
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/1-1.png" alt="" />
          <h3>Data & Matrix</h3>
          <p>Data flow will provide you more control within your business. Allowing you to be enabled and empowered as the company grows and will maintain engagement at the employee level.</p>
        </div>
      </div>
      <div className="section-four">
        <h1>Our Clients</h1>
        <div className='carousel'>
          <img src="" alt="" />
        </div>
      </div>
      <div className="section-five">
        <img src="" alt="" />
        <div>
          <h1>Let's Work Together</h1>
          <p>Experience and innovation in a single touch.</p>
          <form action="#">
            <input type="text" id='name' placeholder='Name' required/>
            <input type="tel" name="" id="phone" placeholder='Phone Number' required/>
            <input type="email" id='email' placeholder='Email Address' required/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
          </form>
        </div>
      </div>
      <footer>
        <div className='newsletter'>
          <h1>Subscribe to our Newsletter</h1>
          <input type="email" />
          <button>Subscribe</button>
        </div>
        <div className="connect">
          <span>&copy; Lean Excellence 2022 | Created by Nick Jonescu</span>
          <div className='footer-socials'>

          </div>
        </div>
      </footer>
     </>
  )
}

export default Home