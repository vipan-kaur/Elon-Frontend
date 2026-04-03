import React from "react";
import { Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromwish } from "../slice/cartslice";
import { useNavigate, Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Wishlist = () => {
  const cartItems = useSelector((state) => state.cart.wishlistitem || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-12 text-center">
          {cartItems.length === 0 ? "My Wishlist" : `My Wishlist (${cartItems.length})`}
        </h1>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
            <div className="w-24 h-24 mb-6 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 text-red-400">
              <FavoriteBorderIcon sx={{ fontSize: 40 }} />
            </div>
            <Typography variant="h5" className="font-serif text-gray-800 mb-2 font-semibold">
              Save your favorites here
            </Typography>
            <Typography className="text-gray-500 mb-8 max-w-md text-center">
              Keep track of items you love. They'll be waiting here when you're ready to make them yours.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: '#333' }, padding: '14px 40px', letterSpacing: '0.1em', fontWeight: 'bold' }}
              onClick={() => navigate("/explore")}
            >
              Explore Collection
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Remove from wishlist button top right */}
                <button
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 hover:scale-110 hover:bg-white transition-all shadow-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(removeFromwish(item.id));
                  }}
                >
                  <FavoriteIcon fontSize="small" />
                </button>

                <Link to={`/view/${item.id}`} className="block relative overflow-hidden h-80 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out p-4"
                  />
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-serif font-semibold text-gray-900 mb-2 truncate">
                    {item.name}
                  </h2>
                  <p className="font-bold text-gray-800 text-lg mb-6">
                    ₹{(Number(item.price)).toFixed(2)}
                  </p>

                  <div className="mt-auto">
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<ShoppingBagOutlinedIcon />}
                      onClick={() => navigate(`/view/${item.id}`)}
                      sx={{ borderColor: 'black', color: 'black', padding: '10px 0', letterSpacing: '0.05em', fontWeight: 'bold', '&:hover': { backgroundColor: 'black', color: 'white' } }}
                    >
                      View Product
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
