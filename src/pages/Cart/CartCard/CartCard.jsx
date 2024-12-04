import PropTypes from "prop-types";
import {
    CartAdd,
    CartDecrease,
    CartRemove,
} from "../../../components/Buttons/Buttons";
import styles from "./CartCard.module.css";

const CartCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.product}>
                <div className={styles.imgContainer}>
                    <img src={product.image} alt={product.title} />
                </div>
                <div>
                    <p className={styles.title}>{product.title}</p>
                    <p>${product.price}</p>
                </div>
            </div>

            <div className={styles.mani}>
                <CartDecrease product={product} />
                <p>{product.quantity}</p>
                <CartAdd product={product} />
                <CartRemove product={product} />
            </div>
        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default CartCard;
