import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiAirbnb,
  SiNetflix,
  SiAmazon,
  SiGoogle,
  SiYoutube,
} from "react-icons/si";
import {
  FaShoppingCart,
  FaHome,
  FaTasks,
  FaGlobeAmericas,
  FaExchangeAlt,
  FaLaugh,
  FaMusic,
  FaFilm,
  FaQrcode,
  FaCloudSun,
  FaStopwatch,
  FaHandRock,
  FaGamepad,
  FaQuoteRight,
  FaCalculator,
} from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdCardGiftcard } from "react-icons/md";
import { GiPingPongBat, GiSnake } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = ["All", "Full Stack", "React", "JavaScript"];

  const projects = [
    // ==================== FULL STACK PROJECTS ====================
    {
      id: 1,
      title: "E-Commerce Full Stack",
      icon: FaShoppingCart,
      description:
        "Complete MERN stack e-commerce with JWT Authentication, Cloudinary image upload & Multer file handling.",
      longDescription:
        "A full-featured e-commerce platform built with MERN stack. Includes JWT authentication, product CRUD operations, Cloudinary image uploads, Multer file handling, secure login/signup, shopping cart, and responsive design.",
      category: "Full Stack",
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JWT",
        "Cloudinary",
        "Multer",
      ],
      techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
      github: "https://github.com/Mohsin-Imran-dev/e-commerce-final",
      live: "https://e-commerce-frontend-puce-iota.vercel.app/",
      features: [
        "JWT Authentication & Authorization",
        "Product Management (CRUD)",
        "Cloudinary Image Upload",
        "Multer File Handling",
        "Secure Login/Signup",
        "Responsive Design",
      ],
    },
    {
      id: 2,
      title: "Airbnb Full Stack Clone",
      icon: SiAirbnb,
      description:
        "Full stack Airbnb clone with property listings, booking system & user authentication.",
      longDescription:
        "A complete Airbnb clone featuring property listings, booking management, user authentication, reviews system, and modern UI/UX design with responsive layout.",
      category: "Full Stack",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
      github: "https://github.com/Mohsin-Imran-devv/airbnb.git",
      live: "https://airbnb-tau-nine.vercel.app/",
      features: [
        "Property Listings",
        "Booking System",
        "User Authentication",
        "Reviews & Ratings",
        "Modern UI/UX",
      ],
    },
    {
      id: 4,
      title: "Todo Full Stack App",
      icon: FaTasks,
      description:
        "Full stack todo application with CRUD operations & MongoDB database storage.",
      longDescription:
        "A complete full stack todo application with create, read, update, delete operations, MongoDB database integration, task management, and real-time data persistence.",
      category: "Full Stack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      techIcons: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      github: "https://github.com/Mohsin-Imran-devv/TodoApp.git",
      live: "https://todo-app-frontend-liart-ten.vercel.app/",
      features: [
        "Complete CRUD Operations",
        "MongoDB Database",
        "Task Management",
        "Real-time Updates",
        "Responsive Design",
      ],
    },

    // ==================== REACT PROJECTS ====================
    {
      id: 5,
      title: "Country Info App",
      icon: FaGlobeAmericas,
      description:
        "Search any country to get instant details like capital, continent, population & currency.",
      longDescription:
        "A React application that fetches country information using REST APIs. Search any country name to get details including capital city, continent, population, common language, and currency.",
      category: "React",
      tech: ["React.js", "REST API", "CSS3", "JavaScript"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Country-info.git",
      live: "https://country-info-henna-sigma.vercel.app/",
      features: [
        "Search Any Country",
        "Capital & Continent Info",
        "Population Data",
        "Language & Currency",
        "API Integration",
      ],
    },
    {
      id: 6,
      title: "Currency Converter",
      icon: FaExchangeAlt,
      description:
        "Real-time currency converter with live exchange rates & accurate conversion.",
      longDescription:
        "A logical currency converter using latest currency APIs. Features real-time exchange rates, multi-currency support, and accurate conversions with a clean modern interface.",
      category: "React",
      tech: ["React.js", "Exchange Rate API", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-dev/currency-converter",
      live: "#",
      features: [
        "Live Exchange Rates",
        "Multi-Currency Support",
        "Accurate Conversion",
        "Latest API Integration",
        "Clean UI",
      ],
    },
    {
      id: 7,
      title: "Jokes Generator",
      icon: FaLaugh,
      description:
        "Generate random jokes with a single click using API integration.",
      longDescription:
        "A fun React application that fetches random jokes from API. Each button click displays a new joke on screen with smooth animations.",
      category: "React",
      tech: ["React.js", "Jokes API", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Jokes-Generator.git",
      live: "https://jokejenerator.vercel.app/",
      features: [
        "Random Joke Generation",
        "API Integration",
        "Click to Refresh",
        "Smooth Animations",
        "Clean Design",
      ],
    },
    {
      id: 8,
      title: "Lyrics Finder",
      icon: FaMusic,
      description:
        "Search any song name to instantly get complete lyrics with artist info.",
      longDescription:
        "A React app that finds lyrics for any song. Enter song name in search bar, and it displays complete lyrics along with artist information using lyrics API.",
      category: "React",
      tech: ["React.js", "Lyrics API", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Lyrics-Finder.git",
      live: "https://lyrics-finder-roan.vercel.app/",
      features: [
        "Search Song Lyrics",
        "Artist Information",
        "Complete Lyrics Display",
        "API Integration",
        "User-friendly UI",
      ],
    },
    {
      id: 9,
      title: "Movie Trailer Finder",
      icon: FaFilm,
      description:
        "Search movies & watch trailers instantly with integrated video player.",
      longDescription:
        "A movie discovery app that allows users to search movies and watch their trailers. Features movie search, trailer playback, movie details, ratings, and cast information.",
      category: "React",
      tech: ["React.js", "Movie API", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Movie-Trailer.git",
      live: "https://movie-trailer-ecru.vercel.app/",
      features: [
        "Search Movies",
        "Watch Trailers",
        "Movie Details & Ratings",
        "Video Player Integration",
        "Responsive Design",
      ],
    },
    {
      id: 10,
      title: "QR Code Generator",
      icon: FaQrcode,
      description:
        "Generate custom QR codes with adjustable size, colors & text input.",
      longDescription:
        "A React application to generate QR codes. Customize text, size, and colors. Scan the QR code to reveal the encoded message.",
      category: "React",
      tech: ["React.js", "QR API", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/QR-Generator.git",
      live: "https://qr-generator-eight-kappa.vercel.app/",
      features: [
        "Generate QR Codes",
        "Custom Text Input",
        "Adjustable Size",
        "Color Selection",
        "Instant Generation",
      ],
    },
    {
      id: 11,
      title: "Weather App",
      icon: FaCloudSun,
      description:
        "Real-time weather data with city search, temperature, humidity & forecast.",
      longDescription:
        "A weather application that fetches real-time weather data. Features city search, temperature, humidity, wind speed, and weather conditions with beautiful UI.",
      category: "React",
      tech: ["React.js", "Weather API", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Weather-App.git",
      live: "https://weather-app-beta-sooty.vercel.app/",
      features: [
        "Real-time Weather API",
        "Search Any City",
        "Temperature & Humidity",
        "Weather Conditions",
        "Modern UI",
      ],
    },
    {
      id: 12,
      title: "Stop Watch App",
      icon: FaStopwatch,
      description:
        "Functional stopwatch with start, stop & reset features built in React.",
      longDescription:
        "A clean stopwatch application built with React featuring start, stop, reset functionality with precise timing and clean user interface.",
      category: "React",
      tech: ["React.js", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-dev/stopwatch",
      live: "#",
      features: [
        "Start/Stop Timer",
        "Reset Functionality",
        "Precise Timing",
        "Clean UI",
        "Responsive Design",
      ],
    },
    {
      id: 13,
      title: "Card Flipper Game",
      icon: MdCardGiftcard,
      description:
        "Memory card matching game with 14 cards, flip to find matching pairs.",
      longDescription:
        "An engaging memory card game with 14 cards. Flip cards to find matching pairs. If two selected cards match, they stay open; otherwise, they flip back automatically.",
      category: "React",
      tech: ["React.js", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Memory-Game.git",
      live: "https://memory-game-nu-ivory-86.vercel.app/",
      features: [
        "14 Card Memory Game",
        "Card Matching Logic",
        "Auto Flip on Mismatch",
        "Score Tracking",
        "Interactive UI",
      ],
    },

    // ==================== FRONTEND CLONES ====================
    {
      id: 15,
      title: "Quote Generator",
      icon: FaQuoteRight,
      description:
        "Random quote generator with copy & share features, built with React and API.",
      longDescription:
        "An inspiring quote generator app that fetches random quotes from API. Features copy to clipboard, share functionality, loading animations, and elegant card-based design.",
      category: "React",
      tech: ["React.js", "Quotes API", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Quote-Generator.git",
      live: "https://quote-generator-weld-nine.vercel.app/",
      features: [
        "Random Quote Generation",
        "Copy to Clipboard",
        "Share Functionality",
        "Loading Animations",
        "Elegant Card Design",
      ],
    },
    {
      id: 16,
      title: "Myntra Clone",
      icon: IoShirtOutline,
      description:
        "Frontend Myntra clone with fashion categories, product cards & modern UI.",
      longDescription:
        "A stylish Myntra frontend clone featuring fashion categories, product cards, image galleries, and modern e-commerce UI design.",
      category: "JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript"],
      techIcons: [SiHtml5, SiCss3, SiJavascript],
      github: "https://github.com/Mohsin-Imran-devv/Myntra.git",
      live: "https://myntra-frontend-five.vercel.app/",
      features: [
        "Fashion Categories",
        "Product Cards",
        "Image Gallery",
        "Modern UI",
        "Responsive Design",
      ],
    },
    {
      id: 17,
      title: "Calculator",
      icon: FaCalculator,
      description:
        "Fully functional calculator with keyboard support & responsive design.",
      longDescription:
        "A fully functional calculator built with React featuring all basic arithmetic operations, keyboard support, responsive design, and clean modern UI with smooth animations.",
      category: "React",
      tech: ["React.js", "JavaScript", "CSS3"],
      techIcons: [SiReact, SiJavascript, SiCss3],
      github: "https://github.com/Mohsin-Imran-devv/Calculator.git",
      live: "https://mohsin-imran-devv.github.io/Calculator/",
      features: [
        "Basic Arithmetic Operations",
        "Keyboard Support",
        "Responsive Design",
        "Clean Modern UI",
        "Smooth Animations",
      ],
    },

    // ==================== JAVASCRIPT GAMES ====================
    {
      id: 19,
      title: "Tic Tac Toe Game",
      icon: BsGrid3X3GapFill,
      description:
        "Classic two-player Tic Tac Toe game with win detection & score tracking.",
      longDescription:
        "A classic Tic Tac Toe game built with vanilla JavaScript. Features two-player mode, win detection logic, score tracking, and interactive game board.",
      category: "JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript"],
      techIcons: [SiHtml5, SiCss3, SiJavascript],
      github: "https://github.com/Mohsin-Imran-devv/Tic-Tac-Toe.git",
      live: "https://mohsin-imran-devv.github.io/Tic-Tac-Toe/",
      features: [
        "Two Player Mode",
        "Win Detection",
        "Score Tracking",
        "Interactive Board",
        "Clean Design",
      ],
    },
    {
      id: 20,
      title: "Rock Paper Scissors",
      icon: FaHandRock,
      description:
        "Interactive Rock Paper Scissors game vs computer with score tracking.",
      longDescription:
        "An engaging Rock Paper Scissors game against computer AI. Features random computer moves, player choice selection, score tracking, and animated results.",
      category: "JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript"],
      techIcons: [SiHtml5, SiCss3, SiJavascript],
      github: "https://github.com/Mohsin-Imran-devv/RPS.git",
      live: "https://mohsin-imran-devv.github.io/RPS/",
      features: [
        "Play vs Computer",
        "Random AI Moves",
        "Score Tracking",
        "Animated Results",
        "Interactive UI",
      ],
    },
    {
      id: 21,
      title: "Ping Pong Game",
      icon: GiPingPongBat,
      description:
        "Classic Ping Pong game with paddle controls, ball physics & score system.",
      longDescription:
        "A classic Ping Pong game built with JavaScript. Features paddle controls, realistic ball physics, scoring system, and increasing difficulty levels.",
      category: "JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas"],
      techIcons: [SiHtml5, SiCss3, SiJavascript],
      github: "https://github.com/Mohsin-Imran-devv/Ping-Pong.git",
      live: "https://mohsin-imran-devv.github.io/Ping-Pong/",
      features: [
        "Paddle Controls",
        "Ball Physics",
        "Score System",
        "Difficulty Levels",
        "Canvas Animation",
      ],
    },
    {
      id: 22,
      title: "Snake Master Game",
      icon: GiSnake,
      description:
        "Classic Snake game with arrow controls, food collection & score tracking.",
      longDescription:
        "A nostalgic Snake game built with JavaScript. Control the snake with arrow keys, eat food to grow, avoid walls, and achieve high scores.",
      category: "JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas"],
      techIcons: [SiHtml5, SiCss3, SiJavascript],
      github: "https://github.com/Mohsin-Imran-devv/Snake-Master.git",
      live: "https://mohsin-imran-devv.github.io/Snake-Master/",
      features: [
        "Arrow Key Controls",
        "Food Collection",
        "Score Tracking",
        "Game Over Detection",
        "Canvas Graphics",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 lg:py-32 bg-white dark:bg-dark-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
            <span className="text-gray-900 dark:text-white">All </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {projects.length}+ projects showcasing my full stack development
            journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-100 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  layout
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full bg-gray-50 dark:bg-dark-100 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-white text-6xl"
                      >
                        <IconComponent size={60} />
                      </motion.div>
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                            project.category === "Full Stack"
                              ? "bg-purple-100/90 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                              : project.category === "React"
                                ? "bg-cyan-100/90 text-cyan-700 dark:bg-cyan-900/50 dark:text-cyan-300"
                                : "bg-yellow-100/90 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300"
                          }`}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {project.tech.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg text-xs font-medium transition-all"
                        >
                          <FiGithub size={14} />
                          Code
                        </a>
                        <a
                          href={
                            project.live === "#" ? project.github : project.live
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-xs font-medium transition-all shadow-md"
                        >
                          <FiExternalLink size={14} />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-200 rounded-2xl shadow-2xl"
            >
              {(() => {
                const ModalIcon = selectedProject.icon;
                return (
                  <>
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                      <span className="text-white text-7xl">
                        <ModalIcon size={80} />
                      </span>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white transition-all"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                          selectedProject.category === "Full Stack"
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        }`}
                      >
                        {selectedProject.category}
                      </span>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Features
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {selectedProject.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-xl font-medium transition-all"
                        >
                          <FiGithub size={20} />
                          View Code
                        </a>
                        {selectedProject.live !== "#" && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all"
                          >
                            <FiExternalLink size={20} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
