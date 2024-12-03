import { useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";
import { BackToProducts } from "../../components/Buttons/Buttons";

const Products = () => {
    const [showDetail, setShowDetail] = useState(false);
    const { products } = useOutletContext();
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/products/${product.id}`, { state: { product } });
        setShowDetail(true);
    };

    const handleBackClick = () => {
        navigate("/products");
        setShowDetail(false);
    };

    if (products.length === 0) return <p>Loading...</p>;

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
                    <BackToProducts onClick={handleBackClick} />
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default Products;
