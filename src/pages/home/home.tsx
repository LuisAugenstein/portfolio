import React from 'react';
import HeroSection from './hero-section';
import ProjectsSection from './projects-section';

function Home(): JSX.Element {
  return (
    <main id="main">
        <HeroSection />
        <ProjectsSection />
    </main>
  );
}

export default Home;
