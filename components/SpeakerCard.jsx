'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const SpeakerCard = ({name, image, position}) => {
 
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="shadow-md rounded-lg overflow-hidden w-full max-w-[300px] mx-auto"
    >
      <div className="flex flex-col">
        {/* image card */}
        <div className="relative w-full aspect-square">
          <Image 
            src={image} 
            alt={name}
            fill
            className='object-cover'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        {/* description */}
        <div className="p-3 sm:p-4">
          <h2 className='text-xl sm:text-2xl text-neutral-800 font-semibold mb-1 text-center'>{name}</h2>
          <p className='text-sm sm:text-base text-neutral-800 text-center'>{position}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default SpeakerCard