import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


import './styles.css';
import { ClothesApp } from './ClothesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClothesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
