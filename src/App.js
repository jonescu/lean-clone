import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Training from './components/Training'
import Consulting from './components/Consulting'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Training' element={<Training/>}></Route>
      <Route path='/Consulting' element={<Consulting/>}></Route>
      <Route path='/Team' element={<Team/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default App