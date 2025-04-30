'use client'
import React from 'react'
import heroImage from '@/assets/images/hero.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      className='w-full h-screen'
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      
      {/* Content container */}
      <div className='container w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16 text-center
      '>
        <motion.div 
          className='text-white max-w-4xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 md:mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            FEDERATION LOGIC
          </motion.h1>
          <motion.h1 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            CONFE<span className='bg-blue-700'>RENCE</span>
          </motion.h1>
          <motion.p 
            className='text-base sm:text-lg md:text-xl mb-6 md:mb-8 my-3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            FLOC26 will be held in JULY IN LISBON, PORTUGAL.
          </motion.p>
          <div className='mt-4 md:mt-5 flex items-center justify-center '>
            <ul className='flex sm:flex-row items-start sm:items-center gap-4 md:gap-8 list-disc pl-4 sm:pl-0'>
              <li className='text-yellow-400'>
                <span className='font-bold'>SUMMER SCHOOL:</span>
                <p>13-17 JULY</p>
              </li>
              
              <li className='text-yellow-400'>
                <span className='font-bold'>CONFERENCE:</span>
                <p>22-23 & 26-29 JULY</p>
              </li>

              <li className='text-yellow-400'>
                <span className='font-bold'>WORKSHOP:</span>
                <p>18-19 & 24-25 JULY</p>
              </li>
            </ul>
          </div>
          <motion.button 
            className='px-[3rem] py-2 text-neutral-50 rounded-full bg-blue-500 hover:bg-red-700 transition-colors duration-300 text-base md:text-lg font-semibold mt-6 md:mt-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            Sign up
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero