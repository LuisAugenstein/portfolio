import React from 'react';
import PageScaffold from './generic/page-scaffold';
import ProjectCard, { TechStackItem } from './generic/ProjectCard';

import Image1 from '../../assets/projects/asuro/asuro.png';

import cIcon from '../../assets/tech-stack-icons/c-programming-language.svg';
import asuroIcon from '../../assets/tech-stack-icons/asuro.png';

const markdownText = `
This project was created during the class "Basispraktikum: Mobile Roboter" at the KIT within two weeks. 
In the first week we soldered the Asuro robot kit together and learned a few basics about control theory and
electrical circuits. The Asuro uses an ATmega8L microcontroller which can be programmed in C. 
The second week's task was to program the Asuro to beat a given parkour. This parkour consisted of 
a black line on white ground with additional obstacles. To be able to beat that parkour the 
Asuro was equipped with two light sensors, six touch sensors, and visual wheel encoders.  
`;

const images = [Image1];
const techStack: TechStackItem[] = [
  {icon: cIcon, name: "C Programming Language", url: "" },
  {icon: asuroIcon, name: "Asuro", url: "http://www.asurowiki.de/pmwiki/pub/html/main.html"}
];
  "C, Asuro-library";

function Asuro(): JSX.Element {
  return (
    <PageScaffold title="Asuro - LineFollower" images={images} markdownText={markdownText}>
      <ProjectCard
        idea="enable the Asuro to beat the parkour"
        goal="learn about low level microcontroller porgramming"
        techStack={techStack}
        githubUrl="https://github.com/LuisAugenstein/Asuro-LineFollower"
        btnText="Demonstration Video"
        btnUrl="https://www.youtube.com/watch?v=6IGgH8EBQsc&t=11s"
      />
    </PageScaffold>
  );
}

export default Asuro;
