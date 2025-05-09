'use client';
import React, { useRef } from 'react';
import hero2 from '@/assets/images/hero2.avif';
import { motion } from 'framer-motion';

const About = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen -z-10">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full h-[60vh] flex items-center justify-center -z-10"
        style={{
          backgroundImage: `url(${hero2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Hero Section"
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div variants={itemVariants} className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About <br/>FLoC 2026</h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto px-4">
            Advancing the intersection of logic and computer science
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 py-16 md:py-24"
        aria-label="Main Content"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
              Bridging Logic and <span className='text-blue-700'>Computer Science</span>
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              During the past forty years, there has been extensive, continuous, and growing interaction between logic and computer science. In many respects, logic provides computer science with a unifying foundational framework and modeling tools.
            </p>
            <p className="text-xl text-neutral-600 leading-relaxed">
              In fact, logic has been called "the calculus of computer science," playing a crucial role in diverse areas such as artificial intelligence, computational complexity, distributed computing, database systems, hardware design, programming languages, and software engineering.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-neutral-100 p-8 rounded-2xl shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Innovation</h3>
                  <p className="text-neutral-600">Pushing the boundaries of computational logic</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Research</h3>
                  <p className="text-neutral-600">Advancing theoretical and practical applications</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">Community</h3>
                  <p className="text-neutral-600">Building a global network of researchers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
