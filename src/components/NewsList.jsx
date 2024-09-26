import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ searchQuery, page, setPage }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des articles.');
        }
        return res.json();
      })
      .then((data) => {
        const articlesWithLabel = data.hits.map(article => ({
          ...article,
          label: 'News'
        }));
        setArticles(articlesWithLabel);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [searchQuery, page]);

  if (loading) {
    return <p>Chargement des articles...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      {articles.length ? (
        articles.map((article) => <NewsCard key={article.objectID} article={article} />)
      ) : (
        <p>Aucun article trouvé</p>
      )}
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
