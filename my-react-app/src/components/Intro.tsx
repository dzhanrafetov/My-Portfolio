// src/components/Intro.tsx
import { motion } from 'framer-motion';
import  { useState, useEffect } from 'react';
import us from '../assets/uk2.png'; // Correct import for the US flag
import bg from '../assets/bg2.png';  // Correct import for the Bulgarian flag

const Intro = ({ onLanguageSelect }) => {
  const [showEnglishText, setShowEnglishText] = useState(true);

  // Toggle between English and Bulgarian text every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnglishText((prev) => !prev);
    }, 1500); // 1.5-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center items-center bg-black text-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Alternating Text */}
      <motion.div className="text-center mb-12" initial="hidden" animate="visible">
        {showEnglishText ? (
          <motion.h1
            key="english-text"
            className="text-4xl md:text-6xl font-bold tracking-widest"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            Enter Language
          </motion.h1>
        ) : (
          <motion.h1
            key="bulgarian-text"
            className="text-4xl md:text-6xl font-bold tracking-widest"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            Избери език
          </motion.h1>
        )}
      </motion.div>

      {/* Flag Selection */}
      <motion.div
        className="flex space-x-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        {/* English Flag Button */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => onLanguageSelect('en')}
        >
          <img
            src={us}
            alt="English Flag"
            className="w-24 h-16 object-cover"
          />
          <p className="mt-4 text-xl">English</p>
        </motion.div>

        {/* Bulgarian Flag Button */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => onLanguageSelect('bg')}
        >
          <img
            src={bg}
            alt="Bulgarian Flag"
            className="w-24 h-16 object-cover"
          />
          <p className="mt-4 text-xl">Български</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
