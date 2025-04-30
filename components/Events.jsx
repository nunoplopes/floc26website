'use client'
import React, { useState } from 'react'
import { eventData } from '@/components/event data/event'

const Events = () => {
    const [activeTab, setActiveTab] = useState('week1')

  return (
    <section className=' font-bold'>
        {/* section title */}
        <div className='text-center text-red-600 text-3xl mt-10'>
            <h2> UpComing Event</h2>
        </div>

        <div className=' flex items-center justify-center text-center mt-10'>
            <ul className='flex items-center justify-center rounded-full border border-neutral-400'>
                <li onClick={() => setActiveTab('week1')} className={`py-2 px-7 rounded-l-full ${activeTab === 'week1' ? 'bg-red-700 text-neutral-50' : 'text-gray-700 hover:bg-gray-200'} font-semibold`}>Week 1</li>
                <li onClick={() => setActiveTab('week2')} className={`py-2 px-7 rounded-r-full ${activeTab === 'week2' ? 'bg-red-700 text-neutral-50' : 'text-gray-700 hover:bg-gray-200'} font-semibold`}> week 2</li>
            </ul>
        </div>

        {/* data result */}
        <div className="mt-4">
            {activeTab === 'week1' && (
            <ul>
            {eventData.week1.map((conference, index) => (
                <li key={index} className="py-2">{conference}</li>
            ))}
            </ul>
            )}
            {activeTab === 'week2' && (
            <ul>
            {eventData.week2.map((conference, index) => (
                <li key={index} className="py-2">{conference}</li>
            ))}
            </ul>
            )}
        </div>

    </section>
  )
}

export default Events