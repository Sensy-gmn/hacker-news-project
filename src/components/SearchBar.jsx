const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Rechercher des actualités"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
    );
  };
  
  export default SearchBar;