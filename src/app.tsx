import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar, { SIDEBAR_WIDTH } from './sidebar/sidebar';
import { useScrollHandler } from './hooks/use-scroll-handler';

function App(): JSX.Element {
  useScrollHandler();
  return (
    <>
      <Sidebar />
      <Box sx={{ paddingLeft: { lg: SIDEBAR_WIDTH } }}>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
