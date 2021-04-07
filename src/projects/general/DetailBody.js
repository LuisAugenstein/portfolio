import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ReactMarkdown from 'react-markdown'
import React from 'react'
import Section from '../../Section'
import ImageSwiper from './ImageSwiper'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: "25px"
    },
    markdown: {
        fontFamily: theme.typography.fontFamily
    }
}))

function DetailBody({ images, markdownText, children }) {
    const classes = useStyles()
    return <Section>
        <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
                <ImageSwiper images={images} />
            </Grid>

            <Grid item md={4} xs={12} >
                {children}
            </Grid>

            <Grid item xs={12} className={classes.paper}>
                <ReactMarkdown className={classes.markdown}>
                    {markdownText}
                </ReactMarkdown>
            </Grid>
        </Grid>
    </Section>

}

export default DetailBody