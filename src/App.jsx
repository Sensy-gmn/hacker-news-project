import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

// Composant principal de l'application
const App = () => {
  // Définition de l'état pour la requête de recherche et la pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-400">Hacker News 2.0</h1>
        <ThemeToggle />
      </div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NewsList searchQuery={searchQuery} page={page} setPage={setPage} />
    </div>
  );
};

export default App;