import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Header = ({ language }) => {
  // Define text content for both English and Bulgarian
  const content = {
    en: {
      name: 'DZHAN RAFETOV',
    },
    bg: {
      name: 'ДЖАН РАФЕТОВ',
    },
  };

  // Get the current language's content (fallback to English)
  const currentContent = content[language] || content['en'];

  return (
    <header className="sticky top-3 z-50 backdrop-blur-md bg-[rgba(14,16,17,0.9)] py-4 pr-8 pl-6 rounded-[20px] border border-[rgba(255,255,255,0.04)] shadow-[0px_20px_60px_rgba(14,16,17,0.4)] flex justify-between items-center mx-auto w-[57%] max-w-[1300px]">
      {/* Profile Name */}
      <div className="text-gray-500 text-xs tracking-widest font-small">
        {currentContent.name}
      </div>

      {/* Social Icons */}
      <div className="flex space-x-3">
        <a
          href="mailto:dzhanrafetov@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <FaEnvelope size={22} /> {/* Set size to 24px */}
        </a>

        <a
          href="https://wa.me/message/FSBOQVLCXA3UC1"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 duration-300"
        >
          <FaWhatsapp size={22} /> {/* Set size to 24px */}
        </a>
      </div>
    </header>
  );
};

export default Header;
