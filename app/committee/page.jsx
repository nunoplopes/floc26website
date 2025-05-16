'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {committeeData } from './data'
import HERO2 from '@/assets/images/lisbontram.jpg'
import Image from 'next/image'

export default function Committee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isExternalImage = typeof Image === 'string' && Image.startsWith('http');

  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className="w-full h-[70vh] py-32 relative"
        style={{
          backgroundImage: `url(${HERO2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 0, 150, 0.6)',
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
      <div className="min-h-screen w-full">
            <div className="w-full">

                <section className='my-5 py-7'>
                    <h2 className=" text-3xl font-bold text-blue-900 mb-4 text-center">FLoC&apos;26 Organizers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-3">
                        {committeeData.organizers.map((member, index) => (
                            <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            key={index}>
                              <div className='flex items-center justify-center py-7 gap-3'>
                                <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                  rounded-tl-[3rem] rounded-br-[3rem] 
                                  rounded-tr-lg rounded-bl-lg 
                                  overflow-hidden shadow-md'>
                                    {isExternalImage ? (
                                      <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={112} // Intrinsic width of image asset (can be larger than display)
                                        height={112} // Intrinsic height of image asset
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={200} // Set appropriate width
                                        height={200} // Set appropriate height
                                        className=""
                                      />
                                    )}
                                  </div>
  
                                  <div className='space-y-1'>
                                    <h3 className="text-2xl sm:text-xl font-bold text-blue-500">{member.name}</h3>
                                    <p className="text-yellow-500 text-xl">{member.affiliation}</p>
                                    <p className="text-neutral-400 font-normal text-sm">{member.role}</p>
                                  </div>
                              </div>
  
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className='bg-blue-900 w-full py-10'>
                    <h2 className="text-4xl font-bold mb-10 text-center text-neutral-50">Conference Committees</h2>
                    <div className="grid drid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-3 w-full">
                        {committeeData.conferenceCommittees.map((member, index) => (
                            <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            className='bg-blue-900 w-full flex items-center justify-center'
                            >
                              <div className='flex items-center justify-center p-5 gap-3'>
                                <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                  rounded-tl-[3rem] rounded-br-[3rem] 
                                  rounded-tr-lg rounded-bl-lg 
                                  overflow-hidden shadow-md'>
                                    {isExternalImage ? (
                                      <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={112} // Intrinsic width of image asset (can be larger than display)
                                        height={112} // Intrinsic height of image asset
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={200} // Set appropriate width
                                        height={200} // Set appropriate height
                                        className=""
                                      />
                                    )}
                                  </div>
  
                                  <div className='space-y-1'>
                                    <h3 className="text-2xl sm:text-xl font-bold text-neutral-50">{member.name}</h3>
                                    <p className="text-neutral-50 text-xl">{member.affiliation}</p>
                                    <p className="text-neutral-400 font-normal text-sm">{member.role}</p>
                                  </div>
                              </div>
  
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className='bg-yellow-500'>
                    <h2 className="text-4xl text-center font-bold text-neutral-50 py-5">Program Committees</h2>
                    <div className="grid drid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-3 md:space-x-4 space-x-6">
                        {committeeData.programCommittees.map((member, index) => (
                            <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            className=''
                            >
                              <div className='flex items-center justify-center p-5 gap-3'>
                                <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                  rounded-tl-[3rem] rounded-br-[3rem] 
                                  rounded-tr-lg rounded-bl-lg 
                                  overflow-hidden shadow-md'>
                                    {isExternalImage ? (
                                      <Image
                                        src={member.image}
                                        alt={member}
                                        width={112} // Intrinsic width of image asset (can be larger than display)
                                        height={112} // Intrinsic height of image asset
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <Image
                                        src={member.image.src}
                                        alt={member.name}
                                        width={200} // Set appropriate width
                                        height={200} // Set appropriate height
                                        className=""
                                      />
                                    )}
                                  </div>
  
                                  <div className='space-y-1'>
                                    <p className="text-blue-900  font-bold text-sm">{member.role}</p>
                                    <h3 className="text-3xl font-bold text-neutral-50">{member.name}</h3>
                                    <p className="text-neutral-200 text-xl">{member.affiliation}</p>
                                  </div>
                              </div>
  
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className='py-7 bg-blue-900'>
                    <h2 className=" text-center text-3xl font-bold text-neutral-50 mb-4 py-5">FLoC&apos;26 Steering Committee</h2>
                    <div className="grid drid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-3 md:space-x-4 space-x-6">
                        {committeeData.steeringCommittee.map((member, index) => (
                          <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          key={index}>
                            <div className='flex items-center justify-center p-5 gap-3'>
                              <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                rounded-tl-[3rem] rounded-br-[3rem] 
                                rounded-tr-lg rounded-bl-lg 
                                overflow-hidden shadow-md'>
                                    {isExternalImage ? (
                                      <Image
                                        src={member.image}
                                        alt={member}
                                        width={112} // Intrinsic width of image asset (can be larger than display)
                                        height={112} // Intrinsic height of image asset
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={200} // Set appropriate width
                                        height={200} // Set appropriate height
                                        className=""
                                      />
                                    )}
                                </div>

                                <div className='space-y-2'>
                                  <h3 className="text-2xl sm:text-xl font-bold text-neutral-50">{member.name}</h3>
                                  <p className="text-neutral-50 text-xl">{member.affiliation}</p>
                                  <p className="text-neutral-300 font-normal text-sm">{member.role}</p>
                                </div>
                            </div>

                          </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
} 