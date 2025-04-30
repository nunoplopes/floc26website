'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import {motion} from 'framer-motion'

const SpeakerCard = ({name, image, position}) => {
 
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className=""
    >
      <Card className="overflow-hidden border-gray-800 shadow-lg">
        <CardHeader>
              <img src={image} alt={name} className="object-cover h-6 w-6" />
        </CardHeader>
        <CardContent>
              <CardTitle className="text-lg font-semibold text-white">{name}</CardTitle>
              <CardDescription className="text-gray-400">{position}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default SpeakerCard