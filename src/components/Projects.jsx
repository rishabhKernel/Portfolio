import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { LuBookOpen } from 'react-icons/lu';

const Projects = () => {
  const projects = [
    {
      title: 'EduConnect',
      description: 'Comprehensive full-stack learning platform designed for modern education.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/rishabhKernel/EduConnect.git',
      live: 'https://rishabhkernel.github.io/EduConnect/',
      features: ['Secure JWT Authentication', 'Robust RESTful APIs', 'Responsive UI'],
      icon: <LuBookOpen className="text-white w-8 h-8" strokeWidth={2} />,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'WeatherWise',
      description: 'Real-time weather tracking application with precise dynamic features.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/rishabhKernel/WeatherWise.git',
      live: 'https://rishabhkernel.github.io/WeatherWise/',
      features: ['Live API Data Fetching', 'Dynamic Geolocation', 'Optimized Interface'],
      icon: <span className="text-3xl drop-shadow-sm">🌤️</span>,
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      title: 'CodeDebug AI',
      description: 'Intelligent AI-powered assistant designed for automated code debugging.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/rishabhKernel/CodeDebug-AI.git',
      live: 'https://rishabhkernel.github.io/CodeDebug-AI/',
      features: ['Automated Code Analysis', 'Structured Error Feedback', 'Multilingual Support'],
      icon: <span className="text-3xl drop-shadow-sm">🤖</span>,
      gradient: 'from-fuchsia-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Showcasing my best work and technical expertise</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col h-full col-span-1"
            >
              <div className="project-card relative glass rounded-2xl h-full p-6 sm:p-7 flex flex-col transition-all duration-300 border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 hover-glow shadow-md hover:shadow-xl">
                
                {/* Icon/Image Block */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.gradient} mb-5 shadow-sm flex-shrink-0`}>
                  {project.icon}
                </div>

                {/* Title & Description */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Bulleted Features */}
                <div className="mb-5 flex-1">
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 font-bold mt-0.5 text-[10px]">▸</span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 border border-blue-500/20 transition-colors font-semibold text-sm"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white border border-white/10 transition-colors font-semibold text-sm"
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
