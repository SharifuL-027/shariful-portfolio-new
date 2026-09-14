import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Menu item komiye ager moto kora holo
  const menuItems = ['HOME', 'WORKS', 'CONTACT'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 md:px-16 bg-transparent pointer-events-auto">
      
      {/* Geometric Logo */}
      <NavLink to="/" className="flex-shrink-0 cursor-pointer text-white flex items-center justify-center">
        <svg width="45" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 5 H20 M5 15 H15 M5 25 H20 M5 5 V25" stroke="white" strokeWidth="3" strokeLinecap="square"/>
          <path d="M15 5 L35 25 M35 5 L15 25" stroke="white" strokeWidth="3" strokeLinecap="square"/>
        </svg>
      </NavLink>

      {/* Horizontal Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {menuItems.map((item, index) => {
          // Route path generate kora
          const path = item === 'HOME' ? '/' : (item === 'WORKS' ? '/portfolio' : `/${item.toLowerCase()}`);
          
          return (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) => 
                `text-white text-[11px] md:text-xs font-bold uppercase tracking-widest transition-opacity duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                }`
              }
            >
              {item}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;