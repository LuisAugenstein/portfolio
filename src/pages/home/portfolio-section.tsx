import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import spheroImage from '../../assets/home/project-sphero.png';
import asuroImage from '../../assets/home/project-asuro.png';
// import hskTrainerImage from '../../assets/projects/hsk-trainer.jpg';
import SingleProject, { ProjectData } from './single-project';

function PortfoliosSection(): JSX.Element {
  const projects: ProjectData[] = [
    { image: spheroImage, path: '/sphero', title: 'Sphero Mini - Controller' },
    { image: asuroImage, path: '/asuro', title: 'Asuro - LineFollower' },
    // { image: hskTrainerImage, path: '/hsk-trainer', title: 'HSK - Trainer' },
  ];

  return (
    <Box padding='3rem 4rem 4rem 4rem' id="portfolio">
      <Typography
        sx={{
          typography: 'h3',
          paddingBottom: '3rem',
          fontWeight: '300 !important',
          '&::after': {
            content: "''",
            position: 'absolute',
            display: 'block',
            width: '50px',
            height: '3px',
            marginTop: '15px',
            background: 'green',
          },
        }}
      >
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid item md={4} sm={6} xs={12} key={idx}>
            <SingleProject project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PortfoliosSection;
