import { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext"; // 確保路徑正確

const AddToCart = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return <button onClick={() => addToCart(product)}>Add to Cart</button>;
};

AddToCart.propTypes = {
    product: PropTypes.object.isRequired,
};

const BackToProducts = ({ onClick }) => {
    return <button onClick={onClick}>Back</button>;
};

BackToProducts.propTypes = {
    onClick: PropTypes.func.isRequired,
};

const CartAdd = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    return <button onClick={() => addToCart(product)}>+</button>;
};

CartAdd.propTypes = {
    product: PropTypes.object.isRequired,
};

const CartDecrease = ({ product }) => {
    const { decreaseCart } = useContext(CartContext);
    return <button onClick={() => decreaseCart(product)}>-</button>;
};

CartDecrease.propTypes = {
    product: PropTypes.object.isRequired,
};

const CartRemove = ({ product }) => {
    const { removeFromCart } = useContext(CartContext);
    return <button onClick={() => removeFromCart(product)}>Remove</button>;
};

CartRemove.propTypes = {
    product: PropTypes.object.isRequired,
};

const Checkout = () => {};

Checkout.propTypes = {};

export { AddToCart, BackToProducts, CartAdd, CartDecrease, CartRemove };
