import { useLocation } from "react-router-dom";
import { AddToCart } from "./Buttons";

function ProductDetail() {
    const location = useLocation();
    const { product } = location.state || {};

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img
                src={product.image}
                alt={product.title}
                style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                    marginBottom: "20px",
                }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <AddToCart id={product.id} />
        </div>
    );
}

export default ProductDetail;
