import React, { useState } from 'react'
import LOGO from '../../assets/images/logo-small.png'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='flex items-center justify-between z-10 p-5 bg-white'>
        {/* logo */}
        <div>
          <Link to='/'>
            <img src={LOGO} width={100} height={100} alt='logo icon' />
          </Link>
        </div>

        {/* nav links */}
        <motion.nav
        className={`
          text-sm font-bold
          fixed top-0 right-0 w-full h-screen bg-white p-4
          md:relative md:h-auto md:w-auto md:bg-transparent md:p-0
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0 shadow-lg' : 'translate-x-full'}
          md:translate-x-0 md:shadow-none
          z-10 md:z-auto
        `}

        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
        >
            <motion.ul 
            className='flex flex-col md:flex-row gap-4 md:gap-8 mt-16 md:mt-0'>
                <Link to='/'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Home</li></Link>
                <Link to='/about'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>About</li></Link>
                <Link to='/venue'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Venue</li></Link>
                {/*<Link to='/speakers'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Keynote Speakers</li></Link> */}
                <Link to='/committees'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Committees</li></Link>
                {/*<Link to='/programs'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Programs</li></Link>
                <Link to='/registeration'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Registration</li></Link>
                <Link to='/accomodation'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Accomodation</li></Link>  */}
                {/* <Link to='/transportation'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Transportation</li></Link>
                <Link to='/tourism'><li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Tourism</li></Link> */}
            </motion.ul>
        </motion.nav>

        {/* Mobile menu button - hidden on md and larger screens */}
      <motion.button
        className={`md:hidden text-4xl z-30 ${
          isMenuOpen ? 'text-neutral-800' : 'text-neutral-800'
        }`}
        onClick={toggleMenu}
        // initial={{ opacity: 0, x: 20 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </motion.button>
    </header>
  )
}

export default Header
