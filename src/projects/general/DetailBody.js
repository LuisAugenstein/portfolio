import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ReactMarkdown from 'react-markdown'
import React from 'react'
import Section from '../../Section'
import ImageSwiper from './ImageSwiper'
import ProjectCard from './ProjectCard'
import markdownText from './calculatorMarkdown'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: "25px"
    },
    markdown: {
        fontFamily: theme.typography.fontFamily
    }
}))

function DetailBody(props) {
    const classes = useStyles()
    return <Section id="portfolio-details">
        <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
                <ImageSwiper />
            </Grid>

            <Grid item md={4} xs={12} >
                <ProjectCard />
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