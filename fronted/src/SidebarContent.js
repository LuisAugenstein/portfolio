import React from 'react'
import { useHistory } from "react-router-dom"
import { BiHome, BiBookContent } from 'react-icons/bi'
import { ListItemText, List, ListItem, ListItemIcon, ListItemAvatar, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    img: {
        width: "120px",
        height: "120px",
        border: "8px solid #2c2f3f",
    },
    text: {
        fontSize: "30px",
        textAlign: "center"
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
            <ListItemText primary={e.text} />
        </ListItem>
    });

    return (
        <List className="text-white" >
            <ListItem className="justify-content-center">
                <ListItemAvatar >
                    <Avatar src="img/profile-img.jpg" className={classes.img} />
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemText primary="Luis Augenstein" classes={{ primary: classes.text }} />
            </ListItem>
            {navItems}
        </List>
    );
}

export default SidebarContent