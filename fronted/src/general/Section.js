import React from 'react'
import { Box, Container, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    box: {
        backgroundColor: theme.palette.background.default
    }
}))


function Section({ children, id }) {
    const classes = useStyles()
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
    return <Box id={id} px={isSmallScreen ? 1 : 6} className={classes.box}>
        <Container maxWidth="xl">
            {children}
        </Container>
    </Box>
}

export default Section