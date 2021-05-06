import React from 'react'
import DetailBody from './general/DetailBody'
import BreadCrumb from './general/Breadcrumb'
import ScrollHandler from '../ScrollHandler'

import Image1 from "../img/portfolio/Asuro1.png"
import ProjectCard from './general/ProjectCard'

const markdownText = `
# Asuro-LineFollower
---
This project was created during the class "Basispraktikum: Mobile Roboter" at the KIT within two weeks. 
In the first week we soldered the Asuro robot kit together and learned a few basics about control theory and
electrical circuits. The Asuro uses an ATmega8L microcontroller which can be programmed in C. 
The second week's task was to program the Asuro to beat a given parkour. This parkour consisted of 
a black line on white ground with additional obstacles. To be able to beat that parkour the 
Asuro was equipped with two light sensors, six touch sensors, and visual wheel encoders.  
`

function Asuro(props) {

    const images = [Image1];

    return <main id="main">
        <ScrollHandler>
            <BreadCrumb title="Asuro" />
            <DetailBody images={images} markdownText={markdownText}>
                <ProjectCard
                    title="Asuro-LineFollower"
                    idea="enable the Asuro to beat the parkour"
                    goal="learn about low level microcontroller porgramming"
                    tools="C, Asuro-library"
                    githubUrl="https://github.com/LuisAugenstein/Asuro-LineFollower"
                    btnText="Demonstration Video"
                    btnUrl="https://www.youtube.com/watch?v=6IGgH8EBQsc&t=11s"
                />
            </DetailBody>
        </ScrollHandler>
    </main>
}

export default Asuro