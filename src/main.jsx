import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Search from "./Search.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/search",
        element: <Search />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
