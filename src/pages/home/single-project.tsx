import React from 'react';
import { Box, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { alpha } from '@mui/material';

export type ProjectData = {
  image: string;
  path: string;
  title: string;
};

export type SingleProjectProps = {
  project: ProjectData;
};

function SingleProject({ project }: SingleProjectProps): JSX.Element {
  return (
    <Link to={project.path}>
      <Card
        sx={{
          position: 'relative',
          height: '100%',
          '&:hover': {
            div: {
              bottom: '0',
            },
          },
        }}
      >
        <img width="100%" height="100%" src={project.image} alt={project.title} />
        <Box
          sx={(theme) => ({
            width: '100%',
            height: '42px',
            bottom: '-42px',
            position: 'absolute',
            transition: 'all ease-in-out 0.3s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: alpha(theme.palette.primary.main, 0.75),
          })}
        >
          <AddIcon />
        </Box>
      </Card>
    </Link>
  );
}

export default SingleProject;
