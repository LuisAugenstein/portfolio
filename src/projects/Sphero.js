import React from 'react'
import DetailBody from './general/DetailBody'
import BreadCrumb from './general/Breadcrumb'
import ScrollHandler from '../ScrollHandler'

import Image1 from "../img/portfolio/Sphero1.jpg"
import Image2 from "../img/portfolio/Sphero2.png"
import ProjectCard from './general/ProjectCard'

const markdownText = `
# Sphero Mini - Controller
---
This project was created during the class "Mobile Computing und Internet der Dinge" at the KIT. 
The task was to create an android app that makes use of the esense earables. 
The earables are Bluetooth earbuds with additional accelerometer and gyroscope sensors. 
My idea was to use the earables as a fun way to control the Sphero Mini robot ball. 
Originally the Sphero Mini is meant as a toy to help kids learn to program. 
So I thought it should be quite easy to connect to the Sphero Mini with an own app. 
Unfortunately, there was no documentation about the Bluetooth Low Energy interface. 
After struggling many hours, I found a GitHub repository where somebody figured out the byte sequences to start and control the Sphero Mini. 
With that information, I managed to implement the app and successfully connected to the Sphero. 
Watch the demonstration video to see the Sphero Mini in action.
`

function Sphero(props) {

    const images = [Image1, Image2]

    return <main id="main">
        <ScrollHandler>
            <BreadCrumb title="Sphero" />
            <DetailBody images={images} markdownText={markdownText}>
                <ProjectCard
                    title="Sphero Mini - Controller"
                    idea="use the eSense earables to controll a sphero mini robot ball"
                    goal="implement an android app and use Bluetooth Low Energy to connect to the peripheral devices"
                    tools="Flutter, flutter_blue"
                    githubUrl="https://github.com/LuisAugenstein/spherominicontroller"
                    btnText="Demonstration Video"
                    btnUrl="https://www.youtube.com/watch?v=lFdZw2JB-hE"
                />
            </DetailBody>
        </ScrollHandler>
    </main>
}

export default Sphero