import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import AOS from 'aos'
import Home from './home/Home'
import Calculator from './calculator/Calculator'
import Sidebar from './general/Sidebar';
import BacktoTopButton from './general/BacktoTopButton';

import 'bootstrap/dist/css/bootstrap.min.css'


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
    </Switch>
    <BacktoTopButton />
  </main>
  );
}

export default App;
