import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/home/home';
import Sphero from './pages/single-project/Sphero';
import Asuro from './pages/single-project/Asuro';
import HskTrainer from './pages/single-project/hsk-trainer';
import Sidebar, { SIDEBAR_WIDTH } from './sidebar/sidebar';
import { Box } from '@mui/material';

const WithSidebar = (): JSX.Element => (
  <>
    <Sidebar />
    <Box sx={{ paddingLeft: { lg: SIDEBAR_WIDTH } }}>
      <Outlet />
    </Box>
  </>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WithSidebar />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sphero', element: <Sphero /> },
      { path: '/asuro', element: <Asuro /> },
      { path: '/hsk-trainer', element: <HskTrainer /> },
    ],
  },
]);
