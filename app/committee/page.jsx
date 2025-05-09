'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {committeeData } from './data'
import CommitteeMemberCard from '@/components/CommitteMemberCard'
import HERO2 from '@/assets/images/hero.jpg'

export default function Committee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className="w-full h-[60vh] py-32 relative"
        style={{
          backgroundImage: `url(${HERO2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-neutral-800">
                    FLoC&apos;26 Committees
                </h1>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-700 mb-4">FLoC&apos;26 Organizers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {committeeData.organizers.map((member, index) => (
                            <CommitteeMemberCard key={index} member={member.name} image={member.image} affiliation={member.affiliation} role={member.role} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">Conference Committees</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {committeeData.conferenceCommittees.map((member, index) => (
                            <CommitteeMemberCard key={index} member={member.name} image={member.image} affiliation={member.affiliation} role={member.role} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">Program Committees</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {committeeData.programCommittees.map((member, index) => (
                            <CommitteeMemberCard key={index} member={member.name} image={member.image} affiliation={member.affiliation} role={member.role} />
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">FLoC&apos;26 Steering Committee</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {committeeData.steeringCommittee.map((member, index) => (
                            <CommitteeMemberCard key={index} member={member.name} image={member.image} affiliation={member.affiliation} role={member.role} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
} 