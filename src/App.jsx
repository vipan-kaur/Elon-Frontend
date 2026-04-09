import React from 'react'
import 'flowbite';
import Searchprovider from './searchprovider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Topbar from './components/layout/topbar'
import Dropdown from './components/ui/dropdown';
import Login from './components/pages/login';
import Footer from './components/layout/footer';
import Men from './components/pages/men/men';
import Menproducts from './components/pages/men/menproducts';
import View from './components/pages/men/view';
import Women from './components/pages/women/women';
import Womenproducts from './components/pages/women/womenproducts';
import Womenview from './components/pages/women/womenview';
import Cart from './components/pages/cart';
import ScrollToTop from './ScrollToTop';
import Checkout from './components/checkout';
import Success from './components/success';
import Wishlist from './components/wishlist';
import Slider from './components/ui/swiper';
import Kidproducts from './components/pages/kids/kidproducts';
import Kids from './components/pages/kids/kids';
import Home from './components/home/home';
import Admin from './admin/admin';
import AdminLogin from './admin/adminLogin';
import Allproducts from './admin/allproducts';
import Profile from './components/pages/profile';
import Navbar from './components/layout/navbar';
import UserNavbar from './components/layout/usernavbar';
import AdminNavbar from './components/layout/adminnavbar';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';



const App = () => {
  return (
    <>

      <Searchprovider>
        <BrowserRouter>
          <ScrollToTop />
          <Topbar />
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='/admin' element={
              <ProtectedAdminRoute>
                <Admin />
              </ProtectedAdminRoute>
            } />
            <Route path='/Allproducts' element={
              <ProtectedAdminRoute>
                <Allproducts />
              </ProtectedAdminRoute>
            } />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/men' element={<Men />} />
            <Route path='/menproducts' element={<Menproducts />} />
            <Route path="/view/:id" element={<View />} />
            <Route path='/success' element={<Success />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/dropdown' element={<Dropdown />} />
            {/* women section */}
            <Route path='/women' element={<Women />} />
            <Route path='/womenproducts' element={<Womenproducts />} />
            <Route path="/womenview/:id" element={<Womenview />} />
            <Route path='/swiper' element={<Slider />} />
            <Route path='/Kids' element={<Kids />} />
            <Route path="/Kidproducts" element={<Kidproducts />} />
            <Route path='/explore' element={<Allproducts />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/usernavbar' element={<UserNavbar/>}/>
            <Route path='/adminnavbar' element={<AdminNavbar/>}/>

          </Routes>
          <Footer />
        </BrowserRouter>
      </Searchprovider>

    </>
  )
}

export default App
