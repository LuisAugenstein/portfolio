import React, { useEffect } from 'react'
import { BsX, BsList } from 'react-icons/bs'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core';

function MobileButton({ isSidebarOpen, setSidebarOpen }) {

    useEffect(() => {
        window.onresize = () => {
            if ((document.body.clientWidth < 1200 && isSidebarOpen) ||
                (document.body.clientWidth > 1200 && !isSidebarOpen)) {
                setSidebarOpen(!isSidebarOpen);
            }
        }
        let header = document.getElementById('header')
        header.style.left = isSidebarOpen ? "0px" : "-300px"
    }, [isSidebarOpen]);

    const fabStyle = makeStyles(theme => ({
        fab: {
            position: 'fixed',
            top: theme.spacing(2),
            right: theme.spacing(2),
        }
    }))
    const classes = fabStyle()

    return <Fab color="primary"
        onClick={() => setSidebarOpen(!isSidebarOpen)} className={classes.fab + " d-xl-none"}>
        {isSidebarOpen ? <BsX font-size="25px" /> : <BsList font-size="25px" />}
    </Fab>


}

export default MobileButton