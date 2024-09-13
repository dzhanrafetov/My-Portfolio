// src/App.tsx
import { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Header from './components/Header';
import GetInTouch from './components/GetInTouch';
import Intro from './components/Intro';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Language state

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); // Set the selected language when chosen
  };

  if (!selectedLanguage) {
    return <Intro onLanguageSelect={handleLanguageSelect} />; // Show Intro until language is selected
  }

  return (
    <div>
      <Header language={selectedLanguage} /> {/* Pass the language to Header */}
      <Hero language={selectedLanguage} />
      <Projects language={selectedLanguage} />
      <GetInTouch language={selectedLanguage} />
    </div>
  );
};

export default App;
