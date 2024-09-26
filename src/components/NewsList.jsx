import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ searchQuery, page, setPage }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.hits);
        setLoading(false);
      });
  }, [searchQuery, page]);

  if (loading) {
    return <p>Chargement des articles...</p>;
  }

  return (
    <div>
      {articles.length ? (
        articles.map((article) => <NewsCard key={article.objectID} article={article} />)
      ) : (
        <p>Aucun article trouvé</p>
      )}
      <div className="flex justify-between">
        <button onClick={() => setPage((p) => Math.max(p - 1, 0))} className="p-2 bg-blue-500 text-white rounded-md">Précédent</button>
        <button onClick={() => setPage((p) => p + 1)} className="p-2 bg-blue-500 text-white rounded-md">Suivant</button>
      </div>
    </div>
  );
};

export default NewsList;