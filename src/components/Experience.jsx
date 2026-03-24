import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaFileAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Front-End Developer Intern',
      company: 'Techplement',
      date: 'Jun 2025',
      duration: '1 month',
      description: [
        'Built 12+ responsive frontend screens using React.js and Tailwind CSS',
        'Engineered reusable UI components with React Hooks',
        'Integrated 5+ RESTful APIs',
        'Used Git version control in agile development',
      ],
      skills: ['React.js', 'Tailwind CSS', 'REST APIs', 'Git'],
      certificateLink: '/Internship_Certificates.pdf',
    },
    {
      type: 'education',
      title: 'C++ Programming Training',
      company: 'CSE Pathshala',
      date: 'Jul 2025',
      duration: '2 months',
      description: [
        'Implemented data structures including arrays, linked lists, stacks and queues',
        'Applied OOP concepts such as encapsulation, inheritance and polymorphism',
        'Practiced algorithmic problem solving focusing on time complexity',
      ],
      skills: ['C++', 'Data Structures', 'OOP', 'Algorithms'],
      certificateLink: '/CSE_Pathshala.pdf',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Training</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Professional journey and skill development</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="experience-card relative glass p-6 sm:p-8 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full group"
            >
              {/* Gradient Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4 mt-2 relative z-10">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-blue-400 text-3xl mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] flex-shrink-0">
                    {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold text-base mb-1">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium">
                      <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-md border border-blue-500/20">{exp.date}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wider text-[11px]">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-1.5 mb-5 text-gray-300 text-sm leading-relaxed relative z-10 flex-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-blue-400 flex-shrink-0 mt-0.5 text-xs font-bold">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="mb-5 relative z-10">
                <p className="text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-wider">Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 mt-auto relative z-10 w-full flex">
                <motion.a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full gap-2 py-2.5 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500/20 border border-blue-500/20 transition-all duration-300 text-sm font-bold shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <FaFileAlt className="text-sm opacity-90" />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
