import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <a href="/home">Home</a>
            <a href="/Food">Food</a>
            <a href="/cart">Cart</a>
            <a href="/Contact">Contact</a>
        </nav>
    );
};

export default Header;