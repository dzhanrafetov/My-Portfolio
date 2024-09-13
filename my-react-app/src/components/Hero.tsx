// src/components/Hero.tsx
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Hero = ({ language }) => {
  const [showTyping, setShowTyping] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [dots, setDots] = useState('');

  // Control typing and paragraph animations
  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setShowTyping(true);
    }, 1000);

    const paragraphTimer = setTimeout(() => {
      setShowParagraph(true);
      setShowTyping(false);
    }, 4000);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(paragraphTimer);
    };
  }, []);

  // Control the dots animation (... typing effect)
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? '' : prevDots + '.'));
    }, 500);

    return () => clearInterval(dotInterval);
  }, [showTyping]);

  // Texts for both languages
  const texts = {
    en: {
      greeting: "Hey, I'm Dzhan",
      typing: 'Typing',
      paragraph1: 'a web developer bringing',
      paragraph2: 'client visions to life.',
      checkProjects: 'Check My Projects',
    },
    bg: {
      greeting: 'Здравейте, аз съм Джан',
      typing: 'Пишe',
      paragraph1: 'уеб разработчик, който превръща',
      paragraph2: 'идеи в реалност.',
      checkProjects: 'Виж моите проекти',
    },
  };

  // Get the correct text based on the selected language
  const selectedText = texts[language || 'en']; // Default to English if no language is selected

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white relative px-6" style={{ paddingBottom: '150px' }}>
      <motion.main className="flex flex-col items-center justify-center text-center" initial="hidden" animate="visible">
        {/* Heading */}
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-gray-200 leading-tight tracking-tight mb-3"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
          }}
        >
          {selectedText.greeting}
        </motion.h1>

        {/* Typing... effect */}
        {showTyping && (
          <motion.p
            className="font-medium text-2xl md:text-3xl leading-snug text-gray-400 mb-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } },
            }}
          >
            {selectedText.typing}
            {dots}
          </motion.p>
        )}

        {/* Final paragraph */}
        {showParagraph && (
          <>
            <motion.p
              className="font-medium text-2xl md:text-3xl leading-snug text-gray-400 mb-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
              }}
            >
              {selectedText.paragraph1}
            </motion.p>
            <motion.p
              className="font-medium text-2xl md:text-3xl leading-snug text-gray-400"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
              }}
            >
              {selectedText.paragraph2}
            </motion.p>
          </>
        )}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-16 flex flex-col items-center space-y-2"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-400 text-base md:text-lg cursor-pointer">{selectedText.checkProjects}</p>
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Hero;
