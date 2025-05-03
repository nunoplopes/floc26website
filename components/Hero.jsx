'use client'
import React from 'react'
import heroImage from '@/assets/images/hero.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
      className='relative w-full pt-[5rem] pb-20'
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse" />
      </div>

      {/* Content container */}
      <div className='relative container mx-auto w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16'>
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-white max-w-5xl text-center'
        >
          <motion.div variants={itemVariants} className="mt-20">
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight'>
              FEDERATION LOGIC
            </h1>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight'>
              CONFERENCE
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className='text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-200 mb-8 sm:mb-12 max-w-3xl mx-auto px-4'
          >
            FLOC26 will be held in JULY IN LISBON, PORTUGAL.
          </motion.p>

          <motion.div 
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className='absolute bottom-[1em] left-1/2 transform -translate-x-1/2 mt-[5rem]'
      >
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1.5 h-1.5 bg-white rounded-full mt-2'
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero