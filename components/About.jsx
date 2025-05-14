import React from 'react'
import LISBON from '@/assets/images/lisbonsky.png'
import Image from 'next/image'

const About = () => {
  return (
    <section className='w-full bg-neutral-50 pb-20'>
        {/*  */}
        <div className='w-full text-center text-4xl font-bold text-blue-700 pt-10'>
          <h2>About FloC</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {/* first col */}
          <div className='flex flex-col items-center justify-center text-left px-4 text-xl mt-5 space-y-2 text-neutral-500'>
            <p>Over the past forty years, there has been extensive, continuous,
            and growing interaction between logic and computer science. In
            many ways, logic provides computer science with both a unifying
            foundational framework and a powerful tool for modeling.
            </p>

            <p>Logic is considered “the calculus of computer science,” playing a
              pivotal role in diverse fields such as artificial intelligence,
              computational complexity, distributed computing, database
              systems, hardware design, programming languages, and software
              engineering.
            </p>
          </div>

          {/* second col */}
          <div className='px-2 mt-3'>
            <Image src={LISBON} alt='lisbon' />
          </div>
        </div>
    </section>
  )
}

export default About