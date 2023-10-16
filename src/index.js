import React from 'react';
import 'flowbite';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoPage from './Pages/NoPage';
import Footer from './Pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

