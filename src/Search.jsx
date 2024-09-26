import { useState } from "react";

export default function Search() {
    const [searchOn, setSearchOn] = useState(false);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchOn(true);
        setSearch(e.target.value);
    };

    const handleReset = () => {
        setSearch("");
        setSearchOn(false);
    };

    useEffect(() => {}, []);

    return (
        <>
            <div className="container mx-auto mt-12 p-4">
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
                                disabled={search === ""}
                                onClick={handleSearch}
                                className="bg-orange-400 my-auto px-4 py-2 rounded-lg disabled:opacity-50"
                            >
                                Chercher
                            </button>
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
                        <button
                            onClick={handleReset}
                            className="bg-orange-400 my-auto px-4 py-2 rounded-lg"
                        >
                            Reset
                        </button>
                    </>
                )}
            </div>
        </>
    );
}
