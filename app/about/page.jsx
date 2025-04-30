import React from 'react'
import hero2 from '@/assets/images/hero2.avif'

const about = () => {
  return (
    <>
    <section
        className='w-full h-70'
        style={{
        backgroundImage: `url(${hero2.src})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
        {/* secton title */}
        <div className='text-center text-neutral-50 font-bold text-3xl pt-30'>
            <p>About</p>
        </div>

    </section>
    <section className='w-full flex flex-col items-center justify-center mt-10 sm:px-2 space-y-3 text-neutral-700'>
        <p>During the past forty years, there has been extensive, continuous, and growing interaction between logic and computer science. In many respects, logic provides computer science with a unifying foundational framework and modeling tools.</p>
        <p>In fact, logic has been called “the calculus of computer science,” playing a crucial role in diverse areas such as artificial intelligence, computational complexity, distributed computing, database systems, hardware design, programming languages, and software engineering.</p>
    </section>
    </>
  )
}

export default about