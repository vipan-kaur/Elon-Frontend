import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const categories = [
  {
    title: "Women's Collection",
    subtitle: "Elegance Redefined",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    link: "/womenproducts"
  },
  {
    title: "Men's Collection",
    subtitle: "The Modern Gentleman",
    image: "https://images.unsplash.com/photo-1516257984877-a03a80479175?q=80&w=2070&auto=format&fit=crop",
    link: "/menproducts"
  },
  {
    title: "Accessories",
    subtitle: "Complete The Look",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
    link: "/allproducts"
  }
];

const CategoryHighlights = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <Typography
          variant="h2"
          className="text-center mb-16 font-serif"
          sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 300 }}
        >
          Curated Collections
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden cursor-pointer h-[600px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-end pb-12 text-white">
                <Typography variant="h5" className="mb-2 uppercase tracking-widest">{cat.title}</Typography>
                <Typography variant="body1" className="mb-6 italic">{cat.subtitle}</Typography>
                <Link to={cat.link}>
                  <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                    DISCOVER
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryHighlights;
