import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaBrain, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const About = () => {
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

  const features = [
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Full Stack Development',
      description: 'Expertise in MERN stack technologies for building scalable web applications with modern best practices',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: 'Problem Solving',
      description: 'Strong DSA skills with 140+ problems solved on competitive platforms and algorithmic expertise',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: 'Scalable Solutions',
      description: 'Building performant and maintainable applications with industry best practices and clean architecture',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: 'Innovation',
      description: 'Passionate about learning new technologies and implementing creative solutions to real-world problems',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Who I Am */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl border border-blue-500/20 hover-glow transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <FaCheckCircle className="text-blue-400" />
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              I'm a passionate Full Stack Developer and aspiring software engineer with a strong foundation in computer science fundamentals. I specialize in building modern, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). My expertise spans across frontend development with React and Tailwind CSS, backend development with Node.js and Express, and database design with MongoDB and MySQL.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify">
              With a focus on clean code, scalability, and user experience, I'm committed to creating solutions that make a real impact. My journey in tech is driven by curiosity and a desire to continuously learn and grow. I believe in writing code that is not just functional, but also maintainable, efficient, and easy to understand for other developers.
            </p>
          </motion.div>
        </motion.div>

        {/* My Approach */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass p-8 rounded-xl border border-green-500/20 hover-glow transition-all duration-300 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            <FaRocket className="text-green-400" />
            My Development Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-green-400 text-xl flex-shrink-0 mt-1"
              >
                ✓
              </motion.span>
              <div>
                <h4 className="font-semibold text-white mb-1">Clean & Maintainable Code</h4>
                <p className="text-gray-400 text-sm text-justify">Writing well-documented, readable code following industry standards and design patterns</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-green-400 text-xl flex-shrink-0 mt-1"
              >
                ✓
              </motion.span>
              <div>
                <h4 className="font-semibold text-white mb-1">Performance Optimization</h4>
                <p className="text-gray-400 text-sm text-justify">Focusing on speed, efficiency, and best practices to deliver high-performance applications</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-green-400 text-xl flex-shrink-0 mt-1"
              >
                ✓
              </motion.span>
              <div>
                <h4 className="font-semibold text-white mb-1">Problem Solving</h4>
                <p className="text-gray-400 text-sm text-justify">Solving complex problems using data structures and algorithms with optimal solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <motion.span
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-green-400 text-xl flex-shrink-0 mt-1"
              >
                ✓
              </motion.span>
              <div>
                <h4 className="font-semibold text-white mb-1">Agile Collaboration</h4>
                <p className="text-gray-400 text-sm text-justify">Working effectively in team environments with version control and collaborative development</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
              className={`glass p-6 rounded-xl text-center hover-glow border border-blue-500/20 transition-all duration-300 bg-gradient-to-br ${feature.color}/10`}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-blue-400 mb-4 flex justify-center"
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
              <p className="text-sm text-gray-400 text-justify">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        html.light .text-justify {
          text-align: justify;
        }
      `}</style>
    </section>
  );
};

export default About;
