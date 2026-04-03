import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Box, Divider, IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ bgcolor: '#111', color: '#fff', pt: 10, pb: 6 }}>
            <Container maxWidth="xl">
                <Grid container spacing={8}>
                    {/* BRAND SECTION */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h4" className="font-serif mb-6" sx={{ letterSpacing: '0.1rem' }}>
                            Elon Couture
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#aaa', mb: 4, lineHeight: 1.8, maxWidth: '300px' }}>
                            Redefining modern elegance through timeless craftsmanship and sustainable luxury. Join us in our journey of style.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton sx={{ color: '#fff' }}><InstagramIcon fontSize="small" /></IconButton>
                            <IconButton sx={{ color: '#fff' }}><TwitterIcon fontSize="small" /></IconButton>
                            <IconButton sx={{ color: '#fff' }}><FacebookIcon fontSize="small" /></IconButton>
                            <IconButton sx={{ color: '#fff' }}><PinterestIcon fontSize="small" /></IconButton>
                        </Box>
                    </Grid>

                    {/* QUICK LINKS */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" className="uppercase font-bold mb-6" sx={{ fontSize: '0.75rem', letterSpacing: '0.2rem' }}>
                            COLLECTIONS
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            <Box component="li" sx={{ mb: 2 }}><Link to="/menproducts" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Men</Link></Box>
                            <Box component="li" sx={{ mb: 2 }}><Link to="/womenproducts" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Women</Link></Box>
                            <Box component="li" sx={{ mb: 2 }}><Link to="/Kidproducts" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Kids</Link></Box>
                            <Box component="li" sx={{ mb: 2 }}><Link to="/explore" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">Accessories</Link></Box>
                        </Box>
                    </Grid>

                    {/* CUSTOMER CARE */}
                    <Grid item xs={6} md={2}>
                        <Typography variant="subtitle1" className="uppercase font-bold mb-6" sx={{ fontSize: '0.75rem', letterSpacing: '0.2rem' }}>
                            SUPPORT
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            <Box component="li" sx={{ mb: 2 }}><span className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest cursor-pointer">Contact Us</span></Box>
                            <Box component="li" sx={{ mb: 2 }}><span className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest cursor-pointer">Shipping</span></Box>
                            <Box component="li" sx={{ mb: 2 }}><span className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest cursor-pointer">Returns</span></Box>
                            <Box component="li" sx={{ mb: 2 }}><span className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest cursor-pointer">FAQ</span></Box>
                        </Box>
                    </Grid>

                    {/* STORE INFO */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="subtitle1" className="uppercase font-bold mb-6" sx={{ fontSize: '0.75rem', letterSpacing: '0.2rem' }}>
                            THE MAGAZINE
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#aaa', mb: 3, fontStyle: 'italic' }}>
                            "Style is a way to say who you are without having to speak."
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '0.1rem' }}>
                            ELON COUTURE FLAGSHIP STORE<br />
                            7th Avenue, New York, NY 10018
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 8, borderColor: '#333' }} />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography variant="caption" sx={{ color: '#666', letterSpacing: '0.1rem' }}>
                        © {currentYear} ELON COUTURE. ALL RIGHTS RESERVED.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 4 }}>
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest cursor-pointer hover:text-gray-400">Privacy Policy</span>
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest cursor-pointer hover:text-gray-400">Terms of Service</span>
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest cursor-pointer hover:text-gray-400">Sitemap</span>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
