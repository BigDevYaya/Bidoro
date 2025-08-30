import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const Faqs = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
  return (
    <section className='flex flex-col gap-4 items-center justify-center md:mx-10 m:5 md:my-7 '>
        <h1 className='text-4xl max-w-md text-center fomt-semibold'>Frequently asked questions (FAQ)</h1>
        <div className='border border-light rounded-lg p-2 mx-5 transition-all duration-500 w-80 md:w-[50rem] ease-in-out'>
            <div 
            className='flex items-center justify-between'
            onClick={() => setOpen1(prev => !prev)}>
                <h3 className='font-medium text-lg max-w-xl'>Who is Bidoro a good fit for?</h3>
                {
                    open1 ? <ChevronUp /> : <ChevronDown />
                }
            </div>
            {
                open1 && (
                    <p className='text-gray-elements '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est illum architecto cupiditate porro ad vitae. Fuga, minus assumenda officia laboriosam ullam sed reiciendis, iusto a quasi expedita illum dolorum?</p>
                )
            }
        </div>
        <div className='border border-light rounded-lg p-2 mx-5 transition-all duration-500 w-80 md:w-[50rem] ease-in-out'>
            <div 
            className='flex items-center justify-between'
            onClick={() => setOpen2(prev => !prev)}>
                <h3 className='font-medium text-lg max-w-xl'>Can I search for sellers or artisans near my location?</h3>
                {
                    open2 ? <ChevronUp /> : <ChevronDown />
                }
            </div>
            {
                open2 && (
                    <p className='text-gray-elements '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est illum architecto cupiditate porro ad vitae. Fuga, minus assumenda officia laboriosam ullam sed reiciendis, iusto a quasi expedita illum dolorum?</p>
                )
            }
        </div>
        <div className='border border-light rounded-lg p-2 mx-5 transition-all duration-500 w-80 md:w-[50rem] ease-in-out'>
            <div 
            className='flex items-center justify-between'
            onClick={() => setOpen3(prev => !prev)}>
                <h3 className='font-medium text-lg max-w-xl'>What do I need to start selling or offering services?</h3>
                {
                    open3 ? <ChevronUp /> : <ChevronDown />
                }
            </div>
            {
                open3 && (
                    <p className='text-gray-elements '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est illum architecto cupiditate porro ad vitae. Fuga, minus assumenda officia laboriosam ullam sed reiciendis, iusto a quasi expedita illum dolorum?</p>
                )
            }
        </div>
        <div className='border border-light rounded-lg p-2 mx-5 transition-all duration-500 w-80 md:w-[50rem] ease-in-out'>
            <div 
            className='flex items-center justify-between'
            onClick={() => setOpen4(prev => !prev)}>
                <h3 className='font-medium text-lg max-w-xl'>How does the platform ensure safety and prevent scams?</h3>
                {
                    open4 ? <ChevronUp /> : <ChevronDown />
                }
            </div>
            {
                open4 && (
                    <p className='text-gray-elements '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est illum architecto cupiditate porro ad vitae. Fuga, minus assumenda officia laboriosam ullam sed reiciendis, iusto a quasi expedita illum dolorum?</p>
                )
            }
        </div>
        <div className='border border-light rounded-lg p-2 mx-5 transition-all duration-500 w-80 md:w-[50rem] ease-in-out'>
            <div 
            className='flex items-center justify-between'
            onClick={() => setOpen5(prev => !prev)}>
                <h3 className='font-medium text-lg max-w-xl'>Can I list both second-hand items and handmade products?</h3>
                {
                    open5 ? <ChevronUp /> : <ChevronDown />
                }
            </div>
            {
                open5 && (
                    <p className='text-gray-elements '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est illum architecto cupiditate porro ad vitae. Fuga, minus assumenda officia laboriosam ullam sed reiciendis, iusto a quasi expedita illum dolorum?</p>
                )
            }
        </div>
    </section>
  )
}

export default Faqs