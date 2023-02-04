import React from 'react';
import HeroSection from './hero-section';
import PortfoliosSection from './portfolio-section';

function Home(): JSX.Element {
  return (
    <main>
        <HeroSection/>
        <PortfoliosSection/>
    </main>
  );
}

export default Home;
