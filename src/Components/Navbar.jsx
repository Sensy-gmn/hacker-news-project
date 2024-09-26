import { Link } from "react-router-dom";

export default function Navbar() {
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Search",
            path: "/search",
        },
    ];

    return (
        <>
            <nav className="flex justify-center items-center gap-4">
                <ul className="flex gap-4 text-2xl rounded-lg">
                    {links.map((link, index) => {
                        return (
                            <li
                                key={index}
                                className="bg-blue-500 p-2 rounded-lg"
                            >
                                <a href={link.path}>
                                    <Link key={index} to={link.path}>
                                        {link.name}
                                    </Link>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
