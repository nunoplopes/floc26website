import Image from 'next/image'
import React from 'react'
import LOGO from '@/assets/images/logo-small.png'

const Footer = () => {
  return (
    <footer className='bg-neutral-800 w-full mt-auto'>
        <div className='container mx-auto px-4 py-6'>
            <div className='flex items-center justify-between'>
                {/* logo */}
                <div className='flex items-center'>
                    <Image src={LOGO} alt='logo' width={50} height={50} />
                    <p className='text-neutral-50 ml-5'>FEDERATION LOGIC CONFERENCE</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer