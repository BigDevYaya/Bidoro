import React, { useState } from 'react'
import Header from './Header'
import { LocateIcon } from 'lucide-react'
import search from '/images/searchicon.png'
import location from '/images/location-04.png'
import man from '/images/mansha.png'
import woman from '/images/woman.png'
import labour from '/images/labour.png'
import shopping from '/images/shopping.png'

const HeroSection = ({ onClick, location }) => {
    const [searchText, setSearchText] = useState('')
  return (
    <section className='hero-section bg-[url(/images/mobilebg.png)] md:bg-[url(../src/assets/background.png)] relative flex items-center justify-center h-[80vh]' id='home'>
        <div className='flex items-center md:max-w-2xl max-w-xl mx-5 justify-center flex-col gap-4'>
            <h1 className='font-semibold text-5xl text-center'>Buy smarter, sell with ease, enjoy a seamless experience</h1>
            <p className='md:max-w-[30rem] max-w-72 text-gray-500 text-center'>From pre-owned products to expert services, everything you need to simplify and enrich your lifestyle is right here</p>
            <div className='flex flex-col md:flex-row items-center gap-4'>
                <button 
                className='flex items-center gap-2 border border-gray-400 px-7 py-3 rounded-xl text-gray-500'
                onClick={onClick}
                disabled={location}>
                    <figure>
                        <img src={location} alt="" />
                    </figure>
                    { location ? location : 'location' }
                </button>

                <div className='flex items-center gap-2 border border-gray-400 px-5 py-3 rounded-xl text-gray-500'>
                    <figure>
                        <img src={search} alt="" />
                    </figure>
                    <input 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    name='searchText'
                    className='focus:outline-0 flex-1'
                    type="text" 
                    placeholder='Search for products, sellers or service' 
                     />
                </div>
            </div>
        </div>
        <img 
        src={man} 
        alt="man"
        className='md:absolute md:inline hidden top-0 left-14'
         />
        <img 
        src={woman}
        alt="" 
        className='hidden md:inline md:absolute top-0 right-14'
        />
        <img 
        src={labour} 
        alt="" 
        className='hidden md:inline md:absolute bottom-7 left-28'
        />
        <img 
        src={shopping} 
        alt="" 
        className='hidden md:inline md:absolute bottom-7 right-28'
        />
    </section>
  )
}

export default HeroSection