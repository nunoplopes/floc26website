import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'
import Speaker from './pages/Speaker'
import Committe from './pages/Committe'
import Program from './pages/Program'
//import Registeration from './pages/Registeration'
//import Accomodation from './pages/Accomodation'
import Venue from './pages/Venue'
//import Transportation from './pages/Transportation'
import Tourism from './pages/Tourism'
import SpeakersId from './components/SpeakersId'

// import other pages as needed

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/speakers' element={<Speaker/>} />
        <Route path='/speakers/:name' element={<SpeakersId/>} />
        <Route path='/committee' element={<Committe/>} />
        <Route path='/programs' element={<Program/>} />
        <Route path='/venue' element={<Venue/>} />
        <Route path='/tourism' element={<Tourism/>} />
      </Routes>
  )
}

export default App
