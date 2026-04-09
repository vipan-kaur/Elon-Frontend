// import React from 'react'
// import { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import CloseIcon from '@mui/icons-material/Close';
// import Navmenu from './navmenu';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const[menuopen,setmenuopen]=useState(false);
//   // const[mouseenter,setmouseenter]=useState(false)
//     const toggleMenu=()=>{
//       setmenuopen(!menuopen)
//     }

//   return (
//     <>
//    <>
//         <div className='flex  relative sticky top-0 z-50 bg-white justify-between items-center font-serif py-3 lg:px-[56px] ' >

//                 <Link to="/"> <h1 className='text-4xl text-gray-800 md:text-2xl '>Elon Couture</h1></Link>
           
//                  <ul className='hidden  md:flex px-[33px] items-center  text-xs gap-6 text-gray-700 mr-auto'>

//                     <li  className='block hover:underline underline-offset-1  cursor-pointer hover:text-black' >MEN
                     
//                     </li>

//                     <li className='block hover:underline underline-offset-1  cursor-pointer hover:text-black'>WOMEN</li>
//                     <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>KIDS & BABY</li>
//                     <li className='hover:underline underline-offset-1 cursor-pointer hover:text-black'>HOME</li>
//                     <li className='hover:underline  underline-offset-1 cursor-pointer hover:text-black'>DISCOVER</li>
//                  </ul>


//             <div className={`flex gap-3 items-center md:gap-8 `}>
//                    <button> <SearchIcon/></button>
//                   <Link to="/login"> <span className='hidden md:block'> <PermIdentityIcon/></span></Link>
//                    <span className='hidden md:block'> <FavoriteBorderIcon/></span>
//                    <span > <ShoppingCartIcon/></span>
//                    <div className={`md:hidden  `} onClick={toggleMenu}>{menuopen?<CloseIcon/>:<MenuOpenIcon/>}
                  
//                     <div className={`absolute top-full  right-0 h-screen w-full bg-white z-40 transform transition-transform duration-600 ease-in-out${!menuopen&& 'hidden'}  ${menuopen? 'translate-x-0' : 'translate-x-full '}`}><Navmenu/></div>
                   
                    
      
//                    </div>

//             </div>
//         </div>
//    </>
//     </>
//   )
// }

// export default Navbar



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

const UserNavbar = () => {
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

  return (
    <>
    <div className='flex relative sticky top-8 z-50 bg-white justify-between items-center font-serif px-3 py-3 lg:px-[56px] shadow-sm'>
      {/* Logo */}
      <Link to="/" onClick={() => setActiveDropdown(null)}>
        <h1 className='text-4xl text-gray-800 md:text-2xl whitespace-nowrap font-bold tracking-tight'>Elon Couture</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex px-[33px] items-center text-xs gap-6 text-gray-700 mr-auto'>
        {/* MEN */}
        <li 
          className='relative uppercase tracking-[0.1em] font-medium'
          onMouseEnter={() => setActiveDropdown("MEN")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/men" onClick={() => setActiveDropdown(null)} className='hover:underline underline-offset-4 decoration-2 cursor-pointer hover:text-black block'>
            MEN
          </Link>
          <div className={`fixed left-0 top-[84px] w-screen z-50 transition-all duration-300 ease-out ${
            activeDropdown === "MEN" ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
          }`}>
            <Dropdown type="MEN" closeDropdown={() => setActiveDropdown(null)} />
          </div>
        </li>

        {/* WOMEN */}
        <li 
          className='relative uppercase tracking-[0.1em] font-medium'
          onMouseEnter={() => setActiveDropdown("WOMEN")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/women" onClick={() => setActiveDropdown(null)} className='hover:underline underline-offset-4 decoration-2 cursor-pointer hover:text-black block'>
            WOMEN
          </Link>
          <div className={`fixed left-0 top-[84px] w-screen z-50 transition-all duration-300 ease-out ${
            activeDropdown === "WOMEN" ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
          }`}>
            <Dropdown type="WOMEN" closeDropdown={() => setActiveDropdown(null)} />
          </div>
        </li>
        
        {/* KIDS & BABY */}
        <li 
          className='relative  uppercase tracking-[0.1em] font-medium'
          onMouseEnter={() => setActiveDropdown("KIDS")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/Kids" onClick={() => setActiveDropdown(null)} className='hover:underline underline-offset-4 decoration-2 cursor-pointer hover:text-black block'>
            KIDS & BABY
          </Link>
          <div className={`fixed left-0 top-[84px] w-screen z-50 transition-all duration-300 ease-out ${
            activeDropdown === "KIDS" ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
          }`}>
            <Dropdown type="KIDS & BABY" closeDropdown={() => setActiveDropdown(null)} />
          </div>
        </li>

        {/* EXPLORE */}
        <li 
          className='relative  uppercase tracking-[0.1em] whitespace-nowrap font-medium'
          onMouseEnter={() => setActiveDropdown("EXPLORE")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link to="/explore" onClick={() => setActiveDropdown(null)} className='hover:underline underline-offset-4 decoration-2 cursor-pointer hover:text-black block'>
            EXPLORE
          </Link>
          <div className={`fixed left-0 top-[84px] w-screen z-50 transition-all duration-300 ease-out ${
            activeDropdown === "EXPLORE" ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
          }`}>
            <Dropdown type="EXPLORE" closeDropdown={() => setActiveDropdown(null)} />
          </div>
        </li>
      </ul>

      {/* Icons */}
      <div className='flex gap-5 items-center md:gap-7' >
      
        <button onClick={handleProfileClick} className='hidden md:block hover:scale-110 transition-transform'>
          <PermIdentityIcon />
        </button>
        
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

export default UserNavbar;
