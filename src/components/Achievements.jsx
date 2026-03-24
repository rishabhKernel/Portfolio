import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaFileAlt, FaServer, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const Achievements = () => {
  const stats = [
    {
      icon: <FaTrophy className="text-4xl drop-shadow-[0_0_10px_rgba(99,102,241,0.8)] text-indigo-400" />,
      value: '2nd Place',
      label: 'Tech Synergy 2026',
      sublabel: 'Top 5 Performer',
      footer: 'CipherSchools',
      color: 'from-blue-400 to-indigo-500',
      badge: 'Featured',
      featured: true,
      borderGlow: 'border-indigo-500/40 hover:shadow-indigo-500/30',
      bgGradient: 'bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent',
    },
    {
      icon: <FaCode className="text-4xl drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] text-yellow-400" />,
      value: '140+',
      label: 'DSA Problems Solved',
      sublabel: 'LeetCode + GeeksforGeeks',
      color: 'from-yellow-400 to-orange-500',
      badge: 'Active',
      featured: false,
      borderGlow: 'border-orange-500/20 hover:shadow-orange-500/20',
      bgGradient: 'bg-white/5',
    },
    {
      icon: <FaFileAlt className="text-4xl drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] text-cyan-400" />,
      value: 1,
      label: 'Research Paper Accepted',
      sublabel: 'ICCSAE-24 Conference',
      color: 'from-cyan-400 to-teal-500',
      badge: 'Accepted',
      featured: false,
      borderGlow: 'border-cyan-500/20 hover:shadow-cyan-500/20',
      bgGradient: 'bg-white/5',
    },
    {
      icon: <FaCode className="text-4xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] text-pink-400" />,
      value: '2+',
      label: 'Full Stack Projects',
      sublabel: 'MERN Stack',
      color: 'from-purple-400 to-pink-500',
      badge: 'Completed',
      featured: false,
      borderGlow: 'border-pink-500/20 hover:shadow-pink-500/20',
      bgGradient: 'bg-white/5',
    },
  ];

  const certifications = [
    {
      title: 'Cloud Computing',
      provider: 'NPTEL IIT Kharagpur',
      icon: <img src="/nptel.png" alt="NPTEL" className="w-12 h-12 object-contain rounded-full bg-white p-1" />,
      link: '/Cloud Computing.pdf',
      color: 'from-orange-400 to-orange-600',
      glow: 'hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] ring-orange-500/30',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      provider: 'Oracle',
      icon: <img src="/oracle.png" alt="Oracle" className="w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md shadow-red-500/20" />,
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=DD4B818B86387E107002E8024EE887DC6925C774A0040E1403ECE827DC873CC1',
      color: 'from-red-500 to-rose-600',
      glow: 'hover:shadow-[0_15px_30px_rgba(244,63,94,0.2)] ring-rose-500/50',
    },
    {
      title: 'Computer Communications',
      provider: 'Coursera',
      icon: <img src="/coursera.png" alt="Coursera" className="w-12 h-12 object-contain rounded-full bg-white p-1" />,
      link: 'https://www.coursera.org/account/accomplishments/specialization/ZNX21RCMZ4VK?irclickid=xAi2yYXlExycTY7QikUOTSvRUkuxo-WOEzJOS80&irgwc=1&afsrc=1&utm_medium=partners&utm_source=impact&utm_campaign=27795&utm_content=b2c&utm_campaignid=Sovrn%20Commerce&utm_term=14726_NT_1347618_3045',
      color: 'from-blue-500 to-indigo-600',
      glow: 'hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] ring-blue-500/30',
    },
    {
      title: 'ChatGPT-4 Prompt Engineering, Generative AI & LLM',
      provider: 'Infosys Springboard',
      icon: <img src="/infosys.png" alt="Infosys" className="w-12 h-12 object-contain rounded-full bg-white p-1" />,
      link: '/ChatGPT-4 Prompt Engineering ChatGPT, Generative AI & LLM.pdf',
      color: 'from-cyan-500 to-blue-500',
      glow: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] ring-cyan-500/30',
    },
    {
      title: 'Build Generative AI Apps & Solutions with No-Code',
      provider: 'Infosys Springboard',
      icon: <img src="/infosys.png" alt="Infosys" className="w-12 h-12 object-contain rounded-full bg-white p-1" />,
      link: '/Build Generative AI Apps and Solutions with No-Code Tools.pdf',
      color: 'from-cyan-500 to-blue-500',
      glow: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] ring-cyan-500/30',
    },
    {
      title: 'Responsive Web Design',
      provider: 'freeCodeCamp',
      icon: <img src="/freecodecamp.png" alt="freeCodeCamp" className="w-12 h-12 object-contain rounded-full bg-[rgb(10,10,35)] p-1 border border-white/10" />,
      link: 'https://www.freecodecamp.org/certification/fcc0f35618b-a95b-4141-8a1d-109bbade4615/responsive-web-design',
      color: 'from-indigo-400 to-purple-600',
      glow: 'hover:shadow-[0_15px_30px_rgba(99,102,241,0.15)] ring-indigo-500/30',
    },
  ];

  const practiceProfiles = [
    {
      name: 'LeetCode',
      description: '80+ Problems Solved',
      icon: <img src="/Leetcode.png" alt="LeetCode" className="w-12 h-12 object-contain rounded-lg drop-shadow-md" />,
      link: 'https://leetcode.com/u/Riishabhh_19/',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'GeeksforGeeks',
      description: '60+ Problems Solved',
      icon: <img src="/GFG.png" alt="GeeksforGeeks" className="w-12 h-12 object-contain rounded-lg drop-shadow-md" />,
      link: 'https://www.geeksforgeeks.org/profile/chaurasiarpwkw?tab=activity',
      color: 'from-green-400 to-emerald-500',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements & Milestones</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Technical accomplishments and professional growth</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`achievement-card relative glass flex flex-col justify-center h-full ${stat.bgGradient} ${stat.featured ? 'p-10 shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-1 hover:ring-2 ring-indigo-500/50 z-10' : 'p-6 sm:p-8'} rounded-2xl text-center hover-glow border ${stat.borderGlow} transition-all duration-500 overflow-hidden group`}
            >
              {/* Decorative Background Blob for Featured */}
              {stat.featured && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
              )}

              {/* Badge */}
              {stat.badge && (
                <div className={`absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
                  {stat.badge}
                </div>
              )}

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`flex justify-center group-hover:scale-110 transition-transform duration-500 ${stat.featured ? 'mb-6' : 'mb-4'}`}
              >
                {stat.icon}
              </motion.div>

              <div className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} drop-shadow-sm ${stat.featured ? 'text-4xl sm:text-5xl mb-3' : 'text-3xl sm:text-4xl mb-2'}`}>
                {stat.value}
              </div>

              <p className={`text-white font-bold ${stat.featured ? 'text-xl mb-2' : 'text-lg mb-1'}`}>{stat.label}</p>
              <p className={`text-gray-300 text-sm ${stat.featured ? 'mb-1' : 'mb-0 leading-tight'}`}>{stat.sublabel}</p>
              {stat.footer && <p className={`text-xs font-semibold uppercase tracking-wide ${stat.featured ? 'mt-3 text-indigo-400' : 'mt-2 text-gray-400'}`}>{stat.footer}</p>}
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide text-center">Certifications</h3>
            <div className="w-16 h-1 mt-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative glass flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-500 group overflow-hidden ${cert.glow} hover-glow`}
              >
                <div className="flex flex-col relative z-10 flex-1">
                  <div className="flex items-start gap-5 mb-6">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {cert.icon}
                    </motion.div>
                    <div className="flex-1 pt-1 text-left">
                      <h4 className={`text-white font-bold leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${cert.color} transition-all duration-300 text-lg mb-1`}>
                        {cert.title}
                      </h4>
                      <p className="font-semibold text-gray-400 text-xs sm:text-sm uppercase tracking-wider">{cert.provider}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto relative z-10 w-full pt-4 border-t border-white/10">
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 rounded-xl font-bold bg-white/5 hover:bg-gradient-to-r ${cert.color} text-gray-300 hover:text-white shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center justify-center gap-2 border border-white/10`}
                  >
                    View Certificate
                    <FaExternalLinkAlt className="text-sm opacity-90" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Practice Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide text-center">Practice Platform Profiles</h3>
            <div className="w-16 h-1 mt-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceProfiles.map((profile, index) => {
              // Extract the numeric portion from the string natively
              const [num, ...rest] = profile.description.split(' ');
              const text = rest.join(' ');
              
              return (
                <motion.a
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="relative glass p-6 sm:p-8 rounded-2xl text-center border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 group flex flex-col justify-center items-center overflow-hidden"
                >
                  {/* Icon Wrapper */}
                  <div className="relative mb-5 flex justify-center items-center">
                    <div className={`absolute inset-0 bg-gradient-to-r ${profile.color} opacity-20 blur-xl rounded-full group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative bg-slate-800/50 p-4 rounded-2xl border border-white/10 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {profile.icon}
                    </div>
                  </div>
                  
                  {/* Text Details */}
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5 transition-colors">
                    {profile.name}
                  </h4>
                  <p className="text-gray-400 text-sm font-medium mb-6">
                    <span className={`text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${profile.color} drop-shadow-sm`}>
                      {num}
                    </span> 
                    {" "}{text}
                  </p>
                  
                  {/* Button Wrapper */}
                  <div
                    className={`px-5 py-2.5 rounded-xl font-bold bg-white/5 group-hover:bg-gradient-to-r ${profile.color} text-gray-300 group-hover:text-white shadow-sm group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center justify-center gap-2 border border-white/10`}
                  >
                    View Profile
                    <FaExternalLinkAlt className="text-sm opacity-90" />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
