import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Active ou désactive le mode sombre en ajoutant ou supprimant la classe 'dark'
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-darkBorder text-gray-900 dark:text-darkText"
    >
      {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}
    </button>
  );
};

export default ThemeToggle;