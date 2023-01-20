import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'

function Training() {
  return (
    <>
      <div className='training'>
        <Banner/>
        <Nav/>
        <h1>Training</h1>
      </div>
      <p>Our customized on-site training programs are a cost-effective way to train employees on your schedule. Training on-site minimizes the cost-per-participant, reduces travel expenses, and ensures that the content is specific to your exact needs.</p>
      <h3>FIND OUT HOW TO GET $10,000 PER EMPLOYEE IN GOVERNMENT GRANTS</h3>
      <div className="training-grid">
        <div className="programs">
          <div className="programs-list">
            <p className='training-header'>Training Programs</p>
            <ul>
              <li>Leadership Training</li>
              <li>Lean Six Sigma Training (White, Yellow, Green and Black Belt)</li>
              <li>Value Stream Management</li>
              <li>Project Management</li>
              <li>Team Building Training</li>
              <li>Health and Safety Training</li>
              <li>Management Training</li>
              <li>PLUS over 160 customized training programs available</li>
            </ul>
          </div>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/dylan-gillis-KdeqA3aTnBY-unsplash-1920x1280.jpg" alt="" />
        </div>
        <div className="benefits">
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/brooke-cagle-uHVRvDr7pg-unsplash-1920x1280.jpg" alt="" />
          <p className='training-header'>Benefits of Training</p>
          <ul>
            <li>Increase Productivity</li>
            <li>Retain Your People</li>
            <li>Nurture Future Leaders</li>
            <li>Increase Employee Engagement</li>
            <li>Implement An Effective Leadership Style</li>
            <li>Make Better Business Decisions</li>
          </ul>
          <button>Contact us to find your training solution!</button>
        </div>
        <div className="vsm">
          <span>NEW</span>
          <p className='training-header'>Value Stream Management Program (VSM)</p>
          <p>The Value Stream Manager within our customized value stream management project the Value Stream Manager will learn how to increase the ratio of value to non-value by eliminating waste in overall supply change by deploying lean methodologies. Practicing value stream management builds a customer-focused and continuous improvement culture.</p>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/sincerely-media-dGxOgeXAXm8-unsplash-1920x1280.jpg" alt="" />
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/06/New-Project-1.jpg" alt="" />
          <p className='training-header'>Benefits of VSM Program</p>
          <p>When you start to implement practices from Value Stream Management the benefits will start to flow into the overall organization. The practice of consistently gathering data allows you to track performance over time and make your pipeline efficient.</p>
          <p className='training-header'>VSM Program Details</p>
          <ul>
            <li>Effective Leadership</li>
            <li>Change Management</li>
            <li>Motivating Your Employees</li>
            <li>Team Building</li>
            <li>Art of Delegation</li>
            <li>Conflict Resolution</li>
            <li>Art of Negotiation</li>
            <li>Managing Performance</li>
            <li>Selection & Retention of Talent</li>
            <li>Time Management</li>
            <li>Persuasive and Effective Communication</li>
            <li>Managing Across Cultures</li>
            <li>Introduction To Lean Six Sigma</li>
            <li>Defining Problems and Projects</li>
            <li>Facilitation Skills for Lean</li>
            <li>Process Thinking & Mapping</li>
            <li>Data Collection & Analysis</li>
            <li>Statistical Process Control</li>
            <li>Analyzing for Root Cause</li>
            <li>Improving Process & Control</li>
            <li>Introduction to Lean</li>
            <li>Lean Tools & Concepts</li>
            <li>Lean Organization</li>
            <li>Building a VSM</li>
          </ul>
          <button>Contact Us To Learn More</button>
        </div>
        <h3>Lean Six Sigma Training</h3>
        <p>Employees will be introduced to Lean Six Sigma methodologies and will be coached in deployment of these methodologies to bring improvement and efficiencies in the area of Quality, Production and Product development.</p>
        <div className="belts">
          <div className="white-belt">
            <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/11-160x160.png" alt="" />
            <p>White Belt Training</p>
            <p>The Six Sigma White Belt course is an Introduction to lean six sigma philosophy, methodology, tools, roles and terminology. In this course candidates will be introduced to basic fundamentals of Lean Six Sigma and also why organizations need to change to survive.</p>
          </div>
          <div className="yellow-belt">
            <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/12-160x160.png" alt="" />
            <p>Yellow Belt Training</p>
            <p>The Six Sigma Yellow Belt course is an introduction to some of the basic fundamental tools of Lean Six Sigma.  The candidates are introduced to 5S, basic process mapping and seven wastes in a process and the benefits of Visual Management.</p>
          </div>
          <div className="green-belt">
            <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/13-160x160.png" alt="" />
            <p>Green Belt Training</p>
            <p>This Six Sigma Green Belt course is comprised of 11 separate sessions. Green Belt training focuses on how to lead a process improvement initiative using structured Lean Six Sigma methodology, engagement of people. Concepts of process thinking and design, lean thinking, data collection and analysis, and change management are explained. After the competition of this course candidates will become proficient in all of the analytical tools necessary to define, measure, analyze, improve, and control Six Sigma improvement projects. Many of the lessons include interactive practice exercises.</p>
          </div>
          <div className="black-belt">
            <img src="https://leanexcellence.ca/wp-content/uploads/2022/08/14-160x160.png" alt="" />
            <p>Black Belt Training</p>
            <p>This Lean Six Sigma Black Belt course builds on the DMAIC methodology and focuses on introducing the tools required to lead complex and multifunctional process improvement or process design projects.  It provides the candidates with the necessary tools required to manage projects using a roadmap that encompasses change management and the ability to identify and optimize the key factors that are linked to the customer’s needs in a process or product.  After the completion of this course the candidate will be able to analyze data and information to demonstrate and prove the way forward by achieving successful breakthroughs in environments where resistance is a challenge.</p>
          </div>
          <button>Contact us to get an optimized quote!</button>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Training