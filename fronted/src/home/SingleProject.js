import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, CardActionArea, makeStyles } from '@material-ui/core'
import { MdAdd } from 'react-icons/md'
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
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

function SingleProject({ src, link }) {
    const classes = useStyles()
    return <Grid item md="4" sm="6" xs="12">
        <Link to={link}>
            <Card id="card" className={classes.card}>
                <CardActionArea classes={{
                    root: classes.actionarea,
                    focusHighlight: classes.focusHighlight
                }}>
                    <img class={classes.media} src={src} alt="" />
                </CardActionArea>
                <Grid container id="bluebox" className={"portfolio-links " + classes.bluebox} justify="center" alignItems="center">
                    <MdAdd />
                </Grid>
            </Card>
        </Link>
    </Grid>
}

export default SingleProject