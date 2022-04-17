import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import Home from'./Pages/Home'
import Contact from'./Pages/Contact'
import Proyects from'./Pages/Proyects'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Contact /> */}
    <Proyects />
  </React.StrictMode>
);
reportWebVitals();
