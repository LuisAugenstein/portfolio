import React, { useEffect, useState } from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import Fab from '@material-ui/core/Fab'
import makeStyles from '@material-ui/core/styles/makeStyles'

function BacktoTopButton({ isSidebarOpen }) {
    const [visibilityStr, setVisibilityStr] = useState("hidden");

    useEffect(() => {
        window.onscroll = () => {
            setVisibilityStr((window.scrollY > 100) ? "visible" : "hidden");
        }
    }, []);

    const fabStyle = makeStyles(theme => ({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            visibility: isSidebarOpen ? visibilityStr : "hidden",
            zIndex: "1"
        }
    }))
    const classes = fabStyle()


    return <Fab color="primary"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={classes.fab}>
        <BsArrowUpShort fontSize="32px" />
    </Fab>
}

export default BacktoTopButton