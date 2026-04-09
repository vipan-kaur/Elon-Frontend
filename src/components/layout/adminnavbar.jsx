import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import Navmenu from './navmenu';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

import { searchcontext } from '../../searchprovider';
import Dropdown from '../ui/dropdown';
import Topbar from './topbar';

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showsearchbar, setshowsearchbar] = useState(false);
  const { search, setsearch } = useContext(searchcontext);
  const navigate = useNavigate();
  
  const cartItems = useSelector((state) => state.cart.cartitem || []);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const wishlistItems = useSelector((state) => state.cart.wishlistitem || []);
  const wishlistCount = wishlistItems.length;

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout from admin panel?")) {
      localStorage.removeItem("adminKey");
      navigate("/");
      alert("You have been logged out from admin panel");
    }
  };

  return (
    <>
    <div className='flex relative sticky top-8 z-50 bg-white justify-between items-center font-serif px-3 py-3 lg:px-[56px] shadow-sm'>
      {/* Logo */}
      <Link to="/" onClick={() => setActiveDropdown(null)}>
        <h1 className='text-4xl text-gray-800 md:text-2xl whitespace-nowrap font-bold tracking-tight'>Elon Couture</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex px-[33px] items-center text-xs gap-6 text-gray-700 mr-auto'>
 
        <li className='relative py-4 uppercase tracking-[0.1em] font-medium' >
          <Link to="/allproducts" className='hover:underline underline-offset-4 decoration-2 cursor-pointer hover:text-black block'>
            Products
          </Link>
        </li>

       <li className='relative py-4 uppercase tracking-[0.1em] font-medium' >
          <Link to="/alluser" className='hover:underline underline-offset-4 decoration-2 cursor-pointer hover:text-black block'>
            User's
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className='flex gap-5 items-center md:gap-7' >
        <Link to='/wishlist' className='hidden md:block hover:scale-110 transition-transform'>
          <Badge badgeContent={wishlistCount} color="error" sx={{ '& .MuiBadge-badge': { right: -3, top: 3 }}}>
            <FavoriteBorderIcon />
          </Badge>
        </Link>
        
        <Link to="/cart" className='hover:scale-110 transition-transform'>
          <Badge badgeContent={totalQuantity} color="primary" sx={{ '& .MuiBadge-badge': { backgroundColor: 'black', right: -3, top: 3 }}}>
             <ShoppingCartIcon />
          </Badge>
        </Link>

        <button 
          onClick={handleLogout}
          className='hidden md:block px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded hover:bg-red-600 transition-all'
        >
          Admin Logout
        </button>

        {/* Mobile Menu Button */}
        <div className='relative md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <CloseIcon /> : <MenuOpenIcon />}
          </button>

          {/* Overlay */}
          {menuOpen && (
            <div
              className='fixed inset-0 z-30 bg-black/20'
              onClick={toggleMenu}
            > </div>
          )}

          {/* Sliding Mobile Menu */}
          <div
            className={`fixed top-[94px] right-0 w-full h-screen bg-white z-40 transform transition-transform duration-500 ease-in-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Navmenu toggleMenu={toggleMenu}/>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
export default AdminNavbar;