import React, { useState , useEffect } from 'react';
import { FaSun , FaMoon } from 'react-icons/fa';



const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');



  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);


  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <button onClick={handleToggle} className="p-2 rounded-full text-[var(--color-text-primary)] hover:bg-[var(--color-text-secondary)] hover:text-[var(--color-bg)] transition-colors duration-300">
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};


export default ThemeToggle;