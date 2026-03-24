import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';
import profileImg from '../assets/image.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center"
        >
          <motion.div
            className="relative w-48 h-48 sm:w-60 sm:h-60"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Ambient Radial Glow Behind Image */}
            <div className="absolute inset-[-20%] rounded-full blur-[60px] profile-ambient-glow"></div>

            {/* Single Profile Container */}
            <div className="relative w-full h-full profile-container flex items-center justify-center">
              <img
                src={profileImg}
                alt="Rishabh Chaurasia"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-white"
        >
          Rishabh Chaurasia
        </motion.h1>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="mb-6 min-h-[5rem] flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Aspiring Software Engineer',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-2xl sm:text-3xl md:text-4xl gradient-text font-semibold text-center"
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-8"
        >
          <motion.a
            href="https://www.linkedin.com/in/-rishabh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/rishabhKernel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-gray-500/20 hover:bg-gray-500/40 text-gray-300 transition-all duration-300"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="mailto:chaurasiarishabh397@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-400 transition-all duration-300"
          >
            <FaEnvelope size={24} />
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-[0_8px_25px_rgba(59,130,246,0.6)] transition-all duration-300 cursor-pointer"
            >
              View Projects
            </motion.button>
          </Link>
          <motion.a
            href="/Rishabh_Chaurasia_CV.pdf"
            download
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 hover:shadow-[0_8px_25px_rgba(96,165,250,0.3)] transition-all duration-300"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <Link to="about" smooth={true} duration={500}>
            <FaArrowDown className="text-blue-400 text-2xl cursor-pointer" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
