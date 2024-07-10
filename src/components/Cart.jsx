// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    const items = useSelector((state) => state.cart.items);

    return (
        <div className='container-fluid py-5'>
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className='row row-cols-4 m-auto'>
                    {items.map((item, index) => (
                        <div className='my-3 text-center' key={index}>
                            <img src={item.image} className='imglogo m-auto' alt={item.title} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
