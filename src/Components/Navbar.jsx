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
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
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
