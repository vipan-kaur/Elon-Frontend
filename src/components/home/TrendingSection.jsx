import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const TrendingSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/products");
                const result = await response.json();
                setProducts(result.product?.slice(0, 4) || []);
            } catch (error) {
                console.error("Error fetching trending products:", error);
            }
        };
        fetchTrending();
    }, []);

    if (products.length === 0) return null;

    return (
        <section className="py-24 bg-white">
            <Container maxWidth="xl">
                <Box className="flex justify-between items-end mb-12">
                    <Box>
                        <Typography variant="overline" sx={{ letterSpacing: '0.3rem', color: 'text.secondary' }}>
                            SELECTED FOR YOU
                        </Typography>
                        <Typography variant="h2" className="font-serif mt-2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 400 }}>
                            Seasonal Trending
                        </Typography>
                    </Box>
                    <Link to="/explore">
                        <button className="hidden md:block border-b border-black pb-1 uppercase tracking-widest text-xs hover:text-neutral-500 hover:border-neutral-500 transition-all font-medium">
                            View All Collections
                        </button>
                    </Link>
                </Box>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, idx) => (
                        <motion.div 
                            key={product._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/view/${product._id}`}>
                                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100 mb-6">
                                    <img 
                                        src={`http://localhost:3000/uploads/${product.images?.[0]}`} 
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {product.isNew && (
                                        <span className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-[10px] tracking-widest uppercase shadow-sm">
                                            New Arrival
                                        </span>
                                    )}
                                </div>
                                <Typography variant="body2" className="text-neutral-500 uppercase tracking-widest text-[10px] mb-1">
                                    Elon Couture
                                </Typography>
                                <Typography variant="h6" className="font-serif mb-2 text-sm md:text-base group-hover:text-neutral-500 transition-colors">
                                    {product.title}
                                </Typography>
                                <Typography variant="body1" className="font-medium text-sm text-black">
                                    ₹{product.price.toLocaleString()}
                                </Typography>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default TrendingSection;
