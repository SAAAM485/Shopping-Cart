import PropTypes from "prop-types";

const AddToCart = ({ id }) => {
    return <button id={id}>Add to Cart</button>;
};

AddToCart.propTypes = {
    id: PropTypes.number.isRequired,
};

const BackToProducts = ({ onClick }) => {
    return <button onClick={onClick}>Back</button>;
};

BackToProducts.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export { AddToCart, BackToProducts };
