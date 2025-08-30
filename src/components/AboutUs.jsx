import React from 'react'
import Pros from './Pros'
import Product from './Product'
import Browse from './Browse'
import FeaturedProjects from './FeaturedProjects'

const AboutUs = () => {
  return (
    <section className='flex flex-col gap-4 mx-10 my-5' id='about'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-semibold'>Why choose us</h1>
          <p className='max-w-lg text-gray-elements text-center'>We believe marketplaces are built on people, not just products, so our platform combines convenience, security, and trust</p>
        </div>
        <Pros />
        <Product />
        <Browse />
    </section>
  )
}

export default AboutUs