import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // État pour gérer si le mode sombre est activé ou non
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect qui ajoute ou enlève la classe 'dark' à l'élément HTML racine
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Active le mode sombre
    } else {
      document.documentElement.classList.remove('dark'); // Désactive le mode sombre
    }
  }, [isDarkMode]); // Déclenché chaque fois que l'état isDarkMode change

  return (
    // Bouton qui permet de basculer entre le mode clair et sombre
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-darkBorder text-gray-900 dark:text-darkText"
    >
      {isDarkMode ? 'Mode Clair' : 'Mode Sombre'}
    </button>
  );
};

export default ThemeToggle;