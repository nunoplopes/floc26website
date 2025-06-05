import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { committeeData } from '../src/components/event data/data'
import MONUMENT from '../src/assets/images/monument.jpg'


const MemberImage = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const imageSource = member.image;

  if (!imageSource || imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200">
        <svg className="w-14 h-14 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <img
        src={imageSource}
        alt={member.name}
        fill="true"
        sizes="(max-width: 768px) 112px, 112px"
        className="object-cover"
        priority="true"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

// Animation variants for sections/titles
const sectionVariant = {
  hidden: { opacity: 0, y: 30 }, // Slide up
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const heroTitleVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const heroParagraphVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } }
};

const Committe = () => {
  // Refs and inView hooks for section titles
  const organizersTitleRef = useRef(null);
  const organizersTitleInView = useInView(organizersTitleRef, { once: true, amount: 0.3 });

  const confTitleRef = useRef(null);
  const confTitleInView = useInView(confTitleRef, { once: true, amount: 0.3 });

  const progTitleRef = useRef(null);
  const progTitleInView = useInView(progTitleRef, { once: true, amount: 0.3 });

  const steerTitleRef = useRef(null);
  const steerTitleInView = useInView(steerTitleRef, { once: true, amount: 0.3 });

  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="w-full h-[80dvh] py-32 relative flex flex-col items-center justify-center" // Added flex for centering text block
        style={{
          backgroundImage: `url(${MONUMENT})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'rgba(0, 0, 100, 0.65)', // Slightly darker blue overlay
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center">
            <motion.h1
              variants={heroTitleVariant}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              FLoC 2026 Committees
            </motion.h1>
            <motion.p
              variants={heroParagraphVariant}
              initial="hidden"
              animate="visible"
              className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
            >
              Meet the dedicated team of researchers and organizers behind FLoC 2026,
              working together to create an exceptional conference experience.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen w-full">
        <div className="w-full">

          {/* Organizers Section */}
          <section className='my-5 py-7 overflow-hidden'> {/* Added overflow-hidden for safety with x-axis animations if used */}
            <motion.h2
              ref={organizersTitleRef}
              variants={sectionVariant}
              initial="hidden"
              animate={organizersTitleInView ? "visible" : "hidden"}
              className=" text-3xl font-bold text-blue-900 mb-8 text-center" // Increased mb
            >
              FLoC&apos;26 Organizers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4"> {/* Added gap-x */}
              {committeeData.organizers.map((member, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }} // Increased slide-in distance
                  whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                  viewport={{ once: true, amount: 0.2 }} // Adjust amount as needed
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  key={`${member.name}-${index}-org`}
                  className="w-full max-w-md" // Added max-width for better responsiveness in grid
                >
                  <div className='flex items-center py-5 px-3 gap-4 bg-white shadow-lg rounded-lg'> {/* Card styling */}
                    <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md'>
                      <MemberImage member={member} />
                    </div>
                    <div className='space-y-1 flex-grow'>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-600">
                        <a href={member.webpage} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {member.name}
                        </a>
                      </h3>
                      <p className="text-amber-600 text-sm sm:text-base font-medium">{member.affiliation}</p>
                      <p className="text-neutral-500 font-normal text-xs sm:text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Conference Committees Section */}
          <section className='bg-blue-900 w-full py-10 overflow-hidden'>
            <motion.h2
              ref={confTitleRef}
              variants={sectionVariant}
              initial="hidden"
              animate={confTitleInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl font-bold mb-10 text-center text-neutral-50"
            >
              Conference Committees
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4 w-full">
              {committeeData.conferenceCommittees.map((member, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -50 }} // Slide from left
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  key={`${member.name}-${index}-conf`}
                  className='w-full max-w-md'
                >
                  <div className='flex items-center p-5 gap-4 bg-blue-800 shadow-lg rounded-lg'> {/* Card styling */}
                    <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md'>
                      <MemberImage member={member} />
                    </div>
                    <div className='space-y-1 flex-grow'>
                      <a href={member.webpage} target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-bold text-2xl">
                            {member.name}
                      </a>
                      <p className="text-neutral-200 text-sm sm:text-base">{member.affiliation}</p>
                      <p className="text-neutral-400 font-normal text-xs sm:text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Program Committees Section */}
          <section className='bg-yellow-500 py-10 overflow-hidden'>
            <motion.h2
              ref={progTitleRef}
              variants={sectionVariant}
              initial="hidden"
              animate={progTitleInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl text-center font-bold text-blue-900 py-5 mb-5" // Adjusted mb
            >
              Program Committees
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4 w-full">
              {committeeData.programCommittees.map((member, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Slide from right
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  key={`${member.name}-${index}-prog`}
                  className='w-full max-w-md'
                >
                  <div className='flex items-center p-5 gap-4 bg-yellow-400 shadow-lg rounded-lg'> {/* Card styling */}
                    <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-blue-900
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md'>
                      <MemberImage member={member} />
                    </div>
                    <div className='space-y-1 flex-grow'>
                      <p className="text-blue-800 font-bold text-xs sm:text-sm">{member.role}</p>
                      <a href={member.webpage} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-900 font-bold text-lg">
                            {member.name}
                      </a>
                      <p className="text-blue-900/80 text-sm sm:text-base">{member.affiliation}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Steering Committee Section */}
          <section className='py-10 bg-blue-900 overflow-hidden'> {/* Added py-10 */}
            <motion.h2
              ref={steerTitleRef}
              variants={sectionVariant}
              initial="hidden"
              animate={steerTitleInView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl text-center font-bold text-neutral-50 mb-10 py-5" // Added mb-10
            >
              FLoC&apos;26 Steering Committee
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center gap-y-5 gap-x-4 w-full">
              {committeeData.steeringCommittee.map((member, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }} // Slide from bottom
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  key={`${member.name}-${index}-steer`}
                  className='w-full max-w-md'
                >
                  <div className='flex items-center p-5 gap-4 bg-blue-800 shadow-lg rounded-lg'> {/* Card styling */}
                    <div className='flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-amber-400 
                                    rounded-tl-[3rem] rounded-br-[3rem] 
                                    rounded-tr-lg rounded-bl-lg 
                                    overflow-hidden shadow-md'>
                      <MemberImage member={member} />
                    </div>
                    <div className='space-y-1 flex-grow'>
                      <a href={member.webpage} target="_blank" rel="noopener noreferrer" className="hover:underline text-neutral-50 font-bold text-lg">
                            {member.name}
                      </a>
                      <p className="text-neutral-200 text-sm sm:text-base">{member.affiliation}</p>
                      <p className="text-neutral-400 font-normal text-xs sm:text-sm">{member.role}</p>
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

export default Committe