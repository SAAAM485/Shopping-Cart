import {
    useParams,
    useOutletContext,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { BackToProducts } from "../../components/Buttons/Buttons";

const Categories = () => {
    const { category } = useParams();
    const { products } = useOutletContext();
    const navigate = useNavigate();
    const [showDetail, setShowDetail] = useState(false);
    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    const handleProductClick = (product) => {
        navigate(`/categories/${category}/${product.id}`, {
            state: { product, from: category },
        });
        setShowDetail(true);
    };

    const handleBackClick = () => {
        navigate(-1);
        setShowDetail(false);
    };

    useEffect(() => {
        setShowDetail(false);
    }, [category]);

    if (products.length === 0) return <p>Loading...</p>;

    return (
        <div>
            <h1>{category}</h1>
            {!showDetail ? (
                <div>
                    {filteredProducts.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            onClick={() => handleProductClick(product)}
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <BackToProducts onClick={handleBackClick} />
                    <Outlet />
                </div>
            )}
        </div>
    );
};

export default Categories;
