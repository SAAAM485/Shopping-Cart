import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../pages/Cart/CartContext/CartContext";
import styles from "./App.module.css";

function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=20")
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error("Server Error");
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setProducts(data);
                setCategories([
                    ...new Set(data.map((product) => product.category)),
                ]);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existProduct = prevCart.find(
                (item) => item.id === product.id
            );
            if (existProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const decreaseCart = (product) => {
        setCart((prevCart) => {
            const targetItem = prevCart.find((item) => item.id === product.id);
            if (targetItem.quantity === 1) {
                return prevCart.filter((item) => item.id !== product.id);
            } else {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => {
            return prevCart.filter((item) => item.id !== product.id);
        });
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, decreaseCart, removeFromCart }}
        >
            <div className={styles.container}>
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <div className={styles.dropdown}>
                            <span>Categories</span>
                            <div className={styles.dropdownContent}>
                                {categories.map((category) => (
                                    <Link
                                        key={category}
                                        to={`/categories/${category}`}
                                    >
                                        {category}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link to="/cart">
                            Cart (
                            {cart.reduce((acc, item) => acc + item.quantity, 0)}
                            )
                        </Link>
                    </nav>
                </header>
                <main>
                    {loading && <p>Loading...</p>}
                    {error && (
                        <p>A network error was encountered: {error.message}</p>
                    )}
                    {!loading && !error && <Outlet context={{ products }} />}
                </main>
                <footer>
                    <p>© 2024 Bagel&apos;s Store. All rights reserved.</p>
                </footer>
            </div>
        </CartContext.Provider>
    );
}

export default App;
