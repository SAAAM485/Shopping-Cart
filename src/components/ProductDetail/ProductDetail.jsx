import { useLocation } from "react-router-dom";
import { AddToCart } from "../Buttons/Buttons";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
    const location = useLocation();
    const { product } = location.state || {};

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.product}>
            <div className={styles.imgContainer}>
                <img src={product.image} alt={product.title} />
            </div>

            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>

            <AddToCart product={product} />
        </div>
    );
}

export default ProductDetail;
