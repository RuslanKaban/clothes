import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__menu">
                    <a href="#men" className="header__link">Men</a>
                    <a href="#women" className="header__link">Women</a>
                    <a href="#location" className="header__link">Location</a>
                </div>

                <div className="header__logo">
                    <h1>goddaamn...</h1>
                </div>
            </nav>
        </header>
    );
};

export default Header;
