import React from 'react'
import Banner from './Banner'
import Nav from './Nav'

function Home() {
  return (
    <div className='home'>
      <Banner/>
      <Nav/>
      <h1>Accelerate your business growth</h1>
      <button>Let's Connect</button>
    </div>
  )
}

export default Home