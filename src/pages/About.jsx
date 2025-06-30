import React, { useRef } from 'react'
import hero2 from '../assets/images/lisbonsky.png';
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
        className="relative w-full flex items-center justify-center bg-blue-900/80 bg-blend-overlay h-[70dvh] -z-10"
        style={{
          backgroundImage: `url(${hero2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label="Hero Section"
      >
        <motion.div variants={itemVariants} className="relative z-10 text-center w-full py-20 mt-20">
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
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-xl text-neutral-600 leading-relaxed">
              During the past forty years, there has been extensive, continuous, and growing interaction between logic and computer science. In many respects, logic provides computer science with a unifying foundational framework and modeling tools.
            </p>
            <p className="text-xl text-neutral-600 leading-relaxed">
              In fact, logic has been called "the calculus of computer science," playing a crucial role in diverse areas such as artificial intelligence, computational complexity, distributed computing, database systems, hardware design, programming languages, and software engineering.
            </p>

            <p className="text-xl text-neutral-600 leading-relaxed">
              The Federated Logic Conference (FLoC) unites the ten leading
              international conferences focused on mathematical logic and its
              applications in computer science.
            </p>

            <p className="text-xl text-neutral-600 leading-relaxed">
              Since 1996, FLoC is organized every four years and counts with
              over 2,000 attendees.
            </p>

            <p className="text-xl text-neutral-600 leading-relaxed">
              Looking ahead, FLoC is set to take place in Portugal in 2026,
              highlighting the nation’s growing role as a hub for academic and
              technological excellence in computer science and logic research.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
