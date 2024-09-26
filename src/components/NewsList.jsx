import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ searchQuery, page, setPage }) => {
  // État pour les articles, le chargement et la gestion des erreurs
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect pour récupérer les articles à chaque changement de recherche ou de page
  useEffect(() => {
    setLoading(true);   // Active le mode chargement
    setError(null);     // Réinitialise les erreurs
    // Appel API pour récupérer les articles en fonction de la requête et de la page
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des articles.');
        }
        return res.json();
      })
      .then((data) => {
        // Ajout d'une étiquette "News" à chaque article
        const articlesWithLabel = data.hits.map(article => ({
          ...article,
          label: 'News'
        }));
        setArticles(articlesWithLabel); // Mise à jour de l'état avec les articles récupérés
        setLoading(false); // Désactive le mode chargement
      })
      .catch((error) => {
        setError(error.message); // Gère les erreurs d'appel API
        setLoading(false);        // Désactive le mode chargement
      });
  }, [searchQuery, page]); // Déclenché lors du changement de recherche ou de page

  // Si en cours de chargement, affiche un message
  if (loading) {
    return <p>Chargement des articles...</p>;
  }

  // Si une erreur survient, affiche le message d'erreur
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      {/* Si des articles sont trouvés, les afficher sous forme de cartes */}
      {articles.length ? (
        articles.map((article) => <NewsCard key={article.objectID} article={article} />)
      ) : (
        <p>Aucun article trouvé</p>
      )}
      {/* Boutons de navigation entre les pages */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="px-4 py-2 bg-orange-500 text-white dark:bg-darkCard dark:text-darkText rounded-md hover:bg-orange-600 dark:hover:bg-darkBorder"
        >
          Précédent
        </button>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-orange-500 text-white dark:bg-darkCard dark:text-darkText rounded-md hover:bg-orange-600 dark:hover:bg-darkBorder"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default NewsList;
