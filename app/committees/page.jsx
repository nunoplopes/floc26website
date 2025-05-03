'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiUsers, FiAward, FiStar } from 'react-icons/fi'
import { organizers, conferenceChairs, programChairs, steeringCommittee } from './data'
import HERO2 from '@/assets/images/hero.jpg'

export default function Committees() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section 
        className="w-full py-32 relative"
        style={{
          backgroundImage: `url(${HERO2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              FLoC 2026 Committees
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated team of researchers and organizers behind FLoC 2026, 
              working together to create an exceptional conference experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {/* Organizers Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/10 p-3 rounded-xl">
                <FiUsers className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">FLoC'26 Organizers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-all duration-300 border border-neutral-200"
                >
                  <h3 className="font-semibold text-neutral-900 mb-4 text-lg">{member.role}</h3>
                  <div className="space-y-3">
                    {member.people.map((person, idx) => (
                      <div key={idx} className="text-neutral-700 group">
                        <a 
                          href={person.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors duration-300 inline-flex items-center gap-2"
                        >
                          {person.name}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                        </a>
                        {person.affiliation && (
                          <span className="text-neutral-500 text-sm block mt-1">
                            {person.affiliation}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Committees Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/10 p-3 rounded-xl">
                <FiAward className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">Conference Committees</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conferenceChairs.map((member, index) => (
                <div 
                  key={index}
                  className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-all duration-300 border border-neutral-200"
                >
                  <h3 className="font-semibold text-neutral-900 mb-4 text-lg">{member.role}</h3>
                  <div className="space-y-3">
                    {member.people.map((person, idx) => (
                      <div key={idx} className="text-neutral-700 group">
                        <a 
                          href={person.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors duration-300 inline-flex items-center gap-2"
                        >
                          {person.name}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                        </a>
                        {person.affiliation && (
                          <span className="text-neutral-500 text-sm block mt-1">
                            {person.affiliation}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Committees Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/10 p-3 rounded-xl">
                <FiStar className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">Program Committees</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programChairs.map((member, index) => (
                <div 
                  key={index}
                  className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-all duration-300 border border-neutral-200"
                >
                  <h3 className="font-semibold text-neutral-900 mb-4 text-lg">{member.role}</h3>
                  <div className="space-y-3">
                    {member.people.map((person, idx) => (
                      <div key={idx} className="text-neutral-700 group">
                        <a 
                          href={person.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors duration-300 inline-flex items-center gap-2"
                        >
                          {person.name}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                        </a>
                        {person.affiliation && (
                          <span className="text-neutral-500 text-sm block mt-1">
                            {person.affiliation}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steering Committee Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-neutral-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-500/10 p-3 rounded-xl">
                <FiUsers className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">FLoC'26 Steering Committee</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steeringCommittee.map((member, index) => (
                <div 
                  key={index}
                  className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-all duration-300 border border-neutral-200"
                >
                  <h3 className="font-semibold text-neutral-900 mb-4 text-lg">{member.role}</h3>
                  <div className="space-y-3">
                    {member.people.map((person, idx) => (
                      <div key={idx} className="text-neutral-700 group">
                        <a 
                          href={person.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-red-500 transition-colors duration-300 inline-flex items-center gap-2"
                        >
                          {person.name}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                        </a>
                        {person.affiliation && (
                          <span className="text-neutral-500 text-sm block mt-1">
                            {person.affiliation}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24 text-center bg-white rounded-2xl shadow-lg p-12 border border-neutral-200">
          <div className="flex justify-center mb-6">
            <div className="bg-red-500/10 p-4 rounded-xl">
              <FiMail className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Contact Us</h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Have questions about the committees or need more information? 
            Feel free to reach out to us.
          </p>
          <a
            href="mailto:webmaster@floc26.org"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors duration-300 text-lg font-medium group"
          >
            webmaster@floc26.org
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </a>
        </div>
      </section>
    </div>
  )
} 