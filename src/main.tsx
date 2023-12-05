import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import 'flowbite';
import './index.css';
import { Flowbite } from 'flowbite-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Flowbite theme={{ mode: 'dark'}}>
      <RouterProvider router={router} />
    </Flowbite>
  </React.StrictMode>
);
