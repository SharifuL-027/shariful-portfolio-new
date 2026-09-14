import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect kore navbar hide/show abong background change korar logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Niche scroll korle hide hobe (100px er pore)
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    // 50px er niche asle background blur hobe
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      {/* Brand Logo */}
      <NavLink to="/" className="relative z-10 group overflow-hidden">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          BaDDest <span className="text-cyan-500">BoyS</span>
        </motion.div>
      </NavLink>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {["Home", "Portfolio", "Contact"].map((item, index) => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
          return (
            <NavLink 
              key={index} 
              to={path} 
              className={({ isActive }) => `relative text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}
            >
              {({ isActive }) => (
                <motion.div whileHover="hover" initial="initial">
                  {item}
                  {/* Underline Animation */}
                  <motion.div
                    variants={{
                      initial: { width: isActive ? "100%" : "0%", left: "50%", x: "-50%" },
                      hover: { width: "100%" }
                    }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                    className={`absolute -bottom-2 h-[2px] ${isActive ? 'bg-cyan-400' : 'bg-white'}`}
                  />
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Mobile Menu Button - Framer Motion Rotate Animation */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden flex flex-col justify-center gap-[6px] p-2 z-10"
      >
        <span className="w-6 h-[2px] bg-white block"></span>
        <span className="w-4 h-[2px] bg-cyan-400 block ml-auto"></span>
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;