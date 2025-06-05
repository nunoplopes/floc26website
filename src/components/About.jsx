import React from 'react'
import {motion } from 'framer-motion'
import LISBON from '../assets/images/lisbonsky.png'
import STRIP from '../assets/images/logostrip.png'

const About = () => {
  return (
    <section className='w-full relative pb-20 pt-10 '>
        {/* secton title */}
        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='w-full text-center text-4xl font-bold text-blue-900'>
          <h2>About FloC</h2>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-10'>
          {/* first col */}
          <div className='flex flex-col items-center justify-center text-left px-4 text-xl mt-5 space-y-2 text-neutral-500'>
            <p>Over the past forty years, there has been extensive, continuous, and growing interaction between logic and computer science. In many ways, logic provides computer science with both a unifying foundational framework and a powerful tool for modeling.</p>
            <p>Logic is considered "the calculus of computer science," playing a pivotal role in diverse fields such as artificial intelligence, computational complexity, distributed computing, database systems, hardware design, programming languages, and software engineering.</p>
          </div>

          {/* second col */}
          <div className='px-2 mt-3'>
              <img 
                src={LISBON}
                alt='lisbon sky'
                width={600}
                height={400}
                className="w-full h-auto"
              />
          </div>
        </motion.div>

        <div className='absolute bottom-0 right-0 left-0 w-full'>
        <img src={STRIP} className='w-full object-cover' alt='strip'/>
      </div>
    </section>
  )
}

export default About