import { Box, Container, Grid, Typography, Breadcrumbs, useMediaQuery, Link as MuiLink } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    box: {
        background: theme.palette.grey[100]
    },
}))

function BreadCrumb(props) {
    const history = useHistory()
    const classes = useStyles()
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
    return <Box py={3} px={isSmallScreen ? 1 : 6} className={classes.box}>
        <Container maxWidth="xl">
            <Grid container justify="space-between" alignItems="center">
                <Grid item lg={3} xs={12}>
                    <Typography variant="h5">Caclulator Project</Typography>
                </Grid>
                <Breadcrumbs>
                    <MuiLink onClick={() => history.push("/Portfolio/#hero")} style={{ cursor: "pointer" }}>
                        Home
                    </MuiLink>
                    <Typography>Calculator</Typography>
                </Breadcrumbs>
            </Grid>
        </Container>
    </Box>
}

export default BreadCrumb