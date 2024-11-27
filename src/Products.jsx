import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Card from "./Card";
import { BackToProducts } from "./Buttons";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showDetail, setShowDetail] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=20")
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("Server Error");
                } else {
                    return res.json();
                }
            })
            .then((product) => setProducts(product))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const handleProductClick = (product) => {
        navigate(`/products/${product.id}`, { state: { product } });
        setShowDetail(true);
    };
    const handleBackClick = () => {
        navigate("/products");
        setShowDetail(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div>
            <h2>Products</h2>
            {!showDetail ? (
                <div>
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            onClick={() => handleProductClick(product)}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <BackToProducts onClick={() => handleBackClick()} />
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default Products;
