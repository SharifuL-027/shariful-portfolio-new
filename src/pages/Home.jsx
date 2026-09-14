// src/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <div className="h-screen flex items-center justify-center bg-neutral-900">
        <h2 className="text-4xl font-light text-gray-500">More sections coming soon...</h2>
      </div>
    </div>
  );
};

export default Home;