import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const CommitteMemberCard = ({ member, image, affiliation, role }) => {
  return (
    <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300"
        >
            <div className="flex flex-col items-center gap-4">
                <div>
                    <Image src={image} className=' rounded-full' alt={member} /> {/* Image Placeholder */}
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-700">{member}</h3>
                    <p className="text-gray-600 text-sm">{affiliation}</p>
                    <p className="text-blue-500 font-medium text-sm">{role}</p>
                </div>
            </div>
        </motion.div>
  )
}

export default CommitteMemberCard