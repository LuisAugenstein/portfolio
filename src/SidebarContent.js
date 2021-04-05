import React from 'react'
import { useHistory } from "react-router-dom"
import { BiHome, BiBookContent } from 'react-icons/bi'
import { List, ListItem, ListItemIcon, ListItemAvatar, Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

import avatarImg from './img/profile-img.jpg'

const useStyles = makeStyles(theme => ({
    img: {
        width: "120px",
        height: "120px",
        border: "8px solid #2c2f3f",
    },
    btn: {
        cursor: "pointer",
        '&:hover .icon': {
            color: theme.palette.primary.main
        },
        '& .icon': {
            color: "gray",
            fontSize: "30px",
            paddingBottom: "5px"
        }
    },
}))


function SidebarContent({ setSidebarOpen }) {
    const history = useHistory()
    const classes = useStyles();

    const navItemData = [
        { destination: "/#hero", icon: <BiHome className="icon" />, text: "Home" },
        { destination: "/#portfolio", icon: <BiBookContent className="icon" />, text: "Portfolio" }
    ]

    function linkClicked(destination) {
        if (document.body.clientWidth < 1200) {
            setSidebarOpen(false)
        }
        history.push(destination)
    }

    const navItems = navItemData.map(e => {
        return <ListItem button key={e.text} onClick={() => linkClicked(e.destination)} className={classes.btn}>
            <ListItemIcon>
                {e.icon}
            </ListItemIcon>
            <Typography style={{ color: "white", fontSize: "17px" }}>
                {e.text}
            </Typography>
        </ListItem>
    });

    return (
        <List className="text-white" >
            <ListItem >
                <Grid container justify="center">
                    <ListItemAvatar >
                        <Avatar alt="avatar" src={avatarImg} className={classes.img} />
                    </ListItemAvatar>
                </Grid>
            </ListItem>
            <ListItem style={{ justifyContent: "center" }}>
                <Typography variant="h5" style={{ color: "white" }}>
                    Luis Augenstein
                </Typography>
            </ListItem>
            {navItems}
        </List>
    );
}

export default SidebarContent