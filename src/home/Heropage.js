import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from '../img/hero-bg.jpg'
import { useMediaQuery } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    box: {
        width: "100%",
        height: "100vh",
        background: `url(${Image}) top center`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up('lg')]: {
            backgroundAttachment: "fixed"
        }
    },
    text: {
        color: theme.palette.common.white,
        marginTop: "50px"
    }
}))

function Heropage(props) {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const classes = useStyles()
    return <Box id="hero" className={classes.box}>
        <Typography data-aos="fade-in" variant={isSmallScreen ? "h3" : "h1"} className={classes.text}>
            Luis Augenstein
        </Typography>
    </Box>
}

export default Heropage