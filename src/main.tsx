import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: green
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
