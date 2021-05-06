import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos'
import Home from './home/Home'
import Sphero from './projects/Sphero'
import Asuro from './projects/Asuro'
import BeautifulMaths from './projects/BeautifulMaths'
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
      <Route path="/sphero" component={Sphero} />
      <Route path="/asuro" component={Asuro} />
      <Route path="/beautiful-maths" component={BeautifulMaths} />
    </Switch>
  </main>
  );
}

export default App;
