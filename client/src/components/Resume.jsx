import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEye, FiFileText, FiBriefcase, FiBook, FiCode } from 'react-icons/fi';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: FiBook,
      title: 'Education',
      items: [
        'BSCS - National Skills University',
        'CGPA: 3.98',
        'Current Student',
      ]
    },
    {
      icon: FiCode,
      title: 'Technical Skills',
      items: [
        'MERN Stack Development',
        'Data Structures & Algorithms',
        'Object Oriented Programming',
      ]
    },
    {
      icon: FiBriefcase,
      title: 'Experience',
      items: [
        '10+ Full Stack Projects',
        'Open Source Contributor',
        'Freelance Developer',
      ]
    },
  ];

  return (
    <section id="resume" className="relative py-20 lg:py-32 bg-white dark:bg-dark-300">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex p-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-8"
          >
            <FiFileText className="text-blue-600 dark:text-blue-400" size={40} />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="gradient-text">Resume</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            Download my resume to learn more about my education, skills, and project experience.
            Ready to contribute to your team!
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <FiDownload size={22} className="group-hover:animate-bounce" />
              Download CV
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <FiEye size={22} />
              View Resume
            </motion.a>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative group"
              >
                <div className="h-full p-6 lg:p-8 rounded-2xl bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4">
                    <highlight.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {highlight.title}
                  </h3>
                  <ul className="space-y-3">
                    {highlight.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative p-8 lg:p-12 rounded-3xl bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-2xl opacity-20" />
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    MI
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Mohsin Imran
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Education</div>
                    <div className="font-semibold text-gray-900 dark:text-white">BSCS</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">CGPA: 3.98</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects</div>
                    <div className="font-semibold text-gray-900 dark:text-white">10+</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Completed</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Stack</div>
                    <div className="font-semibold text-gray-900 dark:text-white">MERN</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Developer</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-gray-900 dark:text-white">Islamabad</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Pakistan</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;