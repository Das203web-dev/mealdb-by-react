import React, { useEffect, useState } from 'react';
import './LoadData.css'
import DisplayData from '../DisplayData/DisplayData';
import Cart from '../Cart/Cart';

const LoadData = () => {
    const [cart, setcart] = useState([])
    const handleEvent = (food) => {
        console.log('button clicked', food)
    }
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            // fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [foods])
    return (
        <div className='food-cart-container'>
            {/* <h1>{foods.length}</h1> */}

            <div className='food-container'>
                {
                    foods.map(food => <DisplayData key={food.idMeal} food={food} eventHandler={handleEvent}></DisplayData>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default LoadData;