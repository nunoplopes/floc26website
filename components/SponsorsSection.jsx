'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {sponsors} from '@/components/event data/sponsors'

const SponsorsSection = () => {
    return (
        <section className="py-16 bg-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-blue-50 mb-4">Our Sponsors</h2>
                </motion.div>

                {/* Diamond Sponsors */}
                <div>
                    {/* sponsors title */}
                    <div className="mb-8">
                        <h2 className='text-center font-bold text-blue-200 text-2xl'>Diamond Sponsors</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {sponsors.map((sponsor, id) => (
                            <motion.div 
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="relative p-6 flex items-center justify-center transition-all duration-300 hover:shadow-xl">
                                    <Image 
                                        src={sponsor.image} 
                                        width={400}
                                        height={250}
                                        className='object-contain max-h-40 w-auto hover:grayscale-0 transition-all duration-300' 
                                        alt={sponsor.name}
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SponsorsSection