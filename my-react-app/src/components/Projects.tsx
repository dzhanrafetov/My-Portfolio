import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import djanamLogo from '../assets/djanam-logo.svg';
import djanam from '../assets/djanam.png';
import azteca from '../assets/azteca.png';
// import aztecaLogo from '../assets/azteca-logo.png';
import skarata from '../assets/skarata.png';
import eacf from '../assets/eacf.png';
import eacfLogo from '../assets/eacfLogo.png';
import skarataLogo from '../assets/skarataLogo.jpg';

const Projects = ({ language }) => {
  // Project data in both languages
  const projects = {
    en: [
      {
        title: 'Djanam & La Opera',
        role: 'Restaurant Website',
        time: 'Varna, Bulgaria',
        imgSrc: djanam,
        logoSrc: djanamLogo,
        url: 'https://www.instagram.com',
        glowColor: 'rgba(255, 0, 255, 0.5)',
        techStack: ['React', 'Tailwind CSS', 'Node.js'],
      },
      {
        title: 'Azteca Premium',
        role: 'Tobacco Shop Website',
        time: '/ 2018',
        imgSrc: azteca,
        logoSrc: djanamLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['Figma', 'Sketch', 'Photoshop'],
      },
      {
        title: 'Skarata ',
        role: 'Restaurant Website',
        time: 'Sofia',
        imgSrc: skarata,
        logoSrc: skarataLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['Figma', 'Sketch', 'Photoshop'],
      },
      {
        title: 'Foundation EACF ',
        role: 'Foundation Website',
        time: 'Sofia',
        imgSrc: eacf,
        logoSrc: eacfLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['Figma', 'Sketch', 'Photoshop'],
      },
    ],
    bg: [
      {
        title: 'Джанам и Ла Опера',
        role: 'Уебсайт на ресторант',
        time: 'Варна, България',
        imgSrc: djanam,
        logoSrc: djanamLogo,
        url: 'https://www.instagram.com',
        glowColor: 'rgba(255, 0, 255, 0.5)',
        techStack: ['React', 'Tailwind CSS', 'Node.js'],
      },
      {
        title: 'Azteca Premium',
        role: 'Уебсайт на магазин за тютюн',
        time: '/ 2018',
        imgSrc: azteca,
        logoSrc: djanamLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['Figma', 'Sketch', 'Photoshop'],
      },
      {
        title: 'Скарата ',
        role: 'Уебсайт на ресторант',
        time: 'София',
        imgSrc: skarata,
        logoSrc: skarataLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['Figma', 'Sketch', 'Photoshop'],
      },
      {
        title: 'Фондация EACF ',
        role: 'Уебсайт на фондация',
        time: 'София',
        imgSrc: eacf,
        logoSrc: eacfLogo,
        url: 'https://www.messenger.com',
        glowColor: 'rgba(31, 56, 244, 1)',
        techStack: ['Figma', 'Sketch', 'Photoshop'],
      },
    ],
  };

  // Choose the correct projects based on the selected language
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
      scale: 1.05,
      rotateZ: [0, 2, -2, 2, -2, 0],
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-16"
      initial="hidden"
      animate={loaded ? 'visible' : ''}
      variants={containerVariants}
    >
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 w-full max-w-6xl">
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
              className="group relative bg-gray-800 bg-opacity-60 rounded-2xl p-6 transition-transform duration-300 ease-out hover:scale-105 transform-gpu hover:shadow-2xl"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.02)',
                boxShadow:
                  '0px 20px 50px rgba(0, 0, 0, 0.2), 0px 12px 24px rgba(0, 0, 0, 0.06)',
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
              {/* Image Container */}
             <div
  className="relative w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-out group-hover:scale-105"
  style={{
    borderRadius: '28px',
    boxShadow: '0px 6px 60px rgba(0, 0, 0, 0.12)',
    filter: 'brightness(0.8)',
  }}
>
  <img
    src={project.imgSrc}
    alt={project.title}
    className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out"
    loading="lazy"
  />
  <div
    className="absolute inset-0 transition-all duration-300"
    style={{
      filter: 'blur(60px)',
      opacity: '0.5',
      borderRadius: 'inherit',
    }}
  ></div>
</div>

              {/* Project Logo */}
              <div className="absolute top-4 left-4 w-16 h-16 transition-transform duration-300 ease-out group-hover:scale-110">
                <img
                  src={project.logoSrc}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                  style={{ filter: 'brightness(0.8)' }} // Darken the logo
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 text-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4">
                <ul className="flex flex-wrap gap-2">
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
