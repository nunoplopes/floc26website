'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import HEROIMAGE from '@/assets/images/skyline.png'

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section 
      ref={ref}
      className='relative w-full h-screen bg-neutral-100 overflow-hidden pt-[5rem] pb-20'
    >

      {/* Content container */}
      <div className='relative container mx-auto w-full h-full'>
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-blue-700 max-w-5xl text-left'
        >

          
          <div className='w-full mt-20'>
            <Image src={HEROIMAGE} layout='contain' alt='hero image'/>
          </div>

          <motion.p 
            variants={itemVariants}
            className=' ml-7 md:ml-auto text-left md:text-xl lg:text-xl text-xl text-blue-700'
          >
           13 - 29 JULY 2026
          </motion.p>
          
          <motion.div variants={itemVariants} className=" ml-7 md:ml-auto">
            <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold'>
              WELCOME TO FLoC'2026
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className=" ml-7 md:ml-auto">
            <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold'>
              LOGIC CONFERENCE
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className=' ml-7 md:ml-auto text-left md:text-xl lg:text-xl text-yellow-500'
          >
           Join us in Lisbon Portugal for a premier event <br/>in logic computer and computer science
          </motion.p>
          {/* <motion.div 
            variants={itemVariants}
            className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12 px-4'
          >
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300'>
              <h3 className='text-lg sm:text-xl font-bold text-blue-400 mb-2'>SUMMER SCHOOL</h3>
              <p className='text-xl sm:text-2xl font-semibold'>13-17 JULY</p>
            </div>
            
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300'>
              <h3 className='text-lg sm:text-xl font-bold text-blue-400 mb-2'>CONFERENCE</h3>
              <p className='text-xl sm:text-2xl font-semibold'>22-23 & 26-29 JULY</p>
            </div>

            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-transform duration-300'>
              <h3 className='text-lg sm:text-xl font-bold text-blue-400 mb-2'>WORKSHOP</h3>
              <p className='text-xl sm:text-2xl font-semibold'>18-19 & 24-25 JULY</p>
            </div>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='absolute bottom-[2em] left-1/2 transform -translate-x-1/2'
      >
        <div className='w-6 h-10 border-2 border-blue-700 rounded-full flex justify-center'>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1.5 h-1.5 bg-blue-700 rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero