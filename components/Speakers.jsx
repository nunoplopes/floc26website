'use client'
import React from 'react'
import { keyNoteSpeakers } from '@/components/event data/event'
import SpeakerCard from './SpeakerCard'

const Speakers = () => {
  return (
    <section className='pb-[5rem]'>
        {/* Our Speakers */}
        <div className='text-center mt-10'>
            <p>Our Keynote</p>
            <h2 className='text-neutral-800 font-bold text-3xl'>Speakers</h2>
        </div>

        <div className='flex items-center justify-center mt-7'>
         {keyNoteSpeakers.map((speaker, id) =>(
            <SpeakerCard key={speaker.id} name={speaker.name} image={speaker.image} position={speaker.position}/>
         ))}   
        </div>
    </section>
  )
}

export default Speakers