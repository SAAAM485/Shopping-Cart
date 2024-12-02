import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartCard from "./CartCard";

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((product) => (
                <CartCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Cart;
