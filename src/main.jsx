import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Categories from "./Categories.jsx";
import Cart from "./Cart.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "products",
                element: <Products />,
                children: [
                    {
                        path: ":productId",
                        element: <ProductDetail />,
                    },
                ],
            },
            {
                path: "categories/:category",
                element: <Categories />,
                children: [
                    {
                        path: ":productId",
                        element: <ProductDetail />,
                    },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
