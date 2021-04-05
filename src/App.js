import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos'
import Home from './home/Home'
import Calculator from './projects/Calculator'
import Sidebar from './Sidebar';
import BacktoTopButton from './BacktoTopButton';

import 'swiper/swiper-bundle.min.css'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  }, [])


  return (<main>
    <Sidebar />
    <Switch>
      <Route path="/Portfolio" component={Home} exact />
      <Route path="/Portfolio/calculator" component={Calculator} />
    </Switch>
    <BacktoTopButton />
  </main>
  );
}

export default App;
