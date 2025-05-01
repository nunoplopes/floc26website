'use client'
import React from 'react'
import { keyNoteSpeakers } from '@/components/event data/speakers'
import SpeakerCard from './SpeakerCard'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
    <section className='pb-[5rem] bg-neutral-50'>
        {/* Our Speakers */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-center pt-10'
        >
            <p>Our Keynote</p>
            <h2 className='text-neutral-800 font-bold text-3xl'>Speakers</h2>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-7 px-4 md:px-8'
        >
         {keyNoteSpeakers.map((speaker, id) =>(
            <motion.div key={speaker.id} variants={itemVariants}>
              <SpeakerCard name={speaker.name} image={speaker.image} position={speaker.position}/>
            </motion.div>
         ))}   
        </motion.div>
    </section>
  )
}

export default Speakers