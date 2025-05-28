'use client';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LOGO from '@/assets/images/logo-small.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropDown(false); // Close dropdown when toggling mobile menu
  };

  // Toggle dropdown
  const eventDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  // Function to specifically close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropDown(false); // Close dropdown when closing menu
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsDropDown(false); // Close dropdown on link click
    }
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`flex justify-between items-center fixed bg-white w-full z-20 p-5 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.div
        className={`logo text-4xl font-bold text-center ${
          isScrolled ? 'text-black' : 'text-neutral-100'
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
      >
        <Link href="/" onClick={handleLinkClick}>
          {isScrolled ? (
            <Image src={LOGO} width={100} alt="logo" />
          ) : (
            <Image src={LOGO} width={100}  alt="logo" />
          )}
        </Link>
      </motion.div>

      {/* Mobile menu button - hidden on md and larger screens */}
      <motion.button
        className={`md:hidden text-4xl z-30 ${
          isMenuOpen ? 'text-neutral-800' : isScrolled ? 'text-neutral-800' : 'text-neutral-800'
        }`}
        onClick={toggleMenu}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </motion.button>

      {/* Nav links */}
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
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-16 md:mt-0">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/speakers', label: 'Speakers' },
            { href: '/committee', label: 'Committee' },
            { href: '/program', label: 'Programs' },
            { href: '/registeration', label: 'Registeration' },
            { href: '/accommodation', label: 'Accommodation' },
            { href: '/venue', label: 'Venue' },
            { href: '/transportation', label: 'Local Information' },
            { href: '/tourism', label: 'Tourism' },
          ].map((link) => (
            <motion.li
              key={link.href || link.label}
              className={`py-2 md:py-0 transition-colors duration-300 relative ${
                isMenuOpen
                  ? 'text-neutral-800 hover:text-gray-500'
                  : isScrolled
                  ? 'text-black hover:text-gray-700'
                  : 'text-neutral-800 hover:text-gray-500 md:text-neutral-800 md:hover:text-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.href} onClick={handleLinkClick}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;