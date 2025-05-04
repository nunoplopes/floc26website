'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const CommitteeMember = ({ member }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg border border-[#3a3a3a] hover:border-[#4a4a4a] transition-colors duration-300"
    >
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/80" />
        <img
          src={member.image.src}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
        <p className="text-[#00a0e9] font-medium mb-1">{member.role}</p>
        <p className="text-gray-400 mb-3">{member.institution}</p>
        <p className="text-gray-300 line-clamp-2">{member.description}</p>
      </div>
    </motion.div>
  )
}

const CommitteeSection = ({ title, members }) => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <CommitteeMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default function CommitteePage() {
  // Example committee data - replace with actual data
  const steeringCommittee = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      role: "Chair",
      institution: "University of Lisbon",
      image: "/images/committee/member1.jpg",
      description: "Leading expert in computational logic and formal methods.",
    },
    // Add more members
  ]

  const programCommittee = [
    {
      id: 1,
      name: "Prof. John Doe",
      role: "Program Chair",
      institution: "Technical University of Lisbon",
      image: "/images/committee/member2.jpg",
      description: "Pioneer in automated theorem proving and program verification.",
    },
    // Add more members
  ]

  const organizingCommittee = [
    {
      id: 1,
      name: "Dr. Maria Silva",
      role: "Organizing Chair",
      institution: "University of Porto",
      image: "/images/committee/member3.jpg",
      description: "Expert in conference organization and logistics.",
    },
    // Add more members
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Conference Committees</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated team of experts organizing FLoC 2026.
          </p>
        </div>

        <CommitteeSection title="Steering Committee" members={steeringCommittee} />
        <CommitteeSection title="Program Committee" members={programCommittee} />
        <CommitteeSection title="Organizing Committee" members={organizingCommittee} />
      </div>
    </div>
  )
} 