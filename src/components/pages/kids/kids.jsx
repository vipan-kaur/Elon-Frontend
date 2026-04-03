import { Typography } from '@mui/material'
import menslide1 from '../../../assets/menpg/menslide1.png'
import menslide2 from '../../../assets/menpg/menslide2.png'
import menslide3 from '../../../assets/menpg/menslide3.png'
import A from "../../../assets/menpg/kid22.jpg"
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { initCarousels } from "flowbite";

const Kids = () => {
  useEffect(() => {
    initCarousels();
  }, []);

  return (
    <>
      <div id="default-carousel" className="relative w-full overflow-hidden" data-carousel="slide">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-neutral-100">

          <div className="duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img
              src="https://www.shutterstock.com/image-photo/adorable-children-on-different-color-260nw-2477271221.jpg"
              className="absolute z-0 block w-full h-full object-cover brightness-[0.75]"
              alt="..."
            />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6'>
              <Typography variant="overline" className="tracking-[0.6em] text-[10px] md:text-sm">Elon Couture Kids</Typography>
              <Typography variant="h2" className="font-serif italic text-3xl md:text-5xl my-4">Bright New Seasons</Typography>
              <Link to="/Kidproducts">
                <Typography variant="body1" className="cursor-pointer border-b border-white pb-1 inline-block uppercase tracking-widest text-xs hover:text-gray-300 hover:border-gray-300 transition-all">
                  Shop all now
                </Typography>
              </Link>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img src={menslide1} className="absolute block w-full h-full object-cover brightness-[0.75]" alt="..." />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6'>
              <Typography variant="overline" className="tracking-[0.6em] text-[10px]">Elon Couture Kids</Typography>
              <Typography variant="h2" className="font-serif italic text-3xl md:text-5xl my-4">Little Adventures</Typography>
              <Link to="/Kidproducts">
                <Typography variant="body1" className="cursor-pointer border-b border-white pb-1 inline-block uppercase tracking-widest text-xs">
                  Shop The Collection
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-prev>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">←</span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-next>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">→</span>
        </button>
      </div>

      <div className="w-full p-6 md:p-12">
        <div className="flex flex-col md:flex-row w-full min-h-[450px] bg-white shadow-sm border border-gray-50 rounded-xl overflow-hidden translate-y-[-20px] z-20 relative">
          <div className="w-full md:w-1/2 relative h-full">
            <img
              src="https://urbansquaremall.com/wp-content/uploads/2025/01/kids-wear.jpeg"
              alt="kids"
              className="w-full h-full object-cover h-full"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-20 bg-neutral-50/30">
            <div className="max-w-md text-center md:text-left">
              <Typography variant="overline" className="text-gray-400 tracking-[0.4em] mb-4 block">PURE COMFORT</Typography>
              <Typography variant="h3" className="font-serif text-3xl md:text-4xl mb-6 leading-tight">Elevate Their Style. <br /> Define Their Confidence.</Typography>
              <Typography className="mb-10 text-gray-500 leading-relaxed font-light text-sm md:text-base">
                Discover premium essentials designed for early explorations. From organic cotton basics to meticulously detailed outerwear for the little ones.
              </Typography>
              <Link to="/Kidproducts"><button className="px-12 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-neutral-800 transition-all shadow-lg active:scale-95">SHOP NOW</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Trending Categories */}
      <div className="w-full px-6 md:px-12 pb-12 z-20 relative">
        <Typography variant="h4" className="font-serif text-center mb-10 text-neutral-800">Shop by Category</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/Kidproducts?subCategory=toddlers" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
            <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Toddlers" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Typography variant="h5" className="text-white font-serif tracking-widest">TODDLERS</Typography>
              <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
            </div>
          </Link>
          <Link to="/Kidproducts?subCategory=boys" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
            <img src={A} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Boys" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Typography variant="h5" className="text-white font-serif tracking-widest">BOYS</Typography>
              <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
            </div>
          </Link>
          <Link to="/Kidproducts?subCategory=girls" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
            <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Girls" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Typography variant="h5" className="text-white font-serif tracking-widest">GIRLS</Typography>
              <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
            </div>
          </Link>
        </div>
      </div>
      {/* NEW SECTION: Exclusives Banner */}
      <div className="w-full px-6 md:px-12 pb-12 z-20 relative">
        <div className="w-full bg-[#fdf2e9] text-neutral-900 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-sm border border-[#fad7a1]">
          <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
            <Typography variant="overline" className="tracking-[0.4em] text-neutral-500">NEW ARRIVALS</Typography>
            <Typography variant="h3" className="font-serif mt-2 mb-4 text-[#d35400]">The Playground Edit</Typography>
            <Typography className="text-neutral-600 font-light text-sm md:text-base leading-relaxed">
              Durable, comfortable, and undeniably stylish. Discover pieces built to handle every adventure while keeping your kids looking their smartest.
            </Typography>
          </div>
          <Link to="/Kidproducts">
            <button className="px-10 py-4 bg-[#e67e22] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#d35400] transition-all rounded shadow-md">
              Shop The Play
            </button>
          </Link>
        </div>
      </div>

      {/* NEW SECTION: Shop Benefits */}
      <div className="w-full px-6 md:px-12 pb-20 border-t border-neutral-200 pt-16 mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl mb-4 text-[#e67e22]">🌱</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Organic Cotton</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Soft on the skin and gentle on the planet. Our essentials are ethically made.</Typography>
          </div>
          <div>
            <div className="text-3xl mb-4 text-[#e67e22]">🏃‍♂️</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Play-Proof</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Enhanced durability for crawling, jumping, and everything in between.</Typography>
          </div>
          <div>
            <div className="text-3xl mb-4 text-[#e67e22]">🧸</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Easy Returns</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Growing too fast? Enjoy a hassle-free 30-day exchange policy on all kid styles.</Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kids
