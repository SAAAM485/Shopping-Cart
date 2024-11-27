import { AddToCart } from "./Buttons";
import PropTypes from "prop-types";

const Card = ({ product, onClick }) => {
    return (
        <div style={{ cursor: "pointer" }} onClick={onClick}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <AddToCart id={product.id} />
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
