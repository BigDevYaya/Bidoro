import React from 'react'
import image from '/images/Image.png'

const TestimonialCard = () => {
  return (
    <div className='border rounded-xl px-2 py-3 gap-4 border-light shadow-xl flex items-start flex-col max-w-96'>
        <p className='text-[0.9rem]'>"I love how easy it is to set my budget and get multiple offers. The escrow payment system gives me peace of mind, and I’ve discovered amazing deals from sellers near me."</p>
        <div className='flex items-center gap-2'>
            <figure>
                <img src={image} alt='pic' />
            </figure>
            <div className='flex flex-col text-[12px] text-gray-elements'>
                <h4 className='text-black text-lg'>Amaka Okafor</h4>
                Customer
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard