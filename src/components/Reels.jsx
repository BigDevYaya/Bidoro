import React from 'react'


const Reels = ({ image }) => {
  return (
    <div className="relative rounded-xl overflow-hidden w-fit">
      <img
        src={image}
        alt="Reel preview"
        className="md:w-full w-72 h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
        loading='lazy'
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Reels