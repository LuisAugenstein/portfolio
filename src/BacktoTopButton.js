import React, { useEffect, useState } from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import Fab from '@material-ui/core/Fab'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useMediaQuery } from '@material-ui/core';

function BacktoTopButton({ isSidebarOpen, setSidebarOpen }) {
    const [visibilityStr, setVisibilityStr] = useState("hidden");
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

    useEffect(() => {
        window.onscroll = () => {
            setVisibilityStr((window.scrollY > 100) ? "visible" : "hidden");
        }
    }, []);

    const useStyles = makeStyles(theme => ({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            visibility: isSidebarOpen ? visibilityStr : "hidden",
            zIndex: "1",
            color: "white"
        }
    }))

    function action() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        if (isSmallScreen) {
            setSidebarOpen(false)
        }
    }

    const classes = useStyles()
    return <Fab color="primary"
        onClick={action}
        className={classes.fab}>
        <BsArrowUpShort fontSize="32px" />
    </Fab>
}

export default BacktoTopButton