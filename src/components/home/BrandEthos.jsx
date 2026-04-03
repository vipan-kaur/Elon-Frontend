import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const BrandEthos = () => {
    return (
        <section className="bg-black py-28 text-white">
            <Container maxWidth="lg" className="text-center px-4">
                <Typography 
                    variant="h3" 
                    className="mb-8 font-serif uppercase tracking-[0.25em]" 
                    sx={{ fontSize: { xs: '1.25rem', md: '2rem' }, fontWeight: 300 }}
                >
                    ELON COUTURE ESSENCE
                </Typography>
                
                <Box className="max-w-3xl mx-auto space-y-8 leading-relaxed">
                    <Typography 
                        variant="h1" 
                        className="font-serif italic leading-tight" 
                        sx={{ fontSize: { xs: '1.75rem', md: '3rem' }, fontWeight: 400 }}
                    >
                        "Fashion is not just clothes, it's a statement of existence."
                    </Typography>
                    
                    <Typography 
                        variant="body1" 
                        className="text-gray-400 font-light" 
                        sx={{ fontSize: '1.1rem', maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}
                    >
                        Every stitch in an Elon Couture garment tells a story of craftsmanship, exclusivity, and a relentless pursuit of beauty. We believe that true luxury lies in the details—from the selection of the finest Italian silks to the precision of a hand-finished hem.
                    </Typography>
                    
                    <Box className="pt-10">
                        <span className="inline-block border-b border-gray-600 pb-2 hover:border-white transition-all duration-300 uppercase tracking-widest cursor-pointer">
                            Our Heritage
                        </span>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default BrandEthos;
