import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  FiGithub, FiLinkedin, FiMail, FiArrowUp, 
  FiHeart, FiCode 
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

 const socialLinks = [
  { 
    icon: FiGithub, 
    href: 'https://github.com/Mohsin-Imran-devv',  
    label: 'GitHub' 
  },
  { 
    icon: FiLinkedin, 
    href: 'https://www.linkedin.com/in/mohsinimran2211',  
    label: 'LinkedIn' 
  },
  { 
    icon: FiMail, 
    href: 'mailto:11mohsinimran11@gmail.com',  
    label: 'Email' 
  },
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-dark-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mb-4"
              >
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                  <span className="text-2xl font-bold gradient-text">Mohsin</span>
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">.dev</span>
                </Link>
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Full Stack Developer passionate about building scalable web applications 
                and solving real-world problems.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Frontend Development',
                  'Backend Development',
                  'API Integration',
                  'UI/UX Design',
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Contact Info
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <FiMail className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" size={16} />
                  <span>11mohsinimran11@gmail.com</span>
                </li>
                <li className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                  <FiCode className="mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400" size={16} />
                  <span>Islamabad, Pakistan</span>
                </li>
                <li className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span>Available for Internship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Mohsin Imran. Built with 
              <FiHeart className="text-red-500 inline animate-pulse" size={16} />
              and React.js
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-sm font-medium"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;