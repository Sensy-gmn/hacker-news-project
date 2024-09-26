import React, { useEffect, useState } from 'react';
import { apicall } from './api';
import Card from './Card';
import Header from './components/Header';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await apicall();
                setData(result);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        };

        fetchData();
    }, []);
    // console.log(data);

    return (
        
        <div className="container mx-auto p-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">Articles Hacker News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item) => (
                    <Card key={item.objectID}>
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600 mb-2">Auteur: {item.author}</p>
                        <p className="text-gray-500 mb-2">
                            Créé le: {new Date(item.created_at).toLocaleDateString()}
                        </p>
                        <p className="text-gray-500 mb-2">Points: {item.points}</p>
                        <p className="text-gray-500 mb-2">Nombre de commentaires: {item.num_comments}</p>
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
        </div>
    );
}

export default App;