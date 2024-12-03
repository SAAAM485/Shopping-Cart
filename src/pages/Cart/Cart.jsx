import { useContext } from "react";
import { CartContext } from "./CartContext/CartContext.jsx";
import CartCard from "./CartCard/CartCard.jsx";
import { Checkout } from "../../components/Buttons/Buttons.jsx";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const totalPrice = cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((product) => (
                <CartCard key={product.id} product={product} />
            ))}
            <div>
                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                <Checkout />
            </div>
        </div>
    );
};

export default Cart;
