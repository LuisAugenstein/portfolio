import React from 'react';
import SidebarContent from './sidebar-content';
import SidebarToggleButton from './sidebar-toggle-button';
import { Drawer } from '@mui/material';
import { useSidebarOpen } from './use-sidebar-open';

export const SIDEBAR_WIDTH = '240px';

function Sidebar(): JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = useSidebarOpen();

  return (
    <>
      <SidebarToggleButton isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Drawer
        variant="persistent"
        open={isSidebarOpen}
        sx={{ '&>div': { minWidth: SIDEBAR_WIDTH } }}
      >
        <SidebarContent setSidebarOpen={setSidebarOpen} />
      </Drawer>
    </>
  );
}

export default Sidebar;
