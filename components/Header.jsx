'use client';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image'
import LOGO from '@/assets/images/logo-small.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Committee', href: '/committee' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      className={`flex justify-between items-center fixed w-full z-10 p-5 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* logo */}
      <motion.div
        className={`logo text-4xl font-bold text-center ${
          isScrolled ? 'text-black' : 'text-neutral-100'
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
      >
        <Link href="/">
          {isScrolled ? <Image src={LOGO} width={100} alt='logo'/> : <Image src={LOGO} width={100} className=' bg-white' alt='logo'/> }
        </Link>
      </motion.div>

      {/* Mobile menu button */}
      <motion.button
        className="md:hidden text-neutral-800 text-2xl z-10"
        onClick={toggleMenu}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        {isMenuOpen ? (
          <HiX className={`${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`} />
        ) : (
          <HiMenu className={`${isScrolled ? 'text-neutral-800' : 'text-neutral-50'}`}/>
        )}
      </motion.button>

      {/* nav links */}
      <motion.nav
        className={`
          text-sm font-bold -z-10
          fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto
          ${isScrolled ? 'bg-white/90' : 'bg-black/70'} md:bg-transparent p-4 md:p-0
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
        `}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-16 md:mt-0">
          <motion.li
            className={`hover:text-gray-300 transition-colors duration-300 py-2 md:py-0 ${
              isScrolled ? 'text-black' : 'text-neutral-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">Home</Link>
          </motion.li>
          <motion.li
            className={`hover:text-gray-300 transition-colors duration-300 py-2 md:py-0 ${
              isScrolled ? 'text-black' : 'text-neutral-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/about">About</Link>
          </motion.li>

          <Link href="/speakers">
          <motion.li
            className={`hover:text-gray-300 transition-colors duration-300 py-2 md:py-0 ${
              isScrolled ? 'text-black' : 'text-neutral-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Speakers
          </motion.li>
          </Link>

          <motion.li
            className={`hover:text-gray-300 transition-colors duration-300 py-2 md:py-0 ${
              isScrolled ? 'text-black' : 'text-neutral-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/committee">Committee</Link>
          </motion.li>
          <motion.li
            className={`hover:text-gray-300 transition-colors duration-300 py-2 md:py-0 ${
              isScrolled ? 'text-black' : 'text-neutral-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">Contact</Link>
          </motion.li>
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
