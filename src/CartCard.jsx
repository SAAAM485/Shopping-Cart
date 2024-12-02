import PropTypes from "prop-types";
import { CartAdd, CartDecrease, CartRemove } from "./Buttons";

const CartCard = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <div>
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
