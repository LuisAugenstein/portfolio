import { makeStyles, Typography, Grid, useMediaQuery } from '@material-ui/core'
import React from 'react'
import SingleProject from './SingleProject';
import Section from '../Section'

// import Image1 from "../img/portfolio/portfolio-1.png"
import Image2 from "../img/portfolio/portfolio-2.png"
import Image3 from "../img/portfolio/portfolio-3.png"
// import Image4 from "../img/portfolio/portfolio-4.jpg"
// import Image5 from "../img/portfolio/portfolio-5.jpg"
// import Image6 from "../img/portfolio/portfolio-6.jpg"
// import Image7 from "../img/portfolio/portfolio-7.jpg"
// import Image8 from "../img/portfolio/portfolio-8.jpg"
// import Image9 from "../img/portfolio/portfolio-9.jpg"

const useStyles = makeStyles(theme => ({
    title: {
        padding: "50px 0",
        "&::after": {
            content: "''",
            position: "absolute",
            display: "block",
            width: "50px",
            height: "3px",
            marginTop: "15px",
            background: theme.palette.primary.main
        }
    },
}))

function Portfolio(props) {
    const classes = useStyles()
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));


    const images = [
        //{ file: Image1, link: "/calculator" },
        { file: Image2, link: "/sphero" },
        { file: Image3, link: "/beautiful-maths" },
        //{ file: Image4, link: "/" },
        //{ file: Image5, link: "/" },
        //{ file: Image6, link: "/" },
        //{ file: Image7, link: "/" },
        //{ file: Image8, link: "/" },
        //{ file: Image9, link: "/" },
    ]

    return <Section id="portfolio">
        <Typography variant={isSmallScreen ? "h4" : "h3"} className={classes.title}>
            Portfolio
        </Typography>
        <Grid container spacing={4} data-aos="fade-up" data-aos-delay="100">
            {images.map((img, idx) => <SingleProject imgFile={img.file} link={img.link} key={idx} />)}
        </Grid>
    </Section>
}

export default Portfolio