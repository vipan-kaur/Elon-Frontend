import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import dressimg from '../../../assets/dress.jpeg'
import { useEffect } from "react";
import { initCarousels } from "flowbite";
import A from "../../../assets/menpg/women.jpg"

const Women = () => {
  useEffect(() => {
    initCarousels();
  }, []);

  return (
    <>
      <div id="default-carousel" className="relative w-full overflow-hidden" data-carousel="slide">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">

          <div className="duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.pFwV17bGfCsPamIdHT6BzQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
              className="absolute z-0 block w-full h-full object-cover brightness-[0.75]"
              alt="..."
            />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6'>
              <Typography variant="overline" className="tracking-[0.6em] text-[10px] md:text-sm">ELon Couture</Typography>
              <Typography variant="h2" className="font-serif italic text-3xl md:text-5xl my-4">New Arrivals</Typography>
              <Link to="/womenproducts">
                <Typography variant="body1" className="cursor-pointer border-b border-white pb-1 inline-block uppercase tracking-widest text-xs hover:text-gray-300 hover:border-gray-300 transition-all">
                  Shop now
                </Typography>
              </Link>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img src="https://tse1.mm.bing.net/th/id/OIP.1SDJhZrPqt2a5p_Ul5SWagHaEP?rs=1&pid=ImgDetMain&o=7&rm=3" className="absolute block w-full h-full object-cover brightness-[0.75]" alt="..." />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6'>
              <Typography variant="overline" className="tracking-[0.6em] text-[10px]">ELon Couture</Typography>
              <Typography variant="h2" className="font-serif italic text-3xl md:text-5xl my-4">Modern Femininity</Typography>
              <Link to="/womenproducts">
                <Typography variant="body1" className="cursor-pointer border-b border-white pb-1 inline-block uppercase tracking-widest text-xs">
                  Explore Arrivals
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
          <div className="w-full md:w-1/2 relative">
            <img src={dressimg} alt="women" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-20 bg-neutral-50/30 font-serif text-3xl md:text-4xl text-neutral-900 leading-tight">
            <div className="max-w-md text-center md:text-left">
              <Typography variant="overline" className="text-gray-400 tracking-[0.4em] mb-4 block font-sans">ELEGANCE REDEFINED</Typography>
              <h2 className="mb-6">Elevate Your Style. <br /> Define Your Confidence.</h2>
              <p className="mb-10 text-gray-500 leading-relaxed font-light text-sm md:text-base font-sans italic">"Curated styles that balance high-fashion drama with every-day wearability. Elevate your wardrobe with the signature Elon Couture world."</p>
              <Link to="/womenproducts"><button className="px-12 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-neutral-800 transition-all shadow-lg active:scale-95">SHOP COLLECTION</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Trending Categories */}
      <div className="w-full px-6 md:px-12 pb-12 z-20 relative">
        <Typography variant="h4" className="font-serif text-center mb-10 text-neutral-800">Shop by Category</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/womenproducts?subCategory=dresses" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
            <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Dresses" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Typography variant="h5" className="text-white font-serif tracking-widest">EVENING DRESSES</Typography>
              <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
            </div>
          </Link>
          <Link to="/womenproducts?subCategory=outerwear" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
            <img src={A} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Outerwear" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Typography variant="h5" className="text-white font-serif tracking-widest">OUTERWEAR</Typography>
              <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
            </div>
          </Link>
          <Link to="/womenproducts?subCategory=handbags" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
            <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Bags" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Typography variant="h5" className="text-white font-serif tracking-widest">HANDBAGS</Typography>
              <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
            </div>
          </Link>
        </div>
      </div>
      {/* NEW SECTION: Exclusives Banner */}
      <div className="w-full px-6 md:px-12 pb-12 z-20 relative">
        <div className="w-full bg-[#f9ebea] text-neutral-900 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-sm border border-[#f2d7d5]">
          <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
            <Typography variant="overline" className="tracking-[0.4em] text-neutral-500">CURATED EDIT</Typography>
            <Typography variant="h3" className="font-serif mt-2 mb-4 text-[#78281f]">The Rose Gold Collection</Typography>
            <Typography className="text-neutral-600 font-light text-sm md:text-base leading-relaxed">
              Discover a selection of breathtaking dresses and contemporary elegance, highlighted by subtle metallic finishes and luxurious silk blends.
            </Typography>
          </div>
          <Link to="/womenproducts">
            <button className="px-10 py-4 bg-[#78281f] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#641e16] transition-all rounded shadow-md">
              Shop The Edit
            </button>
          </Link>
        </div>
      </div>

      {/* NEW SECTION: Shop Benefits */}
      <div className="w-full px-6 md:px-12 pb-20 border-t border-neutral-200 pt-16 mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl mb-4 text-[#78281f]">✨</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Exclusive Designs</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Stand out with limited pieces curated specifically for the modern woman.</Typography>
          </div>
          <div>
            <div className="text-3xl mb-4 text-[#78281f]">💎</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Premium Materials</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Crafted using ethically sourced, high-quality fabrics that feel like a second skin.</Typography>
          </div>
          <div>
            <div className="text-3xl mb-4 text-[#78281f]">🎀</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Luxury Packaging</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Every order arrives in our signature eco-friendly, elegant gift packaging.</Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Women
