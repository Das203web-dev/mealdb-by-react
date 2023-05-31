import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)
    // let foodQuantity = 0;
    let productName;
    let productImg;
    for (let food of cart) {
        console.log(food)
        // foodQuantity = foodQuantity + 1;
        productName = food.strMeal;
        productImg = food.strMealThumb;
        const div = document.createElement('div');
        div.innerHTML = `
                            <div className='cart-div'>
                                
                            </div>
        `

        // console.log(food.strMeal)
    }
    return (
        <div>
            <h1>Cart</h1>
            <div className='cart-div'>
                <img src={productImg} alt="" />
                <p>Food Name : {productName}</p>

            </div>

        </div>
    );
};

export default Cart;