import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    for (let food in cart) {
        console.log(food)
    }
    console.log(cart)
    return (
        <div>
            <h1>Cart : {cart.length}</h1>
            <h2>Food Cart</h2>
        </div>
    );
};

export default Cart;