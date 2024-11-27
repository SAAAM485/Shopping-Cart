import { Outlet, Link } from "react-router-dom";

function App() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2024 My E-commerce Site. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
