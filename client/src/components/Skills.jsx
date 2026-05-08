import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiVercel
} from 'react-icons/si';
import { 
  FaCode, FaServer, FaDatabase, FaTools, FaJava 
} from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all', label: 'All Skills', icon: FaCode },
    { id: 'frontend', label: 'Frontend', icon: FaCode },
    { id: 'backend', label: 'Backend', icon: FaServer },
    { id: 'database', label: 'Databases', icon: FaDatabase },
    { id: 'tools', label: 'Tools & Others', icon: FaTools },
  ];

  const skills = {
    frontend: [
      { name: 'HTML5', icon: SiHtml5, level: 95, color: 'text-orange-500', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
      { name: 'CSS3', icon: SiCss3, level: 90, color: 'text-blue-500', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
      { name: 'JavaScript', icon: SiJavascript, level: 88, color: 'text-yellow-500', bgColor: 'bg-yellow-50 dark:bg-yellow-900/20' },
      { name: 'React.js', icon: SiReact, level: 85, color: 'text-cyan-500', bgColor: 'bg-cyan-50 dark:bg-cyan-900/20' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, color: 'text-teal-500', bgColor: 'bg-teal-50 dark:bg-teal-900/20' },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, level: 82, color: 'text-green-500', bgColor: 'bg-green-50 dark:bg-green-900/20' },
      { name: 'Express.js', icon: SiExpress, level: 80, color: 'text-gray-700 dark:text-gray-300', bgColor: 'bg-gray-50 dark:bg-gray-800/20' },
    ],
    database: [
      { name: 'MongoDB', icon: SiMongodb, level: 78, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-900/20' },
      { name: 'MySQL', icon: SiMysql, level: 75, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
    ],
    tools: [
      { name: 'C++', icon: TbBrandCpp, level: 80, color: 'text-blue-700', bgColor: 'bg-blue-50 dark:bg-blue-900/20' },
      { name: 'Java', icon: FaJava, level: 75, color: 'text-red-500', bgColor: 'bg-red-50 dark:bg-red-900/20' },
      { name: 'Git', icon: SiGit, level: 85, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-900/20' },
      { name: 'GitHub', icon: SiGithub, level: 88, color: 'text-gray-800 dark:text-gray-200', bgColor: 'bg-gray-50 dark:bg-gray-800/20' },
      { name: 'Vercel', icon: SiVercel, level: 80, color: 'text-gray-900 dark:text-white', bgColor: 'bg-gray-50 dark:bg-gray-800/20' },
    ],
    concepts: [
      { name: 'DSA', icon: FaCode, level: 85, color: 'text-purple-500', bgColor: 'bg-purple-50 dark:bg-purple-900/20' },
      { name: 'OOP', icon: FaCode, level: 82, color: 'text-indigo-500', bgColor: 'bg-indigo-50 dark:bg-indigo-900/20' },
    ]
  };

  const getAllSkills = () => {
    const allSkills = [];
    if (activeCategory === 'all' || activeCategory === 'frontend') allSkills.push(...skills.frontend);
    if (activeCategory === 'all' || activeCategory === 'backend') allSkills.push(...skills.backend);
    if (activeCategory === 'all' || activeCategory === 'database') allSkills.push(...skills.database);
    if (activeCategory === 'all' || activeCategory === 'tools') {
      allSkills.push(...skills.tools);
      allSkills.push(...skills.concepts);
    }
    return allSkills;
  };

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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-20 lg:py-32 bg-gray-50 dark:bg-dark-200">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold text-sm mb-4">
            My Skills
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
            <span className="text-gray-900 dark:text-white">Tech </span>
            <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I've been working with and mastering
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <Icon size={16} />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6"
        >
          <AnimatePresence mode="wait">
            {getAllSkills().map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  layout
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className={`group relative p-6 rounded-2xl ${skill.bgColor} border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`mb-4 text-4xl ${skill.color}`}
                    >
                      <Icon />
                    </motion.div>
                    <h3 className="text-gray-900 dark:text-white font-semibold mb-3">
                      {skill.name}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;