import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Card from './Card';
import Header from './components/Header';

function App() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const ITEMS_PER_PAGE = 15;

    const fetchData = useCallback(async (searchQuery = '', pageNumber = 0) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${pageNumber}&hitsPerPage=${ITEMS_PER_PAGE}`);
            const processedData = response.data.hits.map(item => ({
                ...item,
                author: item.author?.startsWith('author_') ? item.author.substring(7) : item.author
            }));
            setData(processedData);
            setTotalPages(response.data.nbPages);
        } catch (err) {
            setError('Une erreur est survenue lors de la récupération des données.');
            console.error("Erreur de récupération :", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData('', page);
    }, [fetchData, page]);

    useEffect(() => {
        if (query) {
            const debounceTimer = setTimeout(() => {
                fetchData(query, 0);
                setPage(0);
            }, 300);
            return () => clearTimeout(debounceTimer);
        }
    }, [query, fetchData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(query, 0);
        setPage(0);
    };

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(0, prevPage - 1));
    };

    const handleNextPage = () => {
        setPage(prevPage => Math.min(totalPages - 1, prevPage + 1));
    };

    return (
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Articles Hacker News</h1>

            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Rechercher des articles..."
                    className="p-2 border rounded mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Rechercher</button>
            </form>

            {loading && <div className="text-center">Chargement en cours...</div>}

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

            {!loading && data.length === 0 && (
                <div className="text-center">Aucun article trouvé.</div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <Card key={item.objectID}>
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600 mb-2">Auteur: {item.author}</p>
                        <p className="text-gray-500 mb-2">
                            Créé le: {new Date(item.created_at).toLocaleDateString()}
                        </p>
                        <p className="text-gray-500 mb-2">Nombre de commentaires: {item.num_comments}</p>
                        <p className="text-gray-500 mb-2">Points: {item.points}</p>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Lire l'article
                        </a>
                    </Card>
                ))}
            </div>

            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={page === 0}
                    className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
                >
                    Page précédente
                </button>
                <span>Page {page + 1} sur {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages - 1}
                    className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
                >
                    Page suivante
                </button>
            </div>
        </div >
    );
}

export default App;