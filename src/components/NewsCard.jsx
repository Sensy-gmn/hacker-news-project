const NewsCard = ({ article }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-bold">{article.title}</h2>
                <p className="text-gray-600">{article.author}</p>
                <p>{new Date(article.created_at).toLocaleString()}</p>
            </a>
        </div>
    );
};

export default NewsCard;