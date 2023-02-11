import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Sphero from './pages/single-project/sphero';
import Asuro from './pages/single-project/asuro';
import HskTrainer from './pages/single-project/hsk-vocabulary-trainer';
import Navigation from './navigation/navigation';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sphero', element: <Sphero /> },
      { path: '/asuro', element: <Asuro /> },
      { path: '/hsk-trainer', element: <HskTrainer /> },
    ],
  },
]);
