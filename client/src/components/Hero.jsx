import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fpsLimit: 60,
    particles: {
      number: { 
        value: 50, 
        density: { 
          enable: true, 
          area: 800 
        } 
      },
      color: { value: "#3b82f6" },
      shape: { type: "circle" },
      opacity: { 
        value: 0.3, 
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1
        }
      },
      size: { 
        value: 3, 
        random: true 
      },
      links: {
        enable: true,
        distance: 150,
        color: "#3b82f6",
        opacity: 0.15,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: { 
          enable: true, 
          mode: "grab" 
        },
        resize: true
      },
      modes: {
        grab: { 
          distance: 180, 
          links: { 
            opacity: 0.4 
          } 
        }
      }
    },
    detectRetina: true
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const socialLinks = [
  { 
    icon: FiGithub, 
    href: 'https://github.com/Mohsin-Imran-dev',  
    label: 'GitHub',
    color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
  },
  { 
    icon: FiLinkedin, 
    href: 'https://www.linkedin.com/in/mohsinimran2211',  
    label: 'LinkedIn',
    color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30'
  },
  { 
    icon: FiMail, 
    href: 'mailto:11mohsinimran11@gmail.com',  
    label: 'Email',
    color: 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30'
  },
];
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-300 dark:via-dark-200 dark:to-dark-300" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-200/10 dark:bg-pink-900/10 rounded-full blur-3xl"
        />
      </div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-dark-100/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm shadow-lg"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for Internship
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <br className="sm:hidden" />
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300%">
              Mohsin Imran
            </span>
          </motion.h1>

          {/* Rotating titles */}
          <motion.div
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6 h-20 sm:h-16"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React.js Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed px-4"
          >
            Passionate BSCS student at National Skills University crafting 
            <span className="text-primary-600 dark:text-primary-400 font-semibold"> scalable web applications </span> 
            and solving real-world problems.
            <span className="block mt-2 text-primary-600 dark:text-primary-400 font-semibold">CGPA 3.98</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.button>
            </Link>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-dark-100 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Download CV
            </motion.a>

            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card text-gray-800 dark:text-white rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto border border-gray-200 dark:border-gray-700"
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3.5 rounded-xl bg-white dark:bg-dark-100 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-100"
            >
              <FiArrowDown className="text-primary-500 dark:text-primary-400" size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-dark-300 to-transparent" />
    </section>
  );
};

export default Hero;