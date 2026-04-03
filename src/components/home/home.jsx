import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Container } from '@mui/material'
import homevideo from "../../assets/elan.mp4"
import womenhome from "../../assets/dress.jpeg"
import menhome from "../../assets/menhome.jpeg"
import kids from '../../assets/kidshomme.jpeg'
import bag from '../../assets/bag.jpeg'

// New Sections
import Homesec1 from './homesec1'
import Homesec2 from './homesec2'
import CategoryHighlights from './CategoryHighlights'
import BrandEthos from './BrandEthos'
import TrendingSection from './TrendingSection'

const Home = () => {
  return (
    <Box className="overflow-x-hidden">
      {/* HERO SECTION */}
      <Box className='relative h-screen w-full'>
        <video 
          src={homevideo} 
          autoPlay 
          loop 
          muted 
          className='h-full w-full object-cover filter brightness-75'
        />
        <Box 
          className='absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-white bg-black/20'
        >
          <Typography 
            variant="overline" 
            sx={{ letterSpacing: '0.6rem', mb: 2, fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}
          >
            SPRING / SUMMER 2026
          </Typography>
          <Typography 
            variant="h1" 
            className="font-serif italic mb-8" 
            sx={{ fontSize: { xs: '3.5rem', md: '6rem' }, fontWeight: 300, textShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            The New Arrivals
          </Typography>
          
          <Link to="/explore">
            <button className="group relative px-12 py-4 bg-transparent text-white border border-white transition-all duration-500 tracking-[0.2em] font-light overflow-hidden">
              <span className="relative z-10">EXPLORE THE COLLECTION</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">EXPLORE THE COLLECTION</span>
            </button>
          </Link>
        </Box>
      </Box>

      {/* TRENDING SECTION - ADDED CONTENT */}
      <TrendingSection />

      {/* CATEGORY HIGHLIGHTS */}
      <CategoryHighlights />

      {/* BRAND ETHOS / PHILOSOPHY */}
      <BrandEthos />

      {/* ENSEMBLES TITLE */}
       <Box className="bg-white pt-24 pb-8">
          <Typography variant="h2" className="text-center font-serif uppercase tracking-[0.3em] text-black" sx={{ fontSize: '1rem', fontWeight: 600 }}>
            Featured Ensembles
          </Typography>
          <div className="w-12 h-[1px] bg-black mx-auto mt-4"></div>
       </Box>
      
      <Homesec1 img1={womenhome} img2={menhome}/>
      <Homesec2 img3={kids} img4={bag}/>

      {/* STYLE QUOTE */}
      <Box className="py-24 bg-white text-center">
         <Container maxWidth="md">
            <Typography variant="h3" className="font-serif italic text-neutral-800" sx={{ fontSize: {xs: '1.5rem', md: '2.5rem'}, lineHeight: 1.4 }}>
                "TRUE STYLE IS THE ART OF BEING YOURSELF IN EVERY MOMENT."
            </Typography>
         </Container>
      </Box>

      {/* NEWSLETTER / STYLE EDIT */}
      <Box className="bg-neutral-50 py-24 border-y border-neutral-200">
        <Container maxWidth="sm" className="text-center">
            <Typography variant="h4" className="mb-6 font-serif uppercase tracking-widest text-black" sx={{ fontSize: '1.5rem', fontWeight: 400 }}>
                Join The Style Edit
            </Typography>
            <Typography variant="body1" className="mb-10 text-neutral-500 font-light max-w-md mx-auto">
                Sign up to receive exclusive offers, early access to new collections, and lookbook inspiration delivered to your inbox.
            </Typography>
            <Box className="flex flex-col sm:flex-row gap-0 items-center justify-center border border-neutral-300 bg-white p-1">
                <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="w-full bg-transparent py-4 px-6 outline-none uppercase tracking-widest text-xs font-light"
                />
                <button className="w-full sm:w-auto px-10 py-4 bg-black text-white hover:bg-neutral-800 transition-all uppercase tracking-[0.2em] text-xs font-medium whitespace-nowrap">
                    Subscribe
                </button>
            </Box>
            <Typography variant="caption" className="block mt-6 text-neutral-400 uppercase tracking-widest" sx={{ fontSize: '0.65rem' }}>
                Unsubscribe at any time. View our Privacy Policy.
            </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Home