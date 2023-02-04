import React from 'react';
import {
  Avatar,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import avatarImg from '../assets/sidebar/avatar.jpg';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';

export type SidebarContentProps = {
  setSidebarOpen: (open: boolean) => void;
};

function SidebarContent(props: SidebarContentProps): JSX.Element {
  const menuListItemsData = [
    {
      destination: '/#hero',
      icon: <HomeIcon />,
      text: 'Home',
    },
    {
      destination: '/#portfolio',
      icon: <AutoStoriesIcon className="icon" />,
      text: 'Portfolio',
    },
  ];

  const avatar = (
    <Box m={1} display="flex" justifyContent="center">
      <Avatar alt="avatar" src={avatarImg} sx={{ width: '120px', height: '120px' }} />
    </Box>
  );
  const name = (
    <ListItem>
      <ListItemText
        primary={
          <Typography variant="h5" style={{ color: 'white' }} textAlign='center'>
            Luis Augenstein
          </Typography>
        }
      />
    </ListItem>
  );

  const menuList = (
    <MenuList>
      {menuListItemsData.map((item) => (
        <Link
          sx={{ '&:hover svg': { color: 'primary.main' } }}
          onClick={() => props.setSidebarOpen(false)}
          underline="none"
          color="inherit"
          component={RouterLink}
          to={item.destination}
          key={item.text}
        >
          <MenuItem sx={{ minHeight: '48px !important'}}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        </Link>
      ))}
    </MenuList>
  );

  return (
    <Stack>
      {avatar}
      {name}
      {menuList}
    </Stack>
  );
}

export default SidebarContent;
