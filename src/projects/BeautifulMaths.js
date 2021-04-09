import React from 'react'
import DetailBody from './general/DetailBody'
import BreadCrumb from './general/Breadcrumb'
import ScrollHandler from '../ScrollHandler'

import Image1 from "../img/portfolio/BeautifulMaths1.png"
import ProjectCard from './general/ProjectCard'

const markdownText = `
# Beautiful Maths - Collection
---
This project is a collection of several visual mini projects. The single project ideas are mainly unrelated. 
Whenever I stumble across a new algorithm or just something that looks cool I add it to this collection. 
The main inspirations came from various classes at my university but also from youtuber's like for example 
The coding train.   
`

function Sphero(props) {

    const images = [Image1]

    return <main id="main">
        <ScrollHandler>
            <BreadCrumb title="Beautiful Maths" />
            <DetailBody images={images} markdownText={markdownText}>
                <ProjectCard
                    title="Beautiful Maths - Collection"
                    idea="collect and visualize various algorithms and mathematical ideas"
                    goal="just be creative"
                    tools="React, p5.js"
                    githubUrl="https://github.com/LuisAugenstein/Beautiful-Maths"
                    btnText="Live Demo"
                    btnUrl="https://beautiful-maths.netlify.app/"
                />
            </DetailBody>
        </ScrollHandler>
    </main>
}

export default Sphero