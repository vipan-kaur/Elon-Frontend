import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import menImg1 from '../../assets/menpg/menslide1.png';
import menImg2 from '../../assets/menpg/menslide2.png'
import menImg3 from '../../assets/menpg/menslide3.png'
import womenImg1 from '../../assets/dress.jpeg';
import womenImg2 from '../../assets/dresshome.jpeg';
import kidsImg1 from '../../assets/kidshomme.jpeg';
import kidsImg2 from '../../assets/kidhome.jpeg';
import exploreImg1 from '../../assets/bag.jpeg';
import exploreImg2 from '../../assets/shoe.jpeg';

const Dropdown = ({ type = "MEN", closeDropdown }) => {
  const h3 = "absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-md font-serif italic"
  
  const getContent = () => {
    switch (type) {
      case "WOMEN":
        return {
          title: "Women's Collection",
          link: "/womenproducts",
          items: [
            { img: womenImg1, label: "Evening Wear", path: "/womenproducts?subCategory=evening wear" },
            { img: womenImg2, label: "Dresses", path: "/womenproducts?subCategory=dresses" },
            { img: womenImg1, label: "Accessories", path: "/womenproducts?subCategory=handbags" },
            { img: womenImg2, label: "New Season", path: "/womenproducts" },
          ]
        }
      case "KIDS & BABY":
        return {
          title: "Kids & Baby",
          link: "/Kidproducts",
          items: [
            { img: kidsImg1, label: "Baby Boy", path: "/Kidproducts?subCategory=boy" },
            { img: kidsImg2, label: "Baby Girl", path: "/Kidproducts?subCategory=girl" },
            { img: kidsImg1, label: "Accessories", path: "/Kidproducts?subCategory=accessories" },
            { img: kidsImg2, label: "Gifts", path: "/Kidproducts" },
          ]
        }
      case "EXPLORE":
        return {
          title: "Explore All",
          link: "/explore",
          items: [
            { img: exploreImg1, label: "Bags", path: "/womenproducts?subCategory=handbags" },
            { img: exploreImg2, label: "Shoes", path: "/menproducts?subCategory=footwear" },
            { img: exploreImg1, label: "New Arrivals", path: "/Allproducts" },
            { img: exploreImg2, label: "Bestsellers", path: "/Allproducts" },
          ]
        }
      default: // MEN
        return {
          title: "Men's Collection",
          link: "/menproducts",
          items: [
            { img: menImg1, label: "Summer Edition", path: "/menproducts?subCategory=casual" },
            { img: menImg2, label: "Footwear", path: "/menproducts?subCategory=footwear" },
            { img: menImg3, label: "Fragrances", path: "/menproducts?subCategory=accessories" },
            { img: menImg1, label: "Essentials", path: "/menproducts" },
          ]
        }
    }
  }

  const { title, link, items } = getContent();

  return (
    <div className="w-screen bg-white shadow-2xl flex border-t border-gray-100 h-[450px]">
      {/* LEFT MENU */}
      <div className="w-1/4 bg-neutral-50 px-16 py-12">
        <Typography variant="overline" className="text-gray-400 tracking-[.3em] font-bold mb-8 block">
            CATEGORIES
        </Typography>
        <ul className="flex flex-col gap-4 text-sm font-light text-gray-700">
          <Link to={link} onClick={closeDropdown}><li className="hover:text-black hover:underline underline-offset-4 cursor-pointer transition-colors">Explore All</li></Link>
          <Link to={link} onClick={closeDropdown}><li className="hover:text-black hover:underline underline-offset-4 cursor-pointer transition-colors">New Arrivals</li></Link>
          <Link to={link} onClick={closeDropdown}><li className="hover:text-black hover:underline underline-offset-4 cursor-pointer transition-colors">Best Sellers</li></Link>
          <Link to={link} onClick={closeDropdown}><li className="hover:text-black hover:underline underline-offset-4 cursor-pointer transition-colors">Limited Edition</li></Link>
          <Link to={link} onClick={closeDropdown}><li className="hover:text-black hover:underline underline-offset-4 cursor-pointer transition-colors">Gift Guide</li></Link>
        </ul>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="w-3/4 p-12">
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
            <Typography variant="h5" className="font-serif italic text-black">{title}</Typography>
            <Link to={link} onClick={closeDropdown} className="text-[10px] uppercase tracking-[.2em] font-medium hover:text-neutral-500 transition-all border-b border-black pb-1">View All</Link>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <Link key={idx} to={item.path} onClick={closeDropdown} className="block group/item">
              <div className='relative overflow-hidden cursor-pointer aspect-[3/4]'>
                  <img 
                      src={item.img} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110" 
                      alt={item.label}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover/item:bg-black/30 transition-all"></div>
                  <h3 className={h3}>{item.label}</h3>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-500">
                      <span className="text-[10px] text-white underline underline-offset-4 tracking-[.2em] uppercase">Shop Now</span>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown;
