import { useState } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";
import { BackToProducts } from "../../components/Buttons/Buttons";
import styles from "../pages.module.css";

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
        <div className={styles.page}>
            <h1>Products</h1>
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
                <div className={styles.detail}>
                    <BackToProducts onClick={handleBackClick} />
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default Products;
