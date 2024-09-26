import axios from 'axios';

export const apicall = async () => {
    try {
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=...`);
        const processedData = response.data.hits.map(data => ({
            ...data,
            author: data.author?.startsWith('author_')
                ? data.author.substring(7)
                : data.author
        }));
        return processedData;
    } catch (error) {
        console.error("Erreur de récupération :", error);
        throw error;
    }
};