import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux'  
import { addToCart, addtowish, removeFromwish } from '../../../slice/cartslice';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const View = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)   
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wishlist = useSelector((state) => state.cart.wishlistitem) || [];

  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getbyid = async () => {
      try {
        const res = await axios.get(`https://elon-backend-1111.onrender.com/api/getById/${id}`)
        setData(res.data)   
      } catch (err) {
        console.log(err)
      }
    }
    getbyid()
  }, [id])

  if (!data) return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <p className="text-xl font-serif text-gray-500 animate-pulse">Loading Details...</p>
    </div>
  )

  const product = data.product;
  
  const isWishlisted = wishlist.some((item) => item.id === product._id);

  const toggleWishlist = () => {
    const formattedProduct = {
      id: product._id,
      name: product.title,
      price: product.price,
      description: product.description,
      image: product.images && product.images.length > 0 ? `https://elon-backend-1111.onrender.com/uploads/${product.images[0]}` : "https://via.placeholder.com/300?text=No+Image"
    };

    if (isWishlisted) {
      dispatch(removeFromwish(product._id));
    } else {
      dispatch(addtowish(formattedProduct));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product._id,
      name: product.title,
      price: product.price,
      image: product.images && product.images.length > 0 ? `https://elon-backend-1111.onrender.com/uploads/${product.images[0]}` : "https://via.placeholder.com/300?text=No+Image",
      quantity: quantity,
      size: selectedSize
    }));
  }

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* LEFT: IMAGE CAROUSEL */}
          <div className="w-full bg-neutral-50 rounded-2xl overflow-hidden shadow-sm border border-neutral-100 flex items-center justify-center p-4 relative">
             {product.images && product.images.length > 0 ? (
               <Swiper
                 slidesPerView={1}
                 navigation={true}
                 modules={[Navigation]}
                 className="w-full"
               >
                 {product.images.map((img, idx) => (
                   <SwiperSlide key={idx} className="flex justify-center items-center">
                     <img
                       className="w-full h-[400px] md:h-[600px] object-contain"
                       src={`https://elon-backend-1111.onrender.com/uploads/${img}`}   
                       alt={`${product.title} - view ${idx+1}`}
                     />
                   </SwiperSlide> 
                 ))}
               </Swiper>
             ) : (
               <img src="https://via.placeholder.com/600x600?text=No+Image+Available" alt="placeholder" className="w-full h-[400px] md:h-[600px] object-contain opacity-50" />
             )}
          </div>

          {/* RIGHT: DETAILS */}
          <div className="flex flex-col justify-center h-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 bg-gray-100 w-fit px-3 py-1 rounded-full">{product.category}</span>
              <button onClick={toggleWishlist} className="text-red-500 hover:scale-110 transition-transform flex items-center gap-2">
                {isWishlisted ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" color="action" />}
              </button>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight mb-4">
              {product.title}
            </h1>
            
            <p className="text-2xl font-bold text-gray-800 mb-1">₹{product.price}</p>
            <p className="text-xs text-gray-400 font-light mb-8 pb-8 border-b border-gray-200">Price inclusive of all taxes. Free delivery applied.</p>

            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-3">Product Description</h3>
            <p className="text-gray-600 leading-relaxed font-light text-sm mb-8 text-justify">
              {product.description || "No description provided format for this handcrafted piece."}
            </p>

            {/* SIZE AND QUANTITY */}
            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              {/* Size Selector */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-3">Size</h3>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border font-bold transition-all ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-600 hover:border-black'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center border border-gray-200 w-fit h-12">
                   <button 
                     className="w-12 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
                   >
                     -
                   </button>
                   <span className="w-12 text-center font-bold">{quantity}</span>
                   <button 
                     className="w-12 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
                     onClick={() => setQuantity(quantity + 1)}
                   >
                     +
                   </button>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">  
              <Button
                variant="contained" 
                onClick={handleAddToCart}
                sx={{ backgroundColor: 'black', color: 'white', padding: '16px 32px', letterSpacing: '0.1em', fontWeight: 'bold', '&:hover': { backgroundColor: '#333' } }}
                className="flex-1 shadow-xl hover:scale-[1.02] transition-transform"
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate(-1)}
                sx={{ borderColor: 'black', color: 'black', padding: '14px 24px', letterSpacing: '0.1em', fontWeight: 'bold', '&:hover': { backgroundColor: 'black', color: 'white' } }}
              >
                Go Back
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default View
