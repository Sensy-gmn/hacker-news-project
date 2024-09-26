import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import NewsList from './components/NewsList';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('react');
  const [page, setPage] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Agrégateur d'actualités</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NewsList searchQuery={searchQuery} page={page} setPage={setPage} />
    </div>
  );
};

export default App;
