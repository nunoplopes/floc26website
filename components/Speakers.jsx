'use client'
import React from 'react'
import { keyNoteSpeakers } from '@/components/event data/speakers'
import SpeakerCard from './SpeakerCard'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

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
    <>
    <section className='pb-[5rem] bg-blue-950 pt-8'>
        {/* Our Speakers */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-center pt-10'
        >
            <p className="text-blue-400 text-xl font-bold">Our Keynote</p>
            <h2 className='text-neutral-50 font-bold text-3xl md:text-6xl'>Speakers</h2>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-7 px-4 md:px-8 place-items-center'
        >
         {keyNoteSpeakers.map((speaker, id) =>(
            <motion.div key={speaker.id} variants={itemVariants}>
              <Link href={`/speakers/${speaker.id}`}><SpeakerCard name={speaker.name} image={speaker.image} position={speaker.position}/></Link>
            </motion.div>
         ))}   
        </motion.div>
    </section>
  </>
  )
}

export default Speakers