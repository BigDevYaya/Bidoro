import React from 'react'
import womansha from '/images/womansha.png'
import arrowLeft from '/images/arrowleft.png'
import tailor from '/images/tailor.png'

const Product = () => {
  return (
    <section className='md:my-10 my-5 md:mx-16  flex flex-col gap-7'>
        <div className='flex flex-col md:flex-row items-center  justify-center gap-4  md:mx-10'>
            <figure className='border-[18px] border-primary-green rounded-4xl overflow-hidden'>
                <img src={womansha} 
                className='w-xl border-4 hover:scale-110 transition-all duration-500 ease-in-out border-white rounded-xl'
                alt="" />
            </figure>
            <div className='flex flex-col items-start gap-2'>
                <div className='bg-verylight-green/30 w-fit flex items-center gap-2 px-3 py-1 text-sm rounded-lg border border-green'>
                    <div className='w-2 h-2 rounded-full bg-primary-green'></div>
                    <p>Customers</p>
                </div>
                <h2 className='font-medium text-3xl'>Shop the smarter way</h2>
                <p className='max-w-xl text-gray-elements my-2'>Whether you’re hunting for a bargain, searching for unique finds, or hiring skilled artisans nearby, our platform makes it easy to discover, compare, and shop with complete peace of mind</p>
                <button className='bg-green px-5 py-3 text-white font-medium rounded-lg flex items-center gap-3'>Get started <img src={arrowLeft} alt="goto" /></button>
            </div>
        </div>
        <div className='flex  flex-col md:flex-row-reverse items-center justify-center gap-4  md:mx-10'>
            <figure className='border-[18px] border-primary-green rounded-4xl overflow-hidden'>
                <img src={tailor} 
                className='w-xl border-4 hover:scale-110 transition-all duration-500 ease-in-out border-white rounded-xl'
                alt="" />
            </figure>
            <div className='flex flex-col items-start gap-2'>
                <div className='bg-verylight-green/30 w-fit flex items-center gap-2 px-3 py-1 text-sm rounded-lg border border-green'>
                    <div className='w-2 h-2 rounded-full bg-primary-green'></div>
                    <p>Sellers</p>
                </div>
                <h2 className='font-medium text-3xl'>Sell more with stress less</h2>
                <p className='max-w-xl text-gray-elements my-2'>Post items quickly with photos or video, let AI verify receipts for authenticity, and set up a storefront to showcase your craft. With ratings, and verified profiles, you can build trust, reach more buyers, and grow your earnings</p>
                <button className='bg-green px-5 py-3 text-white font-medium rounded-lg flex items-center gap-3'>Become a seller <img src={arrowLeft} alt="goto" /></button>
            </div>
        </div>
    </section>
  )
}

export default Product