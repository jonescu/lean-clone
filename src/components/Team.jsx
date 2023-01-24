import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'

function Team() {
  return (
    <>
      <div className="team-hero">
        <Banner/>
        <Nav/>
        <h1>Our Team</h1>
        <p>We combine global expertise and local insight to help you turn your amitious goals into reality.</p>
      </div>
      <div className="team-members">
        <div className='member'>
          <h2>Shahzad Shah</h2>
          <span>Managing Partner</span>
        </div>
        <div className='about'>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/06/Shahzad-400x400-photo-320x320.png" alt="" />
          <div className="about-text">
            <p>Shahzad Shah is the founder and Managing Partner of Lean Excellence Canada, a consulting and training firm offering a large range of training services, as well as training and implementation of Lean Methodologies in various organizations throughout Canada and the USA. Shahzad has over 28 years of executive leadership experience working for public and private corporations in North America. In his roles, he has managed and driven continuous improvement initiatives for multi facility divisions across North America introducing Lean methodologies and sharing best practices. His main focus has been developing goal oriented and data driven organizations. He has helped organizations recruit and evaluate vendors to setup outsourcing in Asian markets and provided support for startup companies in Middle East.</p>
            <p>Shahzad has directly managed P&L of various small to large companies and was part of the Leadership Team that crafted and executed strategy for a $2 billion organization.</p>
            <p>Shahzad's credentials include Engineering, Human Resource Management, Master of Business Administration, from Queen's University and Master Lean Six Sigma Black Belt from York University. He is a Certified Management Consultant by the Canadian Association of Management Consultants.</p>
          </div>
        </div>
        <div className='member'>
          <h2>Natalie Hansford</h2>
          <span>Partner</span>
        </div>
        <div className='about'>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/06/Natalie-400x400-photo-320x320.png" alt="" />
          <div className="about-text">
            <p>Natalie Hansford is a leader and team-builder. Natalie works with organizations to improve communication, policies, practices, and company culture. She has worked alongside all levels of an organization assisting and facilitating the Senior Leadership in strategy formulation and developing organization human resources dashboards, working with middle management providing them support in the implementation stage, and lastly, first-hand involvement with employees assisting and motivating them to achieve their goals.</p>
            <p>Natalie in her role has provided strategic consulting services to over 150 clients across all industries from manufacturing, construction, health care, IT, service industry, etc. She directly oversaw a team of 10+ HR Consultants and employees, assisting and guiding them on how to deal with customer concerns, best practices, client relationships, and human resources development. Natalie's previous experience as a Director has given her a full-scale knowledge of business strategies and best practices which she enjoys sharing with clients and coaches.</p>
            <p>In 2019 Natalie launched her own consulting firm focused on providing career growth support for young business professionals. Her goal is to provide employees the opportunity to learn and grow within a company, increase retention and employee engagement.</p>
            <p>Natalie’s credentials include Business & Marketing from Seneca College, Post Grad Human Resource Management from Georgian College.</p>
          </div>
        </div>
        <div className='member'>
          <h2>Thy Bryan</h2>
          <span>HR Generalist</span>
        </div>
        <div className='about'>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/10/Profile-Photos-for-LEC-2-320x320.png" alt="" />
          <div className="about-text">
            <p>Thy Bryan has been assisting and guiding organizations with employee relations such as investigations, termination and discipline. She has implemented and maintained several HR policies, strategies and procedures as well as recruit and select new hires, based on their knowledge, skills and abilities for internal and external hires.</p>
            <p>She remains well rounded by continuing to pursue new opportunities in areas beyond her realm of work such as fitness and art.</p>
            <p>Thy's credentials include a Bachelor's of Business Administration concentrating in Human Resource Management from Brock University.</p>
          </div>
        </div>
        <div className='member'>
          <h2>Anil Gupta</h2>
        </div>
        <div className='about'>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/06/Anil-400x400-photo-320x320.png" alt="" />
          <div className="about-text">
            <p>Anil Gupta has been helping organizations improve their performance over the past 18 years across a wide range of industries in North America. He works with executive teams to build the strategic plan and cultural orientation for the organization, and helps middle level leaders translate the strategic plans into execution plans. He also leads complex cross-functional problem solving, transformational process redesign exercises, and enables organizations through Lean and Six Sigma training. His interest is to build a comprehensive management system, which integrates an organization’s strategic plans with organizational culture and employee engagement.</p> 
            <p>Mr. Gupta currently teaches Lean Six Sigma courses at the University of Toronto and McMaster University. Anil has a MBA from the Richard Ivey School of Business, University of Western Ontario; M.Sc. in Business Research from the Rotman School, University of Toronto; Lean Six Sigma Master Black Belt Certification from the Six Sigma Academy, Scottsdale, Arizona and is a certified administrator of the Myers Briggs Personality Type Indicators. He is currently a doctoral research scholar at the Rotman School, University of Toronto.</p>
          </div>
        </div>
        <div className='member'>
          <h2>Hadi Naveed</h2>
        </div>
        <div className='about'>
          <img src="https://leanexcellence.ca/wp-content/uploads/2022/06/Hadi-400x400-photo--320x320.png" alt="" />
          <div className="about-text">
            <p>Hadi Naveed is a consensus builder and a senior operations management leader with over 17 years of manufacturing plant management experience working for both public and private corporations. Data-driven and results-oriented, Hadi is an innovative problem solver and a firm believer in lean methodologies. He has a track record of building high-performing teams, devising and implementing continuous improvement initiatives, and establishing operational excellence centers that have resulted in improved product quality, reduced operating costs, and ultimately enhanced bottom lines. Hadi specializes in team building, process re-engineering, change management, and process standardization.</p>
            <p>Hadi has a Bachelor of Applied Science and Engineering – University of Toronto, P.Eng. – Professional Engineers of Ontario (PEO), Lean Six Sigma Green Belt</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Team