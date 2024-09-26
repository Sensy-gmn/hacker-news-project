import axios from "axios";
import { useEffect, useState } from "react";
import ArticleDetails from "./Components/ArticleDetails";
import Navbar from "./Components/Navbar";
function App() {
    // ------------------------------------------ PAGINATION ------------------------------------------//
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const limitArticleByPage = 15;

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };
    // ------------------------------------------ PAGINATION ------------------------------------------//
    useEffect(() => {
        const fetchArticles = async (page, params1, params2) => {
            try {
                const response = await axios.get(
                    `http://hn.algolia.com/api/v1/search_by_date`,
                    {
                        params: {
                            tags: params1,
                            page: page,
                            hitsPerPage: params2,
                        },
                    }
                );
                setArticles(response.data.hits);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles(currentPage, "story", limitArticleByPage);
    }, [currentPage]);

    return (
        <>
            <div className="container mx-auto mt-12 p-4">
                <Navbar />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <ArticleDetails
                            key={article.objectID}
                            title={article.title}
                            author={article.author}
                            created_at={article.created_at}
                            story_id={article.story_id}
                            url={article.url}
                            tags={article.tags}
                        />
                    ))}
                </div>
                <div className="flex gap-2 justify-center text-2xl mt-8">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 0}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <p className="px-4 py-2">{currentPage}</p>
                    <button
                        onClick={handleNextPage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
