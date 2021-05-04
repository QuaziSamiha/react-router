import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
const Review = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        // console.log(savedCart);
        
        const productKeys = Object.keys(savedCart);
        // console.log(productKeys);
        
        // const counts = productKeys.map(key => savedCart[key]);
        // console.log(counts);

        // const cartProducts = productKeys.map(key => {
        //     const product = fakeData.find(pd => pd.key === key);
        //     return product;
        // });
        // console.log(cartProducts);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])
    return (
        <div>
            {/* <h4>this is review...</h4> */}
            <h1>Cart Items: {cart.length}</h1>
            {/* <ReviewItem></ReviewItem> */}

            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review; 