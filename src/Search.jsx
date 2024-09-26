import axios from "axios";
import { useEffect, useState } from "react";
import ArticleDetails from "./Components/ArticleDetails";
import Navbar from "./Components/Navbar";

export default function Search() {
    const [searchOn, setSearchOn] = useState(false);
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchOn(true);
        setSearch(e.target.value);
    };

    const handleReset = () => {
        setSearch("");
        setSearchOn(false);
    };

    useEffect(() => {
        const fetchArticlesByQuery = async (page, query) => {
            try {
                const response = await axios.get(
                    `http://hn.algolia.com/api/v1/search`,
                    {
                        params: {
                            query: query,
                            page: page,
                        },
                    }
                );
                setArticles(response.data.hits);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        if (search) {
            fetchArticlesByQuery(0, search, 15);
        }
    }, [search]);

    return (
        <>
            <div className="container mx-auto mt-12 p-4">
                <Navbar />
                {searchOn === false ? (
                    <>
                        <h1 className="text-4xl font-bold text-center mb-8">
                            Search page
                        </h1>
                        <div className="flex bg-gray-500 p-4 rounded-lg justify-between">
                            <div className="flex flex-col gap-2">
                                <label>chercher un article :</label>
                                <input
                                    type="text"
                                    onChange={handleSearch}
                                    value={search}
                                />
                            </div>

                            <button
                                onClick={handleReset}
                                className="bg-orange-400 my-auto px-4 py-2 rounded-lg"
                            >
                                Reset
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-4xl font-bold text-center mb-8">
                            Search page
                        </h1>
                        <div className="flex bg-gray-500 p-4 rounded-lg justify-between">
                            <div className="flex flex-col gap-2">
                                <label>chercher un article :</label>
                                <input
                                    type="text"
                                    onChange={handleSearch}
                                    value={search}
                                />
                            </div>

                            <button
                                onClick={handleReset}
                                className="bg-orange-400 my-auto px-4 py-2 rounded-lg"
                            >
                                Reset
                            </button>
                        </div>
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
                    </>
                )}
            </div>
        </>
    );
}
