import React from 'react'
import ProductCategories from './ProductCategories'
import arrowLeft from '/images/arrowleft.png'
import { ArrowRight } from 'lucide-react'


const Browse = () => {
  return (
    <section className='flex flex-col items-center gap-2 my-3 font-poppins' id='browse'>
        <h2 className='text-3xl font-semibold'>Browse top categories</h2>
        <p className='text-center text-gray-elements max-w-xl'>Explore the most popular categories and discover everything from everyday essentials to unique finds</p>
        <ProductCategories />
        <button className='flex border items-center gap-2 rounded-xl px-4 py-2'>
            View all
            <ArrowRight className='w-4 h-4' />
        </button>
    </section>
  )
}

export default Browse