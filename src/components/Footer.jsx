import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/-rishabh', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/rishabhKernel', label: 'GitHub' },
    { icon: <FaXTwitter />, url: 'https://twitter.com', label: 'X (formerly Twitter)' },
    { icon: <FaEnvelope />, url: 'mailto:chaurasiarishabh397@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-gray-700 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Rishabh Chaurasia</h3>
            <p className="text-gray-400">Full Stack Developer & Aspiring Software Engineer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/40 transition-all duration-300"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-gray-400"
          >
            <p>
              © {currentYear} Rishabh Chaurasia. All rights reserved. | Designed & Built with{' '}
              <span className="text-red-400">❤</span> using React & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
