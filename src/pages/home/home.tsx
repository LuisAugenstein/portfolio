import React from 'react';
import HeroSection from './hero-section';
import PortfoliosSection from './portfolio-section';
import SingleProject, { ProjectData } from './single-project';
import spheroImage from '../../assets/home/project-sphero.png';
import asuroImage from '../../assets/home/project-asuro.png';

// backgroundAttachment: { lg: 'fixed' },
// width: '100%',
// height: '100vh',
// background: `url(${Image}) top center`,
// backgroundSize: 'cover',
// display: 'flex',
// justifyContent: 'end'
function Home(): JSX.Element {
  const projects: ProjectData[] = [
    { image: spheroImage, path: '/sphero', title: 'Sphero Mini - Controller' },
    { image: asuroImage, path: '/asuro', title: 'Asuro - LineFollower' },
    // { image: hskTrainerImage, path: '/hsk-trainer', title: 'HSK - Trainer' },
  ];

  return (
    <main>
      <div
        id="home"
        className={` relative h-screen w-full bg-[url('/src/assets/home/hero-background-large.jpg')] bg-cover bg-top lg:bg-fixed`}
      >
        <div className="h-full w-full dark:bg-black/20"></div>
        <span className="prose prose-invert absolute right-6 top-24 transition-all sm:right-16 sm:prose-xl md:right-10 md:prose-2xl lg:right-32">
          <h2>Luis Augenstein</h2>
        </span>
      </div>

      <div id="portfolio" className="w-full p-16 pt-12 dark:bg-gray-800">
        <header className="prose dark:prose-invert">
          <h1 className='mb-6 font-thin md:text-5xl '>Portfolio</h1>
          <div className='w-14 h-[2px] bg-primary-500/70'></div>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SingleProject project={project} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
