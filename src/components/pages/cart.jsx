import React from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decQuantity, incQuantity, removeFromCart } from "../../slice/cartslice";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartitem || []);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-12 text-center">
          {totalQuantity === 0 ? "Your Cart is Empty" : "Shopping Cart"}
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
            <div className="w-24 h-24 mb-6 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <Typography variant="h5" className="font-serif text-gray-800 mb-2 font-semibold">Ready to be filled</Typography>
            <Typography className="text-gray-500 mb-8 max-w-md text-center">Looks like you haven't made your choice yet. Discover our latest collections.</Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' }, padding: '14px 40px', letterSpacing: '0.1em', fontWeight: 'bold' }}
              onClick={() => navigate("/explore")}
            >
              Explore Collection
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* ITEM LIST */}
            <div className="flex-1 w-full">
              <div className="hidden md:flex justify-between items-center pb-4 border-b border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 px-4">
                <div className="w-[45%]">Product</div>
                <div className="w-[20%] text-center">Quantity</div>
                <div className="w-[20%] text-right">Total</div>
                <div className="w-[15%] text-right"></div>
              </div>

              <div className="flex flex-col gap-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size || 'M'}`} className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-100 last:border-0 relative gap-6 px-4 hover:bg-gray-50/50 transition-colors rounded-xl">
                     
                     {/* Product Details */}
                     <div className="flex gap-6 items-center w-full md:w-[45%]">
                        <div className="w-24 h-32 md:w-28 md:h-36 bg-gray-50 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-1">{item.name}</h2>
                          <span className="text-sm text-gray-500 mb-2">₹{item.price}</span>
                          {item.size && (
                            <span className="text-xs uppercase tracking-wider text-gray-400 bg-gray-100 w-fit px-2 py-1 rounded">Size: {item.size}</span>
                          )}
                        </div>
                     </div>

                     <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 w-full md:w-[55%]">
                         {/* Quantity Selector */}
                         <div className="w-fit md:w-[35%] flex justify-center">
                            <div className="flex items-center border border-gray-200 rounded-md overflow-hidden h-10 w-fit bg-white">
                              <button onClick={() => dispatch(decQuantity(item.id))} className="w-10 h-full flex items-center justify-center bg-gray-50 text-gray-500 hover:bg-gray-100 transition font-medium">-</button>
                              <span className="w-12 text-center font-bold text-sm">{item.quantity}</span>
                              <button onClick={() => dispatch(incQuantity(item.id))} className="w-10 h-full flex items-center justify-center bg-gray-50 text-gray-500 hover:bg-gray-100 transition font-medium">+</button>
                            </div>
                         </div>

                         {/* Price Total */}
                         <div className="w-fit md:w-[35%] text-right font-bold text-gray-900 md:text-lg">
                            ₹{(item.price * item.quantity).toFixed(2)}
                         </div>

                         {/* Remove Button */}
                         <div className="w-fit md:w-[15%] text-right flex justify-end absolute top-4 right-4 md:static">
                           <button onClick={() => dispatch(removeFromCart(item.id))} className="text-gray-300 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50">
                             <DeleteOutlineIcon fontSize="small" />
                           </button>
                         </div>
                     </div>

                  </div>
                ))}
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="w-full lg:w-[400px]">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-32">
                <Typography variant="h6" className="font-serif font-bold text-gray-900 mb-6">
                  Order Summary
                </Typography>
                
                <div className="flex justify-between items-center mb-4 text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center pb-6 border-b border-gray-200 text-gray-600">
                  <span>Standard Shipping</span>
                  <span className="text-green-600 text-sm font-semibold tracking-wide">FREE</span>
                </div>

                <div className="flex justify-between items-center mt-6 mb-8">
                  <span className="font-bold text-lg text-gray-900">Total</span>
                  <span className="font-bold text-2xl font-serif text-gray-900">₹{(subtotal).toFixed(2)}</span>
                </div>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' }, padding: '16px 0', letterSpacing: '0.1em', fontWeight: 'bold' }}
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </Button>
                <div className="mt-6 flex justify-center items-center gap-2 text-xs text-gray-400 uppercase tracking-widest text-center">
                  <span>Secure Encrypted Checkout</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;