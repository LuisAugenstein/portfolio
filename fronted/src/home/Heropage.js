import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from '../img/hero-bg.jpg'


const useStyles = makeStyles(theme => ({
    box: {
        width: "100%",
        height: "100vh",
        background: `url(${Image}) top center`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: theme.palette.common.white
    }
}))

function Heropage(props) {
    const classes = useStyles()
    return <Box id="hero" className={classes.box}>
        <Typography data-aos="fade-in" variant="h1" className={classes.text}>
            Luis Augenstein
        </Typography>
    </Box>
}

export default Heropage