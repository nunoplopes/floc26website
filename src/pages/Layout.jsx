import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Speakers from '../components/Speakers';
import Sponsors from '../components/Sponsors';
import Events from '../components/Events';

const Layout = () => {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Speakers />
      <Sponsors />
    </>
  );
};

export default Layout;
