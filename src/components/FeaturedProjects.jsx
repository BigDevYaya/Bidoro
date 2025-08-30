import React from 'react'
import products from '../assets/products.json'
import location from '/images/location-04.png'
import { Heart } from 'lucide-react'

const FeaturedProjects = () => {
        const formatPrice = (price) => {
            return new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
                minimumFractionDigits: 0
            }).format(price);
        };
  return (
    <section className='md:mx-10 my-10 px-10 flex flex-col gap-3 items-start justify-center'>
        <h2 className='text-3xl font-medium text-black'>Featured Projects</h2>
        <p className='text-gray-elements text-sm font-poppins'>Check out our top picks — trending items and services handpicked just for you</p>
        <div className='grid place-items-center grid-cols-2  lg:grid-cols-4 gap-4 w-full'>
            {
                products.map((product, i) => (
                    <div 
                    className='border hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 ease-in-out flex flex-col gap-2 w border-light rounded-xl px-[10px] py-[8px]'
                    key={i}>
                        <figure className='bg-light md:p-10 p-5 rounded-lg'>
                            <img src={product.image} alt="" />
                        </figure>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-medium'>{formatPrice(product.price)}</h1>
                            <div className='bg-light p-0.5 rounded-full'>
                                <Heart className='w-4 h-4' />
                            </div>
                        </div>
                        <p className='text-gray-elements'>{product.title}</p>
                        <p className='text-[10px] text-gray-elements'>{product.category}</p>
                        <div className='flex items-center gap-1 text-[10px] text-gray-elements'>
                            <img src={location} alt="" className='w-3 h-3'/>
                            {product.location}
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default FeaturedProjects