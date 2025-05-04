'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { keyNoteSpeakers } from '@/components/event data/speakers'

export default function SpeakerBio() {
  const params = useParams()
  const speaker = keyNoteSpeakers.find(s => s.id === parseInt(params.id))

  if (!speaker) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Speaker Not Found</h1>
            <Link href="/speakers" className="text-[#00a0e9] hover:text-[#00a0e9]/80">
              Return to Speakers
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/speakers" className="inline-block mb-8 text-[#00a0e9] hover:text-[#00a0e9]/80">
          ← Back to Speakers
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg border border-[#3a3a3a]"
        >
          <div className="relative h-96 w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/80" />
            <img
              src={speaker.image.src}
              alt={speaker.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-2">{speaker.name}</h1>
            <p className="text-[#00a0e9] text-xl font-medium mb-1">{speaker.position}</p>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 whitespace-pre-line mb-8">{speaker.description}</p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
              <div className="text-gray-300">
                <a href={speaker.link} className="text-[#00a0e9] hover:text-[#00a0e9]/80" target="_blank" rel="noopener noreferrer">
                  {speaker.link}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 