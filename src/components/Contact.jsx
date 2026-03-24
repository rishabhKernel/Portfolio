import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init('X9f4hPmp83dXMHKru');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_2jcrd2v',
        'template_i6o8s58',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'X9f4hPmp83dXMHKru'
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 font-medium text-lg">Let’s build something amazing together 🚀</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6 flex flex-col justify-center">
            
            {/* Email Card */}
            <a href="mailto:chaurasiarishabh397@gmail.com" className="group">
              <div className="glass p-6 sm:p-7 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-5 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-blue-500/10 text-blue-400 transition-colors flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors break-all">chaurasiarishabh397@gmail.com</p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:+919516146703" className="group">
              <div className="glass p-6 sm:p-7 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-5 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-blue-500/10 text-blue-400 transition-colors flex-shrink-0">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</h3>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">+91 95161 46703</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="group">
              <div className="glass p-6 sm:p-7 rounded-2xl border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-5 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-blue-500/10 text-blue-400 transition-colors flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</h3>
                  <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">India</p>
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* Contact Form Container */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="relative glass p-6 sm:p-8 rounded-2xl border border-white/5 bg-slate-900/40 shadow-lg transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    placeholder="Name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors"
                    placeholder="name@gmail.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3.5 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500/20 border border-blue-500/20 transition-colors font-semibold text-lg tracking-wide disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center font-semibold tracking-wide"
                  >
                    🚀 Message sent successfully! I'll be in touch soon.
                  </motion.div>
                )}
              </form>

              {/* Social Links Form Row */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-center gap-6">
                <a href="https://github.com/rishabhKernel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all bg-white/5 p-3 rounded-full border border-white/10">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/rishabhchaurasia/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all bg-white/5 p-3 rounded-full border border-white/10">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="mailto:chaurasiarishabh397@gmail.com" className="text-gray-400 hover:text-purple-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all bg-white/5 p-3 rounded-full border border-white/10">
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
