// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <div className="w-full min-h-screen bg-neutral-950 text-white selection:bg-cyan-500 selection:text-white">
          <Navbar />
          <AppRoutes/>
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;