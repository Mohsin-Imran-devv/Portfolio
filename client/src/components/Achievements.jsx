import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiAward, FiCode, FiDatabase, FiServer, 
  FiTrendingUp, FiZap, FiStar, FiTarget 
} from 'react-icons/fi';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: FiAward,
      title: 'CGPA 3.98',
      description: 'Outstanding academic performance at National Skills University',
      gradient: 'from-yellow-400 to-orange-500',
      shadow: 'shadow-yellow-500/25',
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    },
    {
      icon: FiCode,
      title: '10+ Projects',
      description: 'Completed full-stack projects with real-world applications',
      gradient: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-500/25',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      icon: FiDatabase,
      title: 'MERN Stack',
      description: 'Proficient in MongoDB, Express, React, and Node.js',
      gradient: 'from-green-400 to-green-600',
      shadow: 'shadow-green-500/25',
      bg: 'bg-green-50 dark:bg-green-900/20',
      iconBg: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    {
      icon: FiServer,
      title: 'DSA Foundation',
      description: 'Strong understanding of Data Structures and Algorithms',
      gradient: 'from-purple-400 to-purple-600',
      shadow: 'shadow-purple-500/25',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      icon: FiZap,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new technologies and concepts',
      gradient: 'from-pink-400 to-pink-600',
      shadow: 'shadow-pink-500/25',
      bg: 'bg-pink-50 dark:bg-pink-900/20',
      iconBg: 'bg-gradient-to-br from-pink-400 to-pink-600'
    },
    {
      icon: FiTarget,
      title: 'Internship Ready',
      description: 'Prepared to contribute to real-world development teams',
      gradient: 'from-indigo-400 to-indigo-600',
      shadow: 'shadow-indigo-500/25',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconBg: 'bg-gradient-to-br from-indigo-400 to-indigo-600'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="achievements" className="relative py-20 lg:py-32 bg-gray-50 dark:bg-dark-200">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-yellow-100/50 to-transparent dark:from-yellow-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/50 to-transparent dark:from-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 font-semibold text-sm mb-4"
          >
            <FiStar className="animate-pulse" />
            Achievements
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
            <span className="text-gray-900 dark:text-white">Why </span>
            <span className="gradient-text">Hire Me?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Key achievements and qualities that make me stand out
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`relative h-full p-6 lg:p-8 rounded-2xl ${achievement.bg} border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/50 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`inline-flex p-4 rounded-2xl ${achievement.iconBg} text-white ${achievement.shadow} mb-6`}
                    >
                      <Icon size={28} />
                    </motion.div>
                    
                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${achievement.gradient} rounded-bl-[3rem]`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-2xl shadow-purple-500/25 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
            </div>
            
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '3.98', label: 'CGPA' },
                { value: '10+', label: 'Projects' },
                { value: '6+', label: 'Technologies' },
                { value: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-white"
                >
                  <div className="text-3xl lg:text-4xl font-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-medium text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;