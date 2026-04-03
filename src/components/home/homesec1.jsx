import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

const Homesec1 = ({img1, img2}) => {
  return (
    <Box className='min-h-screen py-12 px-6 flex flex-col gap-6 md:flex-row w-full bg-white'>
      <div className='relative w-full md:w-1/2 group overflow-hidden h-[80vh] cursor-pointer'>
        <img 
          src={img1} 
          className='object-cover h-full w-full transition-transform duration-1000 group-hover:scale-105' 
          alt="Collection Look 1"
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex flex-col items-center justify-end pb-24 text-white opacity-0 group-hover:opacity-100'>
          <Typography variant="overline" sx={{ letterSpacing: '0.3rem', mb: 2 }}>ELON COUTURE</Typography>
          <Typography variant="h3" className="font-serif italic mb-6">Effortless Grace</Typography>
          <Link to="/womenproducts">
            <button className="px-10 py-3 bg-white text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-medium">
              Shop This Look
            </button>
          </Link>
        </div>
      </div>

      <div className='relative w-full md:w-1/2 group overflow-hidden h-[80vh] cursor-pointer'>
        <img 
          src={img2} 
          className='object-cover h-full w-full transition-transform duration-1000 group-hover:scale-105' 
          alt="Collection Look 2"
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 flex flex-col items-center justify-end pb-24 text-white opacity-0 group-hover:opacity-100'>
          <Typography variant="overline" sx={{ letterSpacing: '0.3rem', mb: 2 }}>ELON COUTURE</Typography>
          <Typography variant="h3" className="font-serif italic mb-6">Tailored Precision</Typography>
          <Link to="/menproducts">
            <button className="px-10 py-3 bg-white text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-medium">
              Shop This Look
            </button>
          </Link>
        </div>
      </div>
    </Box>
  )
}

export default Homesec1