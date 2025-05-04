'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Speakers from '@/components/Speakers'
import hero2 from '@/assets/images/hero.jpg'

 const SpeakerCard = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
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
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='relative w-full h-[60vh] flex items-center justify-center'
        style={{
          backgroundImage: `url(${hero2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: "overlay"
        }}
      >
        {/* section title */}
        <div className='text-center text-neutral-50 text-2xl md:text-4xl font-bold'>
          <h2>Speakers</h2>
        </div>
    </motion.section>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-gray-200 transition-colors duration-300"
        >
          <Speakers/>
      </motion.div>
    </>
  )
} 

export default SpeakerCard