import { useEffect } from "react";
import InfoCard from "./infoCard";
import axios from "axios";

function App() {

    useEffect(() => {
        axios.get('http://hn.algolia.com/api/v1/search?query=...')
    }, []);

    return (
        <>
            <InfoCard />
        </>
    );
}

export default App;