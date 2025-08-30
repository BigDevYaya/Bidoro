import { Mail } from 'lucide-react'
import React, { useState } from 'react'
import image from '/images/image collage effect 1.png'

const Newsletter = () => {
    const [email, setEmail] = useState('')
  return (
    <section className='bg-secondary-yellow mt-4 h-72 flex items-center justify-between px-10' id='contact'>
        <div className='flex flex-col items-center justify-center w-full lg:flex-1 lg:items-start gap-4'>
            <h1 className='text-2xl'>Join our news letter</h1>
            <p className='text-gray-elements max-w-sm'>Stay updated with new deals, tips, and trusted sellers delivered straight to you inbox</p>
            <div className='flex flex-col md:flex-row items-center gap-3'>
                <div className='display flex items-center gap-3 p-3 w-72 border border-light rounded-xl bg-white'>
                    <Mail />
                    <input 
                    type="text" 
                    className='flex-1 focus:outline-0 placeholder:text-sm'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email" 
                    id="" />
                </div>
                <button className='bg-green px-5 py-3 text-white font-medium rounded-lg'>
                    Subscribe
                </button>
            </div>
        </div>
        <img src={image} alt="" className='h-full hidden lg:inline' />
    </section>
  )
}

export default Newsletter