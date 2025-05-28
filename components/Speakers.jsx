'use client'
import React, { useRef } from 'react'
import SpeakerCard from './SpeakerCard'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import STRIP from '@/assets/images/strip.png'
import {keyNoteSpeakers} from '@/components/event data/speakers'
import Image from 'next/image'

const Speakers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  

  return (
    <section className='pb-[5rem] relative bg-white pt-8' ref={ref}>
      {/* Heading */}
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='text-center pt-10'
      >
        <motion.p className="text-blue-500 text-xl font-bold" variants={itemVariants}>Our Keynote</motion.p>
        <motion.h2 className='text-blue-900 font-bold text-3xl md:text-6xl' variants={itemVariants}>Speakers</motion.h2>
      </motion.div>

      {/* Speaker Cards */}
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-7 px-4 md:px-8 place-items-center mb-7'
      >
        {keyNoteSpeakers.map((speaker) => (
          <motion.div key={speaker.id} variants={itemVariants}>
            <Link href={`/speakers/${speaker.name.split(' ')[0].toLowerCase()}`}>
              <SpeakerCard 
                name={speaker.name} 
                image={speaker.image} jokm
                position={speaker.position} 
              />
            </Link>
          </motion.div>
        ))}   
      </motion.div>

      <div className='absolute bottom-0 right-0 left-0 w-full'>
        <Image src={STRIP} className='w-full h-[5em] object-cover' alt='strip'/>
      </div>
    </section>
  )
}

export default Speakers
