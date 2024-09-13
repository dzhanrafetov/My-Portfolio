import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import us from '../assets/uk2.png'; // Correct import for the US flag
import bg from '../assets/bg2.png';  // Correct import for the Bulgarian flag
import backgroundVideo from '../assets/8388279-hd_1366_720_25fps.mp4'; // Add your video path

const Intro = ({ onLanguageSelect }) => {
  const [showEnglishText, setShowEnglishText] = useState(true);

  // Toggle between English and Bulgarian text every 2.5 seconds for a smoother feel
  useEffect(() => {
    const interval = setInterval(() => {
      setShowEnglishText((prev) => !prev);
    }, 2500); // 2.5-second interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center items-center text-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full -z-10"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Alternating Text */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
        }}
      >
        {showEnglishText ? (
          <motion.h1
            key="english-text"
            className="text-4xl sm:text-4xl md:text-6xl font-bold tracking-widest drop-shadow-lg" // Add shadow to text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Enter Language
          </motion.h1>
        ) : (
          <motion.h1
            key="bulgarian-text"
            className="text-4xl sm:text-4xl md:text-6xl font-bold tracking-widest drop-shadow-lg" // Add shadow to text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Избери език
          </motion.h1>
        )}
      </motion.div>

      {/* Flag Selection */}
      <motion.div
        className="flex space-x-6 md:space-x-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1.3, ease: 'easeOut' }}
      >
        {/* English Flag Button */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={() => onLanguageSelect('en')}
        >
          <motion.img
            src={us}
            alt="English Flag"
            className="w-20 h-14 sm:w-24 sm:h-16 object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.p
            className="mt-4 text-lg sm:text-xl drop-shadow-md" // Add shadow to the text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
          >
            English
          </motion.p>
        </motion.div>

        {/* Bulgarian Flag Button */}
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={() => onLanguageSelect('bg')}
        >
          <motion.img
            src={bg}
            alt="Bulgarian Flag"
            className="w-20 h-14 sm:w-24 sm:h-16 object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <motion.p
            className="mt-4 text-lg sm:text-xl drop-shadow-md" // Add shadow to the text
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
          >
            Български
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
