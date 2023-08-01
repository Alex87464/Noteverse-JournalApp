import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Importa ThemeProvider y createTheme

import './styles.css';

import { StockApp } from './StockApp';

const theme = createTheme(); // Crea un tema vacío o personalizado según tus necesidades

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StockApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
