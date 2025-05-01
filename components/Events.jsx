'use client'
import React, { useState, useRef } from 'react'
import { eventData } from '@/components/event data/event'
import { AnimatePresence, motion, useInView } from 'framer-motion'

const Events = () => {
    const [activeTab, setActiveTab] = useState('week1')
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

    const tabVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

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
            className='font-bold pb-10'
        >
            {/* section title */}
            <motion.div variants={itemVariants} className='text-center text-red-600 text-3xl mt-10'>
                <h2>UpComing Event</h2>
            </motion.div>

            <motion.div variants={itemVariants} className='flex items-center justify-center text-center mt-10'>
                <ul className='flex items-center justify-center rounded-full border border-neutral-400'>
                    <li onClick={() => setActiveTab('week1')} className={`py-2 px-7 rounded-l-full ${activeTab === 'week1' ? 'bg-red-700 text-neutral-50' : 'text-gray-700 hover:bg-gray-200'} font-semibold`}>Week 1</li>
                    <li onClick={() => setActiveTab('week2')} className={`py-2 px-7 rounded-r-full ${activeTab === 'week2' ? 'bg-red-700 text-neutral-50' : 'text-gray-700 hover:bg-gray-200'} font-semibold`}>week 2</li>
                </ul>
            </motion.div>

            {/* data result */}
            <motion.div variants={itemVariants} className="mt-4">
                <AnimatePresence mode='wait'>
                    {activeTab === 'week1' && (
                    <motion.ul
                    key="week1"
                    variants={tabVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className='border mx-2 md:mx-[15rem] rounded-lg'
                    >
                    {eventData.week1.map((conference, index) => (
                        <motion.li 
                            key={index} 
                            variants={itemVariants}
                            className="text-center font-normal border-b py-4"
                        >
                            {conference}
                        </motion.li>
                    ))}
                    </motion.ul>
                    )}
                    {activeTab === 'week2' && (
                    <motion.ul
                    key="week2"
                    variants={tabVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className='border mx-2 md:mx-[15rem] rounded-lg'
                    >
                    {eventData.week2.map((conference, index) => (
                        <motion.li 
                            key={index} 
                            variants={itemVariants}
                            className="text-center font-bold border-b py-4 text-neutral-500"
                        >
                            {conference}
                        </motion.li>
                    ))}
                    </motion.ul>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.section>
    )
}

export default Events