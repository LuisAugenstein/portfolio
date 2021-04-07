import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos'
import Home from './home/Home'
import Calculator from './projects/Calculator'
import Sphero from './projects/Sphero'
import Sidebar from './Sidebar';

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
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/sphero" component={Sphero} />
    </Switch>
  </main>
  );
}

export default App;
