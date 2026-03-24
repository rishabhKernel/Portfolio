import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IntroBackground from './IntroBackground';

const IntroLoader = ({ onComplete }) => {
  const [isBlurring, setIsBlurring] = useState(false);

  useEffect(() => {
    // Start blur transition at the original 2.5 seconds
    const blurTimer = setTimeout(() => {
      setIsBlurring(true);
    }, 2500);

    // Complete intro INSTANTLY after blur starts (2.6s) to reduce time
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(blurTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Text animation variants
  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.2,
      },
    },
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <IntroBackground />
      </div>

      {/* Dark Overlay for Text Contrast */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 pointer-events-none"
      />

      {/* Blur Overlay */}
      <motion.div
        initial={{ backdropFilter: 'blur(0px)' }}
        animate={{ backdropFilter: isBlurring ? 'blur(15px)' : 'blur(0px)' }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="absolute inset-0 bg-black/5 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Name - Main Focus */}
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              Rishabh
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Chaurasia
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg md:text-xl text-cyan-100 font-light tracking-wider mb-6"
        >
          <span>Full Stack Developer</span>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 origin-center mx-auto mb-8"
          style={{ width: '180px' }}
        />

        {/* Tech Stack Pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {['React', 'Node.js', 'MongoDB', 'Web3'].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/50 text-cyan-100 text-xs sm:text-sm font-medium bg-cyan-500/15 backdrop-blur-sm hover:bg-cyan-500/25 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center gap-2 mt-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default IntroLoader;
