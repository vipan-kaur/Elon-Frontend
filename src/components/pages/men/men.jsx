import { Typography } from '@mui/material'
import menslide1 from '../../../assets/menpg/menslide1.png'
import menslide2 from '../../../assets/menpg/menslide2.png'
import menslide3 from '../../../assets/menpg/menslide3.png'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { initCarousels } from "flowbite";

const Men = () => {
  useEffect(() => {
    initCarousels();
  }, []);

  return (
    <>
      {/* SECTION 1: YOUR CAROUSEL - DESIGN FIXED */}
      <div id="default-carousel" className="relative w-full overflow-hidden" data-carousel="slide">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          
          <div className="duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img
              src="https://wwd.com/wp-content/uploads/2024/06/ralph-lauren-spring-2025-mens-0001.jpg"
              className="absolute z-0 block w-full h-full object-cover brightness-[0.7]"
              alt="..."
            />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6'>
              <Typography variant="overline" className="tracking-[0.6em] text-[10px] md:text-sm">Elon Couture</Typography>
              <Typography variant="h2" className="font-serif italic text-3xl md:text-5xl my-4">New Arrivals</Typography>
              <Link to="/menproducts">
                <Typography variant="body1" className="cursor-pointer border-b border-white pb-1 inline-block uppercase tracking-widest text-xs hover:text-gray-300 hover:border-gray-300 transition-all">
                    Shop now
                </Typography>
              </Link>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img src={menslide1} className="absolute block w-full h-full object-cover brightness-[0.7]" alt="..." />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6'>
              <Typography variant="overline" className="tracking-[0.6em] text-[10px]">Elon Couture</Typography>
              <Typography variant="h2" className="font-serif italic text-3xl md:text-5xl my-4">Spring Collection</Typography>
              <Link to="/menproducts">
                <Typography variant="body1" className="cursor-pointer border-b border-white pb-1 inline-block uppercase tracking-widest text-xs">
                    Explore Now
                </Typography>
              </Link>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img src={menslide2} className="absolute block w-full h-full object-cover brightness-[0.7]" alt="..." />
            <div className="absolute w-full md:w-1/2 inset-y-0 left-0 md:left-12 z-10 flex flex-col gap-4 justify-center text-left text-white p-8 md:p-12">
              <Typography variant="overline" className="tracking-[0.4em]">Elan Couture</Typography>
              <Typography variant="h3" className="font-serif leading-tight text-3xl md:text-4xl">The Essence <br/> of Elegance</Typography>
              <ul className="list-none space-y-2 text-white/90 text-[10px] md:text-xs tracking-wider">
                <li>✔ Long-lasting captivating fragrances</li>
                <li>✔ Crafted from premium natural ingredients</li>
                <li>✔ Signature scents for every occasion</li>
              </ul>
              <Link to="/menproducts" className="mt-4 inline-block border-b border-white pb-1 w-fit text-[10px] uppercase tracking-widest font-bold">Discover More</Link>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img src={menslide3} className="absolute block w-full h-full object-cover brightness-[0.7]" alt="..." />
            <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-6'>
              <Typography variant="overline" className="tracking-[0.6em]">Elan Couture</Typography>
              <Typography variant="h1" className="font-serif italic text-3xl md:text-5xl my-4">Signature Style</Typography>
              <Link to="/menproducts">
                 <button className="px-10 py-3 bg-white text-black text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-all">
                    Shop Collection
                 </button>
              </Link>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-prev>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">←</span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" data-carousel-next>
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">→</span>
        </button>
      </div>

      {/* SECTION 2: YOUR CONTENT BLOCK - DESIGN FIXED */}
      <div className="w-full p-6 md:p-12">
        <div className="flex flex-col md:flex-row w-full min-h-[450px] bg-white shadow-sm border border-gray-50 rounded-xl overflow-hidden translate-y-[-20px] z-20 relative">
          {/* LEFT SIDE - IMAGE */}
          <div className="w-full md:w-1/2 relative">
            <img
              src="https://wwd.com/wp-content/uploads/2024/06/ralph-lauren-spring-2025-mens-0001.jpg"
              alt="men"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-10 md:p-20 bg-neutral-50/30">
            <div className="max-w-md text-center md:text-left">
              <Typography variant="overline" className="text-gray-400 tracking-[0.4em] mb-4 block">LUXURY REDEFINED</Typography>
              <Typography variant="h3" className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
                Elevate Your Style. <br/> Define Your Confidence.
              </Typography>
              <Typography className="mb-10 text-gray-500 leading-relaxed font-light text-sm md:text-base">
                Discover premium menswear designed for the modern man. From timeless essentials to bold statement pieces — upgrade your wardrobe with unmatched quality and comfort.
              </Typography>
              <Link to="/menproducts">
                <button className="px-12 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-black hover:bg-neutral-800 transition-all shadow-lg active:scale-95">
                    SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Trending Categories */}
      <div className="w-full px-6 md:px-12 pb-12 z-20 relative">
        <Typography variant="h4" className="font-serif text-center mb-10 text-neutral-800">Shop by Category</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Link to="/menproducts?subCategory=formal" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
             <img src="https://images.unsplash.com/photo-1507679799987-c73774573b94?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Suits" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
               <Typography variant="h5" className="text-white font-serif tracking-widest">FORMAL WEAR</Typography>
               <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
             </div>
           </Link>
           <Link to="/menproducts?subCategory=casual" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
             <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Casuals" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
               <Typography variant="h5" className="text-white font-serif tracking-widest">CASUAL ESSENTIALS</Typography>
               <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
             </div>
           </Link>
           <Link to="/menproducts?subCategory=accessories" className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer rounded-xl shadow-sm">
             <img src="https://images.unsplash.com/photo-1623998021450-85c29c644e0d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Accessories" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
               <Typography variant="h5" className="text-white font-serif tracking-widest">ACCESSORIES</Typography>
               <Typography className="text-white/80 text-xs mt-2 uppercase tracking-widest">Discover</Typography>
             </div>
           </Link>
        </div>
      </div>
      {/* NEW SECTION: Exclusives Banner */}
      <div className="w-full px-6 md:px-12 pb-12 z-20 relative">
        <div className="w-full bg-neutral-900 text-white rounded-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-xl">
           <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
             <Typography variant="overline" className="tracking-[0.4em] text-neutral-400">LIMITED EDITION</Typography>
             <Typography variant="h3" className="font-serif mt-2 mb-4">The Noir Collection</Typography>
             <Typography className="text-neutral-300 font-light text-sm md:text-base leading-relaxed">
               Experience the pinnacle of tailoring with our exclusive all-black collection. Meticulously crafted for those who command the room. 
             </Typography>
           </div>
           <Link to="/menproducts">
             <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all rounded shadow-lg">
               Explore Collection
             </button>
           </Link>
        </div>
      </div>

      {/* NEW SECTION: Shop Benefits */}
      <div className="w-full px-6 md:px-12 pb-20 border-t border-neutral-200 pt-16 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl mb-4">🌍</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Global Delivery</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Complimentary worldwide shipping on all premium orders over $500.</Typography>
          </div>
          <div>
            <div className="text-3xl mb-4">🧵</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Master Tailoring</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Every piece is crafted with unparalleled attention to detail and precision.</Typography>
          </div>
          <div>
            <div className="text-3xl mb-4">🛡️</div>
            <Typography variant="h6" className="font-bold mb-2 font-serif text-neutral-800">Secure Experience</Typography>
            <Typography variant="body2" className="text-neutral-500 max-w-xs mx-auto">Shop with confidence using our seamless and encrypted checkout process.</Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default Men
