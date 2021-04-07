import React from 'react'
import DetailBody from './general/DetailBody'
import BreadCrumb from './general/Breadcrumb'
import ScrollHandler from '../ScrollHandler'

import Image1 from "../img/portfolio/portfolio-details-1.jpg"
import Image2 from "../img/portfolio/portfolio-details-2.jpg"
import Image3 from "../img/portfolio/portfolio-details-3.jpg"
import ProjectCard from './general/ProjectCard'

const markdownText = `
# Calculator - Backend Parser
---
Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi l
andae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium
nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
`

function Calculator(props) {

    const images = [Image1, Image2, Image3];

    return <main id="main">
        <ScrollHandler>
            <BreadCrumb title="Calculator" />
            <DetailBody images={images} markdownText={markdownText}>
                <ProjectCard
                    title="Calculcator Backend Parser"
                    idea="Implement a recursive descent parser to evaluate string expressions created with a calculator user interface."
                    goal="better understand basic parser mechanisms and create a first C++ backend application"
                    tools="C++ backend, React frontend"
                    githubUrl="www.example.com"
                    btnText="Live Demo"
                    btnUrl=""
                />
            </DetailBody>
        </ScrollHandler>
    </main>
}

export default Calculator