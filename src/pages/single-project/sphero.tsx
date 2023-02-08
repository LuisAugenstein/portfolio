import React from 'react';
import PageScaffold from './generic/page-scaffold';
import ProjectCard, { TechStackItem } from './generic/ProjectCard';

import Image1 from '../../assets/projects/sphero/carousel-images/sphero-1.jpg';
import Image2 from '../../assets/projects/sphero/carousel-images/sphero-2.png';

import flutterIcon from '../../assets/projects/sphero/card-icons/flutter.svg';
import flutterBlueIcon from '../../assets/projects/sphero/card-icons/flutter-blue.svg';
import spheroIcon from '../../assets/projects/sphero/card-icons/sphero.svg';
import esenseEarableIcon from '../../assets/projects/sphero/card-icons/esense-earable.png';

const markdownText = `
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
`;

const images = [Image1, Image2];
const techStack: TechStackItem[] = [
  {
    icon: flutterIcon,
    name: 'Flutter',
    url: 'https://flutter.dev',
  },
  {
    icon: flutterBlueIcon,
    name: 'FlutterBlue',
    url: 'https://pub.dev/packages/flutter_blue',
  },
  {
    icon: spheroIcon,
    name: 'Sphero',
    url: 'https://sphero.com',
  },
  {
    icon: esenseEarableIcon,
    name: 'EsenseEarable',
    url: 'https://esense.io/'
  }
];

function Sphero(): JSX.Element {
  return (
    <PageScaffold title="Sphero Mini - Controller" images={images} markdownText={markdownText}>
      <ProjectCard
        idea="control a sphero mini robot ball in a funny way using the esense earables."
        goal="implement an android app that uses Bluetooth Low Energy to connect to the peripheral devices."
        techStack={techStack}
        githubUrl="https://github.com/LuisAugenstein/spherominicontroller"
        btnText="Demonstration Video"
        btnUrl="https://www.youtube.com/watch?v=lFdZw2JB-hE"
      />
    </PageScaffold>
  );
}

export default Sphero;
