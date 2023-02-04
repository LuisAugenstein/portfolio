import React from 'react';
import { Box, Fab, Hidden } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

export type SidebarToggleButtonProps = {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

function SidebarToggleButton(props: SidebarToggleButtonProps): JSX.Element {
  return (
    <Hidden lgUp>
      <Box m={1} position={'fixed'} right={0}>
        <Fab
          size="medium"
          color="primary"
          onClick={() => props.setSidebarOpen(!props.isSidebarOpen)}
          sx={{ zIndex: '1300', color: 'white' }}
        >
          {props.isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </Fab>
      </Box>
    </Hidden>
  );
}

export default SidebarToggleButton;
