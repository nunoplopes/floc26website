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
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.8, ease: 'easeInOut' },
    },
  }

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className=" w-full h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${hero2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'overlay',
        }}
      >
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="text-center text-neutral-50 text-2xl md:text-4xl font-bold"
        >
          <h2>Speakers</h2>
        </motion.div>
      </motion.section>

      {/* Speakers List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" overflow-hidden shadow-lg transition-colors duration-300"
      >
        <Speakers />
      </motion.div>
    </>
  )
}

export default SpeakerCard