import { useState, createContext } from 'react';

export const langContext = createContext('en');

const LangContext = ({ children }) => {
  const [lang, setLang] = useState('ua');

  const toggleLang = () =>
    setLang(prevLang => (prevLang === 'en' ? 'ua' : 'en'));

  return (
    <langContext.Provider value={{ lang, toggleLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LangContext;
