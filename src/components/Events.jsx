import React from 'react'
import { motion } from 'framer-motion'
import {schedule} from './event data/event'

const Events = () => {
  return (
    <motion.div
        className="bg-blue-900 text-white py-10 px-4 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">PROGRAMME</h1>
            <p className="text-lg text-center text-blue-300 mb-10">July<sup>26</sup></p>
            <div className="relative border-l-4 border-dotted border-blue-200 ml-6 md:ml-16">
                {schedule.map((item, index) => (
                <motion.div
                    key={index}
                    className="mb-10 pl-6 relative flex flex-col md:flex-row md:items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <div className="absolute left-[-0.6rem] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-blue-500"></div>
                    <div className="w-full md:w-1/4 text-2xl font-bold text-white">
                    {item.date}
                    {item.endDate && ` - ${item.endDate}`}
                    </div>
                    <div className="w-full md:w-3/4">
                    <div className={`font-semibold text-xl mb-2 ${item.color || 'text-white'}`}>{item.title}</div>
                    {item.conferences && (
                        <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-blue-100">
                        {item.conferences.map((conf, idx) => (
                            <li key={idx}>{conf}</li>
                        ))}
                        </ul>
                    )}
                    </div>
                </motion.div>
                ))}
            </div>
        </motion.div>
  )
}

export default Events