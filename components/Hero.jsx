'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import HEROIMAGE from '@/assets/images/skyline.png'
import STRIP from '@/assets/images/strip.png'
import LOGOO from '@/assets/images/logoo.png'

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
      className='relative w-full bg-neutral-100 pt-[5rem] pb-20'
    >

      {/* Content container */}
      <div className='relative container mx-auto w-full h-full mb-44'>
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-blue-700 max-w-5xl text-left'
        >

          
          <div className='w-full mt-10'>
            <Image src={HEROIMAGE} layout='contain' alt='hero image'/>
          </div>

          <motion.p 
            variants={itemVariants}
            className=' ml-7 md:ml-auto text-left md:text-xl lg:text-xl text-xl text-blue-900'
          >
           13 - 29 JULY 2026
          </motion.p>
          
          <motion.div variants={itemVariants} className=" ml-7 md:ml-auto">
            <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold text-blue-900'>
              WELCOME TO FLoC'2026
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className=" ml-7 md:ml-auto">
            <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold text-blue-900'>
              LOGIC CONFERENCE
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className=' ml-7 md:ml-auto text-left md:text-xl lg:text-xl text-yellow-400 mt-3 uppercase'
          >
           FLOC'26 will be held in july in lisbon, portugal
          </motion.p>

          {/* workshop, conference, summer school */}
          <motion.div 
            variants={itemVariants}
            className=''
          >
            {/* add yellow color to the list items */}
            <ul className='flex items-center mt-3 list-disc gap-4 md:gap-4 space-x-4 [&>li]:marker:text-yellow-400 [&>li]:marker:text-2xl'>
              <li>
                <h3 className='text-blue-900 font-bold text-xl'>SUMMER SCHOOL</h3>
                <p className='text-blue-900 font-semibold'>13-17 JULY</p>
              </li>

              <li>
                <h3 className='text-blue-900 font-bold text-xl'>CONFERENCE</h3>
                <p className='text-blue-900 font-semibold'>22-23 & 26-29 JULY</p>
              </li>

              <li>
                <h3 className='text-blue-900 font-bold text-xl'>WORKSHOP</h3>
                <p className='text-blue-900 font-semibold'>18-19 & 24-25 JULY</p>
              </li>
            </ul>
          </motion.div>

        </motion.div>
      </div>

      <div className='absolute bottom-0 right-0 left-0 w-full mt-16'>
        <Image src={STRIP} className='w-full h-[5em] object-cover' alt='strip'/>
        <Image src={LOGOO} className='w-full h-[5em] object-cover' alt='logoo'/>
      </div>
      
    </section>
  )
}

export default Hero