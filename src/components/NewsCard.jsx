const NewsCard = ({ article }) => {
    return (
      <div className="bg-white dark:bg-darkCard shadow-md rounded-lg p-6 mb-6 border border-gray-200 dark:border-darkBorder cursor-pointer">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-bold mb-2 text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300">
            {article.title}
          </h2>
          <p className="text-gray-600 dark:text-darkText mb-4">Écrit par {article.author}</p>
          <span className="text-sm text-orange-500 dark:text-orange-300">Étiquette : {article.label}</span>
          <p className="text-sm text-gray-500 dark:text-darkText">{new Date(article.created_at).toLocaleString()}</p>
        </a>
      </div>
    );
  };
  
  export default NewsCard;