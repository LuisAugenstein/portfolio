import React, { useEffect, useState } from 'react'
import { Drawer, Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles'
import { BsX, BsList } from 'react-icons/bs'
import Fab from '@material-ui/core/Fab'
import SidebarContent from './SidebarContent';
import BacktoTopButton from './BacktoTopButton';

const useStyles = makeStyles(theme => ({
    paper: {
        width: "300px",
        padding: "0 15px",
        backgroundColor: theme.palette.grey[900]
    },
    fab: {
        position: "fixed",
        top: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: "2"
    }
}))

function Sidebar(props) {
    const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1280);
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        window.onresize = () => {
            if ((document.body.clientWidth < theme.breakpoints.values.lg && isSidebarOpen)
                || (document.body.clientWidth > theme.breakpoints.values.lg && !isSidebarOpen)) {
                setSidebarOpen(!isSidebarOpen)
            }
        }
    });

    return <div>
        <Hidden lgUp>
            <Fab color="primary"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className={classes.fab}>
                {isSidebarOpen ? <BsX fontSize="25px" /> : <BsList fontSize="25px" />}
            </Fab>
        </Hidden>
        <Drawer open={isSidebarOpen}
            variant="persistent"
            classes={{ paper: classes.paper }}>
            <SidebarContent setSidebarOpen={setSidebarOpen} />
        </Drawer>
        <BacktoTopButton isSidebarOpen={isSidebarOpen} />
    </div>
}

export default Sidebar