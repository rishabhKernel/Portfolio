import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'Lovely Professional University',
      cgpaLabel: 'CGPA:',
      cgpa: '7.58',
      year: 'Ongoing',
    },
    {
      icon: <FaSchool className="text-3xl" />,
      degree: 'Intermediate (Class 12)',
      field: 'Science Stream',
      institution: 'Govt School for Excellence',
      cgpaLabel: 'Percentage:',
      cgpa: '78.8%',
      year: '2023',
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
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="education-card relative glass p-6 sm:p-8 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500 overflow-hidden group"
            >
              {/* Vertical Gradient Accent Line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6 pl-2 sm:pl-4">
                {/* Glowing Icon */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/40 transition-colors duration-500"></div>
                  <div className="relative bg-slate-800/50 p-4 rounded-full border border-white/10 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                </div>

                <div className="flex-1 w-full text-left flex flex-col justify-center">
                  {/* Title & Institution */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all">{edu.degree}</h3>
                  <p className="text-blue-400 font-bold text-base sm:text-lg mb-1">{edu.field}</p>
                  <p className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider mb-5">{edu.institution}</p>

                  {/* Chips/Badges */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <div className="flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      <span className="text-gray-400 text-[10px] sm:text-xs font-bold tracking-wider">{edu.cgpaLabel}</span>
                      <span className="text-blue-300 text-xs sm:text-sm font-bold">{edu.cgpa}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
                      <span className="text-gray-400 text-[10px] sm:text-xs font-bold tracking-wider">Year:</span>
                      <span className="text-purple-300 text-xs sm:text-sm font-bold">{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
