'use client'
import React, { useRef } from 'react'
import { eventData } from '@/components/event data/event'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiArrowRight } from 'react-icons/fi'

const Events = () => {
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
        <motion.section 
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className='py-10 bg-white'
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <motion.div variants={itemVariants} className='text-center mb-12'>
                    <h2 className="text-4xl font-bold text-neutral-800 mb-4">FLoC'26 <span className='text-blue-700'>Conferences</span></h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        Join us for a series of prestigious conferences bringing together researchers and practitioners in logic and computation.
                    </p>
                </motion.div>

                {/* Week 1 Section */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">Week 1 (July 22-26)</h3>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-neutral-50">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Conference</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Week</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200">
                                    {eventData.week1.map((conference, index) => (
                                        <motion.tr 
                                            key={index}
                                            variants={itemVariants}
                                            className="hover:bg-neutral-50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-3">
                                                    <FiCalendar className="text-blue-500" />
                                                    <span className="text-neutral-900">{conference}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                    Week 1
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                {/* Week 2 Section */}
                <motion.div variants={itemVariants} className="mb-12">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">Week 2 (July 29-30)</h3>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-neutral-50">
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Conference</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-600">Week</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200">
                                    {eventData.week2.map((conference, index) => (
                                        <motion.tr 
                                            key={index}
                                            variants={itemVariants}
                                            className="hover:bg-neutral-50 transition-colors duration-200"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-3">
                                                    <FiCalendar className="text-blue-500" />
                                                    <span className="text-neutral-900">{conference}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                    Week 2
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-12 text-center"
                >
                    <a
                        href="#"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
                    >
                        <span>View Full Schedule</span>
                        <FiArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Events