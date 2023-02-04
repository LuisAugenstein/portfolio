import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from '../../assets/home/hero-background-large.jpg';

function HeroSection(): JSX.Element {
  return (
    <Box
      id="hero"
      sx={{
        backgroundAttachment: { lg: 'fixed' },
        width: '100%',
        height: '100vh',
        background: `url(${Image}) top center`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'end'
      }}
    >
      <Typography sx={{ typography: { xs: 'h3', sm: 'h2', md: 'h1' }, mt: '200px', mr: {xs: '20px', sm: '50px'} }}>Luis Augenstein</Typography>
    </Box>
  );
}

export default HeroSection;
