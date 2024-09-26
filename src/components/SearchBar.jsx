const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rechercher des actualités"
          value={searchQuery}
          onChange={handleChange}
          className="w-full p-2 mb-6 border-2 border-orange-500 dark:border-darkBorder bg-white dark:bg-darkCard text-gray-900 dark:text-darkText rounded-md focus:outline-none focus:ring focus:border-orange-600 dark:focus:border-orange-400"
        />
      </form>
    );
  };
  
  export default SearchBar;