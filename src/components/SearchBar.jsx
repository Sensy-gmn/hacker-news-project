const SearchBar = ({ searchQuery, setSearchQuery }) => {
  // Fonction qui met à jour la requête de recherche quand l'utilisateur tape quelque chose
    const handleChange = (e) => {
      setSearchQuery(e.target.value);
    };

    // Empêche l'envoi du formulaire au rechargement de la page
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Champ de saisie pour la recherche, qui déclenche handleChange à chaque modification */}
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