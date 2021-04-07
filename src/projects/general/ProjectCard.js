import { Button, Box, Card, CardActions, CardContent, Divider, Typography, makeStyles, ListItem, Grid, Link as MuiLink } from '@material-ui/core'
import React from 'react'
import { AiFillGithub } from "react-icons/ai";

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: theme.palette.background.default
    },
    divider: {
        backgroundColor: theme.palette.grey[600],
        marginTop: "10px"
    }
}))

function ProjectCard({ title, idea, goal, tools, githubUrl, btnText, btnUrl }) {
    const classes = useStyles()
    return <Card className={classes.card}>
        <CardContent>
            <Typography align="center" variant="h5">
                <strong>{title}</strong>
            </Typography>
            <Divider className={classes.divider} />
        </CardContent>

        <ListItem>
            <Typography>
                <strong>Project Idea</strong>: {" " + idea}
            </Typography>
        </ListItem>

        <ListItem>
            <Typography>
                <strong>Learning Goals</strong>:{" " + goal}
            </Typography>
        </ListItem>

        <ListItem>
            <Typography>
                <strong>Used Tools</strong>:{" " + tools}
            </Typography>
        </ListItem>
        <ListItem>

            <AiFillGithub style={{ fontSize: "25px" }} />
            <Typography>
                {": "}
                <MuiLink style={{ cursor: "pointer" }} onClick={() => window.open(githubUrl, "_blank")}>
                    {"Github project"}
                </MuiLink>
            </Typography>
        </ListItem>



        <CardActions>
            <Grid container justify="center">
                <Box width="200px">
                    <Button color="primary" variant="contained" fullWidth onClick={() => window.open(btnUrl, "_blank")}>
                        {btnText}
                    </Button>
                </Box>
            </Grid>
        </CardActions>

    </Card >
}

export default ProjectCard