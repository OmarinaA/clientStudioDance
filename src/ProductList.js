import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios.get('/products');
            setProducts(result.data);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <p> {product.sessions}</p>
                        <p>{product.periods}</p>
                        <p>{product.directions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
