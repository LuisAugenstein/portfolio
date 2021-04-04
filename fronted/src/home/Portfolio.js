import { Box, Container, Divider, makeStyles, Typography, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
import { fade } from '@material-ui/core/styles/colorManipulator';

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
    media: {
        width: "100%",
    },
    card: {
        position: "relative",
        "&:hover #bluebox": {
            bottom: "0"
        }
    },
    actionarea: {
        "&:hover $focusHighlight": {
            opacity: "1"
        }
    },
    focusHighlight: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    bluebox: {
        width: "100%",
        height: "42px",
        bottom: "-42px",
        position: "absolute",
        transition: "all ease-in-out 0.3s",
        color: "#fff",
        fontSize: "28px",
        background: fade(theme.palette.primary.main, 0.75)
    }
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

    const projects = images.map(img => {
        return <Grid item md="4" sm="6" xs="12">
            <Link to={img.link}>
                <Card id="card" className={classes.card}>
                    <CardActionArea classes={{
                        root: classes.actionarea,
                        focusHighlight: classes.focusHighlight
                    }}>
                        <img class={classes.media} src={img.src} alt="" />
                    </CardActionArea>
                    <Grid container id="bluebox" className={"portfolio-links " + classes.bluebox} justify="center" alignItems="center">
                        <MdAdd />
                    </Grid>
                </Card>
            </Link>
        </Grid>
    })
    return <Box id="portfolio">
        <Container className={classes.container} maxWidth="xl">
            <Typography variant="h3" className={classes.title}>
                Portfolio
            </Typography>
            <Divider />

            <Grid container spacing="4" data-aos="fade-up" data-aos-delay="100">
                {projects}
            </Grid>

        </Container>
    </Box>
}

export default Portfolio