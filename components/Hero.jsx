'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import SKY from '@/assets/images/skyline.png'
import STRIP from '@/assets/images/strip.png'
import FLOC from '@/assets/images/floc.png'


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
      className='relative w-full bg-neutral-100 h-auto '
    >
      {/* content */}
      <div className="hidden md:block pt-20">
        <Image src={SKY} className='w-full' alt='skyline' />

        {/* text content */}
        <div className=" mt-8 md:mt-7">
          <h2 className='text-3xl md:text-7xl font-bold text-blue-900 ml-7'>FEDERATED</h2>
          <h2 className='text-3xl md:text-7xl font-bold text-blue-900 ml-7'>LOGIC CONFERENCE</h2>
          <p className='text-yellow-500 text-2xl ml-7 my-4'> <span className='text-yellow-600 font-bold '>FLOC'26</span> WILL BE HELD IN LSBON, PORTUGAL</p>
        </div>

        {/* Event dates */}
        <motion.div 
          variants={itemVariants}
          className='hidden md:block mt-3 md:mt-3 mb-7'
        >
          <ul className='flex flex-col md:flex-row ml-7 mt-3 list-disc gap-4 md:gap-8 space-x-4 [&>li]:marker:text-yellow-400 [&>li]:marker:text-2xl'>
            <li>
              <h3 className='text-blue-900 font-bold text-xl'>SUMMER SCHOOL</h3>
              <p className='text-blue-900 font-normal'>13 - 17 JULY</p>
            </li>

            <li>
              <h3 className='text-blue-900 font-bold text-xl'>CONFERENCE</h3>
              <p className='text-blue-900 font-normal'>22-23 & 26-29 JULY</p>
            </li>

            <li>
              <h3 className='text-blue-900 font-bold text-xl'>WORKSHOP</h3>
              <p className='text-blue-900 font-normal'>18-19 & 24-25 JULY</p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* floc image for mobile */}
      <div className='md:hidden w-full flex justify-center items-center pt-20'>
        <Image
          src={FLOC}
          alt='floc2026'
          className='w-full h-auto object-contain'
          priority
        />
      </div>

      {/* strip */}
      <div className='hidden md:block bottom-0 right-0 left-0 w-full'>
        <Image 
          src={STRIP}
          alt="strip image"
          className='w-full h-[10em] md:h-[20em] lg:h-[17em] object-fill'
          priority
        />
      </div>
    </section>
  )
}

export default Hero