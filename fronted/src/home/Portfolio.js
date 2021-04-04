import { Box, Container, makeStyles, Typography, Grid } from '@material-ui/core'
import React from 'react'
import SingleProject from './SingleProject';

const useStyles = makeStyles(theme => ({
    container: {
        padding: "0 50px"
    },
    title: {
        padding: "50px 0",
        "&::after": {
            content: "''",
            position: "absolute",
            display: "block",
            width: "50px",
            height: "3px",
            background: theme.palette.primary.main
        }
    },
}))

function Portfolio(props) {
    const classes = useStyles()

    const images = [
        { src: "img/portfolio/portfolio-1.png", link: "/calculator" },
        { src: "img/portfolio/portfolio-2.jpg", link: "/" },
        { src: "img/portfolio/portfolio-3.jpg", link: "/" },
        { src: "img/portfolio/portfolio-4.jpg", link: "/" },
        { src: "img/portfolio/portfolio-5.jpg", link: "/" },
        { src: "img/portfolio/portfolio-6.jpg", link: "/" },
        { src: "img/portfolio/portfolio-7.jpg", link: "/" },
        { src: "img/portfolio/portfolio-8.jpg", link: "/" },
        { src: "img/portfolio/portfolio-9.jpg", link: "/" },
    ]

    return <Box id="portfolio">
        <Container className={classes.container} maxWidth="xl">
            <Typography variant="h3" className={classes.title}>
                Portfolio
            </Typography>
            <Grid container spacing="4" data-aos="fade-up" data-aos-delay="100">
                {images.map(img => <SingleProject src={img.src} link={img.link} />)}
            </Grid>
        </Container>
    </Box>
}

export default Portfolio