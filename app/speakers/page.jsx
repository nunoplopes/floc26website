'use client'
import React, { memo, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { keyNoteSpeakers } from '@/components/event data/speakers'

const SpeakerCard = memo(({ speaker }) => {
  const handleClick = useCallback(() => {
    // Analytics or tracking can be added here
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-gray-200 transition-colors duration-300"
    >
      <Link href={`/speakers/${speaker.id}`} onClick={handleClick}>
        <div className="relative h-64 w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
          <Image
            src={speaker.image.src}
            alt={speaker.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{speaker.name}</h3>
          <p className="text-blue-600 font-medium mb-1">{speaker.position}</p>
          <p className="text-gray-600 line-clamp-3">{speaker.description}</p>
        </div>
      </Link>
    </motion.div>
  )
})

SpeakerCard.displayName = 'SpeakerCard'

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Keynote Speakers</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our distinguished speakers who will share their insights and expertise at FLoC 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyNoteSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  )
} 