import { Button, Box, Card, CardActions, CardContent, Divider, Typography, makeStyles, List, ListItem, Grid, CardHeader } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.background.default
    },
    divider: {
        backgroundColor: theme.palette.grey[600]
    }
}))

function ProjectCard(props) {
    const classes = useStyles()
    return <Card className={classes.card}>
        <CardHeader title="Calculcator Backend Parser" titleTypographyProps={{ align: "center" }} />
        <ListItem>
            <Typography>
                <strong>Project Idea</strong>: Implement a recursive descent parser to evaluate string expressions created with a calculator user interface.
            </Typography>
        </ListItem>

        <ListItem>
            <Typography>
                <strong>Learning Goals</strong>: better understand basic parser mechanisms and create a first C++ backend application
            </Typography>
        </ListItem>

        <ListItem>
            <Typography>
                <strong>Used Tools</strong>: C++ backend, React frontend
            </Typography>
        </ListItem>
        <ListItem>
            <Typography>
                <strong>Project URL</strong>: <a href="/#">www.example.com</a>
            </Typography>
        </ListItem>



        <CardActions>
            <Grid container alignItems="end" justify="center">
                <Box width="200px">
                    <Button color="primary" variant="contained" fullWidth >
                        Live Demo
                </Button>
                </Box>
            </Grid>
        </CardActions>

    </Card >
}

export default ProjectCard