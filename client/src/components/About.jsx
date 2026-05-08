import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiAward, FiCode, FiTrendingUp, FiZap,
  FiStar, FiTarget, FiBook, FiCoffee 
} from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { 
      icon: FiCode, 
      value: '10+', 
      label: 'Projects Completed',
      gradient: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/25',
      bg: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      icon: FiAward, 
      value: '3.98', 
      label: 'CGPA',
      gradient: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/25',
      bg: 'bg-purple-50 dark:bg-purple-900/20'
    },
    { 
      icon: FiZap, 
      value: 'Full Stack', 
      label: 'Developer',
      gradient: 'from-pink-500 to-pink-600',
      shadow: 'shadow-pink-500/25',
      bg: 'bg-pink-50 dark:bg-pink-900/20'
    },
    { 
      icon: FiTrendingUp, 
      value: 'Quick', 
      label: 'Learner',
      gradient: 'from-green-500 to-green-600',
      shadow: 'shadow-green-500/25',
      bg: 'bg-green-50 dark:bg-green-900/20'
    },
  ];

  const highlights = [
    { icon: FiStar, text: 'BSCS Student at National Skills University' },
    { icon: FiTarget, text: 'Strong foundation in DSA & OOP concepts' },
    { icon: FiCoffee, text: 'Passionate about building scalable web apps' },
    { icon: FiBook, text: 'Continuous learner & problem solver' },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white dark:bg-dark-300">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
            <span className="text-gray-900 dark:text-white">Get To Know </span>
            <span className="gradient-text">Me Better</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Decorative shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-[2rem] opacity-20 blur-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-[2rem] rotate-6 opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-pink-500 rounded-[2rem] -rotate-3 opacity-20" />
              
              {/* Main card */}
              <div className="absolute inset-3 glass-card rounded-[1.7rem] overflow-hidden flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-7xl lg:text-8xl mb-6"
                  >
                    👨‍💻
                  </motion.div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Mohsin Imran
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                    <FiCode />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-semibold">
                    CGPA: 3.98
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              A Passionate{' '}
              <span className="gradient-text">Full Stack Developer</span>
              {' '}from Islamabad, Pakistan 📍
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I'm a dedicated BSCS student at <span className="font-semibold text-gray-900 dark:text-white">National Skills University</span> with an outstanding 
              CGPA of <span className="font-bold text-blue-600 dark:text-blue-400">3.98</span>. I specialize in building modern, scalable web applications 
              using cutting-edge technologies. My strong academic foundation combined with 
              practical project experience makes me ready to tackle real-world challenges.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Currently seeking <span className="font-semibold text-blue-600 dark:text-blue-400">internship opportunities</span> to apply my skills, 
              gain industry experience, and contribute to meaningful projects.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-dark-100 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg">
                    <item.icon size={18} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-16 lg:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className={`relative p-6 lg:p-8 rounded-2xl ${stat.bg} border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} text-white ${stat.shadow} mb-4`}>
                  <stat.icon size={22} />
                </div>
                <div className={`text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;