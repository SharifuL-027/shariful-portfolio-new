import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      {/* Vobisshote 404 page ba onno route ekhane add korben */}
    </Routes>
  );
};

export default AppRoutes;