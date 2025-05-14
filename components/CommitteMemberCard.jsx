import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CommitteMemberCard = ({ member, image, affiliation, role }) => {
  const isExternalImage = typeof image === 'string' && image.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className=""
    >
      <div className="flex items-center space-x-4 sm:space-x-6">
        <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                      rounded-tl-[3rem] rounded-br-[3rem] 
                      rounded-tr-lg rounded-bl-lg 
                      overflow-hidden shadow-md'>
          {isExternalImage ? (
            <Image
              src={image}
              alt={member}
              width={112} // Intrinsic width of image asset (can be larger than display)
              height={112} // Intrinsic height of image asset
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={image}
              alt={member}
              width={200} // Set appropriate width
              height={200} // Set appropriate height
              className=""
            />
          )}
        </div>
        <div className='space-y-1'>
          <h3 className="text-2xl sm:text-xl font-bold text-blue-700">{member}</h3>
          <p className="text-neutral-600 text-xl">{affiliation}</p>
          <p className="text-blue-500 font-medium text-xl">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default CommitteMemberCard