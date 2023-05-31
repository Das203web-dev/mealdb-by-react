import React from 'react';
import './DisplayData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const DisplayData = (props) => {
    // console.log(props.food)
    const { food, eventHandler } = props;
    const { strMeal, strMealThumb } = food;
    return (
        <div className='food' onClick={() => eventHandler(food)}>
            <h4>{strMeal}</h4>
            <img src={strMealThumb} alt="" />
            <button>Food Details <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default DisplayData;