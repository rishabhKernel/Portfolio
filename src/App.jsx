import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroLoader from './components/IntroLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const initialIntroPlayed = sessionStorage.getItem('introPlayed') === 'true';

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showIntro, setShowIntro] = useState(!initialIntroPlayed);
  const [introComplete, setIntroComplete] = useState(initialIntroPlayed);
  const [isDark, setIsDark] = useState(true);
  const [mountHero, setMountHero] = useState(initialIntroPlayed);
  const [mountRest, setMountRest] = useState(initialIntroPlayed);

  useEffect(() => {
    // Initial scroll reset & hash jump prevention
    if (window.location.hash) {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!introComplete && showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      window.scrollTo(0, 0);
    }
  }, [introComplete, showIntro]);

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isLight = savedTheme === 'light';
    setIsDark(!isLight);
    
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    // Listen for theme changes
    const handleThemeChange = (event) => {
      const isDarkTheme = event.detail?.isDark ?? (localStorage.getItem('theme') === 'dark');
      setIsDark(isDarkTheme);
      if (!isDarkTheme) {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    };

    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    setMountHero(true); // Mount hero immediately when intro is complete
    setMountRest(true); // Mount the rest immediately as well
    setShowIntro(false);
    sessionStorage.setItem('introPlayed', 'true');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100]"
          >
            <IntroLoader onComplete={handleIntroComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={introComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: introComplete ? 0 : 0 }}
        className={`${
          isDark
            ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900'
            : 'bg-gradient-to-b from-blue-50 via-purple-50 to-blue-50'
        } text-white overflow-x-hidden transition-all duration-500`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {mountHero && <Hero />}
          {mountRest && (
            <>
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Achievements />
              <Education />
              <Contact />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl ${
              isDark ? 'bg-blue-500/10' : 'bg-blue-400/15'
            }`}
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className={`absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl ${
              isDark ? 'bg-purple-500/10' : 'bg-purple-400/15'
            }`}
          />
        </div>
      </motion.div>
    </>
  );
}

export default App;
