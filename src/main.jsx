import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App/App.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx"; // 修正這個路徑
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Cart from "./pages/Cart/Cart.jsx";

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
