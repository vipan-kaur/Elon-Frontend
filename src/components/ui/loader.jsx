import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = ({ message = "Loading Curated Collection..." }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        width: '100%',
        gap: 3
      }}
    >
      <CircularProgress sx={{ color: 'black' }} size={60} thickness={2} />
      <Typography 
        variant="body2" 
        sx={{ 
          letterSpacing: '0.2rem', 
          textTransform: 'uppercase', 
          color: 'text.secondary',
          fontSize: '0.7rem' 
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
