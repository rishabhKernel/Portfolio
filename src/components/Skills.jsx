import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGit,
  FaGithub,
  FaCloud,
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPhp, SiCplusplus, SiC } from 'react-icons/si';

const Skills = () => {
  // Row 1: Web Development Technologies (in exact order)
  const row1Technologies = [
    { name: 'HTML5', icon: <FaHtml5 className="text-3xl" />, color: '#E34C26' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-3xl" />, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-3xl" />, color: '#06B6D4' },
    { name: 'JavaScript', icon: <FaJsSquare className="text-3xl" />, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact className="text-3xl" />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNode className="text-3xl" />, color: '#339933' },
    { name: 'Express.js', icon: <SiExpress className="text-3xl" />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb className="text-3xl" />, color: '#13AA52' },
    { name: 'MySQL', icon: <SiMysql className="text-3xl" />, color: '#00758F' },
    { name: 'PHP', icon: <SiPhp className="text-3xl" />, color: '#777BB4' },
  ];

  // Row 2: Core CS and Development Tools (in exact order)
  const row2Technologies = [
    { name: 'C++', icon: <SiCplusplus className="text-3xl" />, color: '#00599C' },
    { name: 'C', icon: <SiC className="text-3xl" />, color: '#A8B9CC' },
    { name: 'Data Structures', icon: <FaCode className="text-3xl" />, color: '#FF6B6B' },
    { name: 'OOP', icon: <FaCode className="text-3xl" />, color: '#95E1D3' },
    { name: 'DBMS', icon: <FaCode className="text-3xl" />, color: '#F38181' },
    { name: 'OS', icon: <FaCode className="text-3xl" />, color: '#AA96DA' },
    { name: 'Git', icon: <FaGit className="text-3xl" />, color: '#F1502F' },
    { name: 'Cloud Computing', icon: <FaCloud className="text-3xl" />, color: '#FF9F1C' },
    { name: 'GitHub', icon: <FaGithub className="text-3xl" />, color: '#181717' },
  ];

  const TechSticker = ({ tech }) => (
    <motion.div
      whileHover={{ scale: 1.1, y: -8 }}
      className="tech-sticker flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer"
    >
      {/* Sticker Container */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:border-white/40 group-hover:from-white/20 group-hover:to-white/10">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl transition-all duration-300" style={{
          background: `linear-gradient(135deg, ${tech.color}20 0%, ${tech.color}10 100%)`,
        }}></div>

        {/* Icon with Original Color */}
        <div className="relative z-10 group-hover:scale-110 transition-transform duration-300" style={{ color: tech.color }}>
          {tech.icon}
        </div>
      </div>

      {/* Label */}
      <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-300 text-center">
        {tech.name}
      </span>
    </motion.div>
  );

  // Create infinite loop by triplicating the array
  const createInfiniteArray = (arr) => [...arr, ...arr, ...arr];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Sliding Rows Container */}
        <div className="space-y-8">
          {/* Row 1 - Slides Left to Right */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900/40 via-slate-800/20 to-slate-900/40 p-6 backdrop-blur-sm border border-blue-500/10">
            <motion.div
              className="flex gap-6 sm:gap-8"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              {createInfiniteArray(row1Technologies).map((tech, i) => (
                <TechSticker key={`row1-${i}`} tech={tech} />
              ))}
            </motion.div>

            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Row 2 - Slides Right to Left */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900/40 via-slate-800/20 to-slate-900/40 p-6 backdrop-blur-sm border border-purple-500/10">
            <motion.div
              className="flex gap-6 sm:gap-8"
              animate={{ x: [-1000, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
              }}
            >
              {createInfiniteArray(row2Technologies).map((tech, i) => (
                <TechSticker key={`row2-${i}`} tech={tech} />
              ))}
            </motion.div>

            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>

      {/* Light Theme Styles */}
      <style>{`
        html.light .tech-sticker .relative {
          background: linear-gradient(135deg, rgba(219, 234, 254, 0.15) 0%, rgba(233, 213, 255, 0.1) 100%);
          border-color: rgba(59, 130, 246, 0.3);
        }

        html.light .tech-sticker .relative:hover {
          background: linear-gradient(135deg, rgba(191, 219, 254, 0.25) 0%, rgba(216, 180, 254, 0.2) 100%);
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 12px 24px rgba(59, 130, 246, 0.2);
        }

        html.light .tech-sticker .text-gray-300 {
          color: #475569;
        }

        html.light .tech-sticker .group-hover\\:text-blue-400:hover {
          color: #1e40af;
        }

        html.light .rounded-2xl.bg-gradient-to-r {
          background: linear-gradient(to right, rgba(248, 250, 252, 0.5) 0%, rgba(241, 245, 249, 0.3) 50%, rgba(248, 250, 252, 0.5) 100%);
          border-color: rgba(59, 130, 246, 0.15);
        }

        html.light .absolute.left-0 {
          background: linear-gradient(to right, rgba(240, 244, 248, 1) 0%, transparent 100%);
        }

        html.light .absolute.right-0 {
          background: linear-gradient(to left, rgba(240, 244, 248, 1) 0%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default Skills;
