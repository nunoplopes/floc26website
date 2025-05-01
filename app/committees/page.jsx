'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiUsers, FiAward, FiStar } from 'react-icons/fi'
import { organizers, conferenceChairs, programChairs, steeringCommittee } from './data'

export default function Committees() {
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

  const CommitteeSection = ({ title, members, icon: Icon }) => (
   <section className=''>
      {/* sceton title */}
      <div className='text-center bg-red w-full'>
        <h2>committee</h2>
      </div>
   </section>
  )
} 