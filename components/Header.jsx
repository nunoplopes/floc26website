'use client';
import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LOGO from '@/assets/images/logo-small.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to specifically close the menu
  // We'll call this conditionally
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    // Only close the menu if it's likely the mobile menu that's open.
    // On larger screens, isMenuOpen might have been true if resized from mobile,
    // but the CSS should handle the display. Setting it to false is generally safe.
    if (isMenuOpen) {
      setIsMenuOpen(false);
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

  // Determine if we are effectively in a mobile view for JS logic if needed
  // For this fix, CSS precision is more critical.
  // const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768; // Tailwind's 'md' breakpoint

  return (
    <motion.header
      className={`flex justify-between items-center fixed w-full z-20 p-5 ${ // Increased z-index for header
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
        <Link href="/" onClick={handleLinkClick}> {/* Also close if logo clicked when mobile menu is open */}
          {isScrolled ? (
            <Image src={LOGO} width={100} alt="logo" />
          ) : (
            // Ensuring bg-white is applied when header is transparent and logo needs visibility
            <Image src={LOGO} width={100} className={!isScrolled ? "bg-white rounded" : ""} alt="logo" />
          )}
        </Link>
      </motion.div>

      {/* Mobile menu button - hidden on md and larger screens */}
      <motion.button
        className={`md:hidden text-4xl z-30 ${ // Higher z-index for button
          isMenuOpen ? 'text-neutral-800' : (isScrolled ? 'text-neutral-800' : 'text-neutral-50') // Icon color: dark if menu open or header scrolled
        }`}
        onClick={toggleMenu}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </motion.button>

      {/* nav links */}
      <motion.nav
        className={`
          text-sm font-bold
          fixed top-0 right-0 h-screen w-64 bg-white p-4                       /* Mobile: slide-in panel */
          md:relative md:h-auto md:w-auto md:bg-transparent md:p-0             /* Desktop: regular nav */
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0 shadow-lg' : 'translate-x-full'}      /* Mobile: slide in/out and shadow */
          md:translate-x-0 md:shadow-none                                      /* Desktop: always in place, no shadow */
          z-10 md:z-auto                                                       /* Z-index: mobile nav under button, desktop auto */
        `}
        // These initial/animate props are for the nav's first appearance with the header
        initial={{ opacity: 0, x: 20 }} // From user's original code
        animate={{ opacity: 1, x: 0 }}   // From user's original code
        transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }} // From user's original code
      >
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-16 md:mt-0">
          {/* Navigation Links */}
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/speakers", label: "Speakers" },
            { href: "/committee", label: "Committee" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <motion.li
              key={link.href}
              className={`py-2 md:py-0 transition-colors duration-300 
                ${isMenuOpen ? 'text-neutral-800 hover:text-gray-500' // Mobile open: dark text
                : (isScrolled ? 'text-black hover:text-gray-700' // Desktop Scrolled: black text
                              : 'text-neutral-800 hover:text-gray-500 md:text-neutral-100 md:hover:text-gray-300') // Desktop Transparent: specific for desktop
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