import React from 'react'
import Home from './components/Home'
import Training from './components/Training'
import Consulting from './components/Consulting'
import Sigma from './components/Sigma'
import Team from './components/Team'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Training' element={<Training/>}></Route>
      <Route path='/Consulting' element={<Consulting/>}></Route>
      <Route path='/Team' element={<Team/>}></Route>
      <Route path='/Sigma' element={<Sigma/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default App