import React, { useState } from 'react'

const Header = ({showNav, setShowNav, addActiveClass, setAddActiveClass, location, error}) => {
  
  const handleClick = (e) => {
    e.preventDefault()
    const sectionId = e.target.getAttribute('href')
    const section = document.querySelector(sectionId)
    if(section) {
      section.scrollIntoView({
        behavior : 'smooth',
        block : 'center'
      })
    }
    setShowNav(false)
    setAddActiveClass(false)
  }
  return (
    <header className='flex flex-col w-full items-center justify-between px-10 py-3 transition-all duration-500 ease-in-out relative'>
        <div className=' flex w-full items-center justify-between '>
          <figure>
            <img src="/images/bidoro.png" alt="logo" />
          </figure>
          <nav className='md:flex hidden items-center gap-7'>
              <a href="#home">Home</a>
              <a href="#browse">Browse stores</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
          </nav>

          <div className='md:flex hidden items-center gap-4'>
              { location && <span className="text-sm text-gray-600">{location}</span> }
              { error && <span className="text-sm text-gray-600">{error}</span> }
              <button className=''>Login</button>
              <button className='bg-green hover:bg-green/70 transition-all duration-500 ease-in-out px-5 py-3 text-white font-medium rounded-lg shadow'>Sign Up</button>
          </div>

          <button 
          className={`block cursor-pointer w-[30px] h-[20px] ${ addActiveClass ? 'active' : '' } relative z-[1001] hamburger md:hidden`}        
          onClick={() => {
            setAddActiveClass(prev => !prev),
            setShowNav(prev => !prev)
          }}>
            <span className='bg-black block h-[2px] my-[5px] mx-0 transition-all duration-500 ease'></span>
            <span className='bg-black block h-[2px] my-[5px] mx-0 transition-all duration-500 ease'></span>
            <span className='bg-black block h-[2px] my-[5px] mx-0 transition-all duration-500 ease'></span>
          </button>
        </div>
        {
          showNav && <div className='flex bg-white top-full z-50 w-full items-center justify-center absolute md:hidden flex-col gap-2 mt-2'>
          <nav className='md:hidden flex flex-col items-center gap-7'>
              <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                const sectionId = e.target.getAttribute('href')
                const section = document.querySelector(sectionId)
                if(section) {
                  section.scrollIntoView({
                    behavior : 'smooth',
                  })
                }
                setShowNav(false)
                setAddActiveClass(false)
              }}>Home</a>
              <a href="#browse" onClick={(e) => handleClick(e)}>Browse stores</a>
              <a href="#about" onClick={(e) => handleClick(e)}>About</a>
              <a href="#contact" onClick={(e) => handleClick(e)}>Contact</a>
          </nav>
          { location && <span className="text-sm text-gray-600">{location}</span> }
          { error && <span className="text-sm text-gray-600">{error}</span> }
          <div className='md:hidden flex items-center gap-4'>
              <button className=''>Login</button>
              <button className='bg-green hover:bg-green/70 transition-all duration-500 ease-in-out px-5 py-3 text-white font-medium rounded-lg shadow'>Sign Up</button>
          </div>
        </div>
        }
    </header>
  )
}

export default Header