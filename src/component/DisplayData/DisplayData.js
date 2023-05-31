import React from 'react';
import './DisplayData.css'

const DisplayData = (props) => {
    // console.log(props.food)
    const { food, eventHandler } = props;
    const { strMeal, strMealThumb } = food;
    return (
        <div className='food' onClick={() => eventHandler(food)}>
            <h4>{strMeal}</h4>
            <img src={strMealThumb} alt="" />
            <button>Food Details</button>
        </div>
    );
};

export default DisplayData;