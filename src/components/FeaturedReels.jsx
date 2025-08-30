import React from 'react'
import Reels from './Reels'

const FeaturedReels = () => {
  return (
    <section className='md:mx-10 mx:5 my-10 md:px-10 flex flex-col gap-3 items-start justify-center'>
        <div className="max-w-6xl px-4">
            <h2 className="text-2xl font-medium">Featured reels</h2>
            <p className="text-gray-500 text-sm">
            See products in action through short reels from our sellers
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Reels image={'/images/reel1.jpg'}/>
                <Reels image={'/images/reel4.jpg'}/>
                <Reels image={'/images/reel3.jpg'}/>
                <Reels image={'/images/reel4.jpg'}/>
            </div>
        </div>

    </section>
  )
}

export default FeaturedReels