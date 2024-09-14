import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaViber } from 'react-icons/fa';

const GetInTouch = ({ language }) => {
  const [hovered, setHovered] = useState(false);
  const [waveOnLoad, setWaveOnLoad] = useState(false);

  // Trigger wave animation when the component loads
  useEffect(() => {
    setWaveOnLoad(true);
    const timer = setTimeout(() => setWaveOnLoad(false), 2000); // Remove the animation after it completes
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Text content for both English and Bulgarian languages
  const content = {
    en: {
      greeting: "Let's get in touch",
      description:
        "I'm always open to discussing new projects or creative ideas. Feel free to reach out through email or connect with me on social media.",
    },
    bg: {
      greeting: 'Нека се свържем',
      description:
        'Винаги съм отворен за обсъждане на нови проекти или креативни идеи. Не се колебайте да се свържете с мен по имейл или в социалните медии.',
    },
  };

  const currentContent = content[language] || content['en']; // Fallback to English if language is not set

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center space-y-8 text-center px-4">
        {/* Animated Emoji with Wave Animation */}
        <span
          className={`text-8xl transition-transform duration-300 ${
            hovered ? 'animate-bounce' : ''
          } ${waveOnLoad ? 'animate-wave' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          👋
        </span>

        {/* Main Text */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold transition-transform duration-300">
          {currentContent.greeting}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-xl">
          {currentContent.description}
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4">

          <a
            href="mailto:dzhanrafetov@gmail.com"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300 text-4xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/message/FSBOQVLCXA3UC1"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300 text-4xl"
          >
            <FaWhatsapp />
          </a>


          <a
            href="https://www.linkedin.com/in/dzhan-rafetov-0bb4211a6/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300 text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/dzhanrafetov"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300 text-4xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>


    </div>
  );
};

export default GetInTouch;
