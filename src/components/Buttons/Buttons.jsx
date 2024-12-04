import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../../pages/Cart/CartContext/CartContext";
import styles from "./Buttons.module.css";

const AddToCart = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <button className={styles.button} onClick={() => addToCart(product)}>
            Add to Cart
        </button>
    );
};

AddToCart.propTypes = {
    product: PropTypes.object.isRequired,
};

const BackToProducts = ({ onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            Back
        </button>
    );
};

BackToProducts.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const CartAdd = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    return (
        <button className={styles.button} onClick={() => addToCart(product)}>
            +
        </button>
    );
};

CartAdd.propTypes = {
    product: PropTypes.object.isRequired,
};

const CartDecrease = ({ product }) => {
    const { decreaseCart } = useContext(CartContext);
    return (
        <button className={styles.button} onClick={() => decreaseCart(product)}>
            -
        </button>
    );
};

CartDecrease.propTypes = {
    product: PropTypes.object.isRequired,
};

const CartRemove = ({ product }) => {
    const { removeFromCart } = useContext(CartContext);
    return (
        <button
            className={styles.button}
            onClick={() => removeFromCart(product)}
        >
            Remove
        </button>
    );
};

CartRemove.propTypes = {
    product: PropTypes.object.isRequired,
};

const Checkout = () => {
    return (
        <button className={styles.button} onClick={() => alert("Checkout!")}>
            Checkout
        </button>
    );
};

export {
    AddToCart,
    BackToProducts,
    CartAdd,
    CartDecrease,
    CartRemove,
    Checkout,
};
