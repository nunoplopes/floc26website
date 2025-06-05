import React from 'react'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Speakers from '../src/components/Speakers'
import Sponsors from '../src/components/Sponsors'
import Events from '../src/components/Events'

const Layout = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Events/>
    <Speakers/>
    <Sponsors/>
    </>
  )
}

export default Layout