import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Sphero from './pages/single-project/Sphero';
import Asuro from './pages/single-project/Asuro';
import HskTrainer from './pages/single-project/hsk-trainer';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/sphero', element: <Sphero/> },
  { path: '/asuro', element: <Asuro/> },
  { path: '/hsk-trainer', element: <HskTrainer/> },
]);