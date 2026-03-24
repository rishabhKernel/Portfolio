import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isLight = savedTheme === 'light';
    setIsDark(!isLight);
    applyTheme(!isLight);
  }, []);

  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');

    // Dispatch custom event to notify App component
    window.dispatchEvent(new CustomEvent('themechange', { detail: { isDark: newIsDark } }));
  };

  const navItems = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Skills', to: 'skills' },
    { label: 'Achievements', to: 'achievements' },
    { label: 'Contact', to: 'contact' },
  ];

  const scrollDuration = 300;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'glass shadow-lg' 
          : 'bg-slate-900/50 backdrop-blur-md border-b border-slate-700/50 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={scrollDuration}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-black cursor-pointer tracking-tighter flex items-center"
            >
              <span className="text-white">Rishabh</span>
              <span className="gradient-text">.dev</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={scrollDuration}
                className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-light"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <FaSun size={20} /> : <div className="scale-x-[-1]"><FaMoon size={20} /></div>}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-4 pb-4 space-y-1 border-t border-slate-700/30">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={scrollDuration}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer font-light"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
