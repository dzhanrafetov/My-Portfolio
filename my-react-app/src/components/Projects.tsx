import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import djanamLogo from '../assets/djanam-logo.svg';
import skarataLogo from '../assets/skarataLogo.jpg';

const Projects = ({ language }) => {
  const projects = {
    en: [
      {
        title: 'Djanam & La Opera',
        role: 'Restaurant Website',
        time: 'Varna, Bulgaria',
        logoSrc: djanamLogo,
        url: 'https://www.instagram.com',
        glowColor: 'rgba(255, 0, 255, 0.5)',
        techStack: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Skarata',
        role: 'Restaurant Website',
        time: 'Sofia',
        logoSrc: skarataLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['JavaScript', 'HTML', 'CSS'],
      },
    ],
    bg: [
      {
        title: 'Джанам и Ла Опера',
        role: 'Уебсайт на ресторант',
        time: 'Варна, България',
        logoSrc: djanamLogo,
        url: 'https://www.instagram.com',
        glowColor: 'rgba(255, 0, 255, 0.5)',
        techStack: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Скарата',
        role: 'Уебсайт на ресторант',
        time: 'София',
        logoSrc: skarataLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Джанам и Ла Опера',
        role: 'Уебсайт на ресторант',
        time: 'Варна, България',
        logoSrc: djanamLogo,
        url: 'https://www.instagram.com',
        glowColor: 'rgba(255, 0, 255, 0.5)',
        techStack: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        title: 'Скарата',
        role: 'Уебсайт на ресторант',
        time: 'София',
        logoSrc: skarataLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['JavaScript', 'HTML', 'CSS'],
      },
    ],
  };

  const currentProjects = projects[language || 'en']; // Default to English if no language selected
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateY: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
    hover: {
      scale: 1.08, // Slight increase for more emphasis
      boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)", // Soft glow on hover
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-6 py-8 md:py-16"
      initial="hidden"
      animate={loaded ? 'visible' : ''}
      variants={containerVariants}
    >
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 w-full max-w-sm md:max-w-2xl">
        {currentProjects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              ref={ref}
              className="group relative bg-gray-800 bg-opacity-60 rounded-xl p-4 transition-transform duration-300 ease-out hover:scale-105 transform-gpu hover:shadow-2xl"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.05)', // Slightly more noticeable border
                boxShadow:
                  '0px 20px 50px rgba(0, 0, 0, 0.4), 0px 12px 24px rgba(0, 0, 0, 0.1)', // Darker shadow for more depth
                background:
                  'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
              }}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              exit={{
                opacity: 0,
                y: 50,
                scale: 0.9,
                transition: { duration: 0.5 },
              }}
            >
              {/* Project Logo */}
              <div className="relative w-24 h-24 mx-auto mb-4 transition-transform duration-300 ease-out group-hover:scale-110">
                <img
                  src={project.logoSrc}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                  style={{
                    filter: 'drop-shadow(0px 4px 12px rgba(255, 255, 255, 0.2))', // Softer glow for the logo
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 text-center">
                <ul className="flex flex-wrap gap-2 justify-center">
                  {project.techStack.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
