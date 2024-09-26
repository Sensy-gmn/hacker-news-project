import { useEffect, useState } from "react";
import InfoCard from "./infoCard";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get('https://hn.algolia.com/api/v1/search?query=...');
                setData(response.data.hits)
        };
        fetch();
    }, []);

    console.log(data);

    return (
        <>
            <h1>Home</h1>
            {data.length > 0 && data.map((item) => <InfoCard key={item.id} item={item} />)}
        </>
    );
}

export default App;