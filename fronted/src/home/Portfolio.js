import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import SingleProject from './SingleProject'

const useStyles = makeStyles(theme => ({
    box: {
        paddingTop: "60px",
        backgroundColor: theme.palette.background.default
    }
}))

function Portfolio(props) {

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

    const projects = images.map(img => <SingleProject src={img.src} link={img.link} />)
    const classes = useStyles()
    return <Box id="portfolio" className={classes.box}>
        <Container>
            <div class="section-title">
                <h2>Portfolio</h2>
            </div>

            <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                {projects}
            </div>

        </Container>
    </Box>
}

export default Portfolio