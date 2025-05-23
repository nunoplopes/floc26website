'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Workshops = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-blue-900 mb-4"
          >
            Workshops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            July 18-19 & 24-25, 2026
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Workshop Schedule Coming Soon</h2>
          <p className="text-gray-600 mb-8">The detailed workshop schedule is currently being finalized. Please check back later for updates.</p>
          <Link 
            href="/program"
            className="inline-block px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            Back to Program Overview
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Workshops 