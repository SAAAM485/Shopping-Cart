import { AddToCart } from "../Buttons/Buttons";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ product, onClick }) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.product}
                style={{ cursor: "pointer" }}
                onClick={onClick}
            >
                <div className={styles.imgContainer}>
                    <img src={product.image} alt={product.title} />
                </div>

                <div>
                    <p className={styles.title}>{product.title}</p>
                    <p>${product.price}</p>
                </div>
            </div>
            <AddToCart product={product} />
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
