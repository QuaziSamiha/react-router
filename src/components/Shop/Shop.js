import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {

    // console.log(fakeData); // fakeData is an array of objects
    const [products, setProducts] = useState(fakeData); // products = fakeData
    // console.log(products);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // console.log('added', product);
        const newCart = [...cart, product];
        setCart(newCart);

        // addToDatabaseCart(product.key, 1);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* {
                    products.map(pd =>
                        <Product key={pd.key} product={pd} addToCart={handleAddToCart}>
                        </Product>)
                } */}

                {
                    products.map(pd =>
                        <Product
                            showAddToCart={true}
                            key={pd.key}
                            product={pd}
                            addToCart={handleAddToCart}>
                        </Product>
                    )
                }
            </div>
            <div className="cart-container">
                {/* <h4>cart length {cart.length}</h4> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;