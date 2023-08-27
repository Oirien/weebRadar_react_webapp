import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header.jsx";
import MainPage from "./Containers/MainPage.jsx";
import IndividualPage from "./Containers/IndividualPage";

const App = () => {
    const [sfw, setSfw] = useState(false);
    const [airing, setAiring] = useState(false);
    const [searchBar, setSearchBar] = useState({});

    const router = createBrowserRouter([
        {
            element: <Header sfw={sfw} setSfw={setSfw} airing={airing} setAiring={setAiring} />,
            children: [
                {
                    path: "/anime/",
                    element: <MainPage sfw={sfw} airing={airing} searchBar={searchBar} setSearchBar={setSearchBar} />,
                },
                {
                    path: "/anime/:id",
                    element: <IndividualPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
