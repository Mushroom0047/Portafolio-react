import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import Home from'./Pages/Home'
import Contact from'./Pages/Contact'
import Projects from'./Pages/Projects'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Projects' element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
