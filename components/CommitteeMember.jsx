import React from 'react'
import Image from 'next/image'

const CommitteeMember = ({ name, role, affiliation, link }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden bg-neutral-200">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-4xl font-bold">
          {name.charAt(0)}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{name}</h3>
      <p className="text-sm text-neutral-600 mb-2">{role}</p>
      {affiliation && (
        <p className="text-sm text-neutral-500 mb-3 text-center">{affiliation}</p>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 text-sm transition-colors duration-300"
      >
        View Profile →
      </a>
    </div>
  )
}

export default CommitteeMember 