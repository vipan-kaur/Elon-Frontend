import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

const Homesec2 = ({img3, img4}) => {
  return (
    <Box className='min-h-screen py-12 px-6 flex flex-col gap-6 md:flex-row w-full bg-white'>
      <div className='relative w-full md:w-1/2 group overflow-hidden h-[80vh] cursor-pointer bg-neutral-100'>
        <img 
          src={img3} 
          className='object-cover h-full w-full grayscale-[20%] group-hover:grayscale-0 transition-grayscale duration-1000' 
          alt="Collection Look 3"
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700 flex flex-col items-center justify-end pb-24 text-white opacity-0 group-hover:opacity-100'>
           <Typography variant="overline" sx={{ letterSpacing: '0.3rem', mb: 2 }}>ELON COUTURE</Typography>
          <Typography variant="h3" className="font-serif italic mb-6">Playful Essence</Typography>
          <Link to="/Kidproducts">
            <button className="px-10 py-3 bg-white text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-medium">
              Discover Kids
            </button>
          </Link>
        </div>
      </div>

      <div className='relative w-full md:w-1/2 group overflow-hidden h-[80vh] cursor-pointer'>
        <img 
          src={img4} 
          className='object-cover h-full w-full group-hover:scale-105 transition-transform duration-1000' 
          alt="Collection Look 4"
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700 flex flex-col items-center justify-end pb-24 text-white opacity-0 group-hover:opacity-100'>
          <Typography variant="overline" sx={{ letterSpacing: '0.3rem', mb: 2 }}>ELON COUTURE</Typography>
          <Typography variant="h3" className="font-serif italic mb-6">Refined Accessories</Typography>
          <Link to="/explore">
            <button className="px-10 py-3 bg-white text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-medium">
              Shop Accessories
            </button>
          </Link>
        </div>
      </div>
    </Box>
  )
}

export default Homesec2
