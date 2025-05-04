import React, { useState } from 'react';
import '../../styles/navbar.css';

const Navbar = ({ setShowLogin, setIsLogin }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="logo">
                    <div className="logo-text">Fresh<span>Khana</span></div>
                </div>

                <div className="nav-links">
                    <a href="#">HOME</a>

                    <div
                        className="nav-link-item dropdown"
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                    >
                        <a href="#">MENU</a>
                        {isMenuOpen && (
                            <div className="dropdown-content">
                                <a href="#">All Items</a>
                                <a href="#">Vegetarian</a>
                                <a href="#">Non-Vegetarian</a>
                                <a href="#">Specials</a>
                            </div>
                        )}
                    </div>

                    <a href="#">SHOP</a>

                    <div
                        className="nav-link-item dropdown"
                        onMouseEnter={() => setIsPagesOpen(true)}
                        onMouseLeave={() => setIsPagesOpen(false)}
                    >
                        <a href="#">PAGES</a>
                        {isPagesOpen && (
                            <div className="dropdown-content">
                                <a href="#">About Us</a>
                                <a href="#">Contact</a>
                                <a href="#">Blog</a>
                                <a href="#">FAQ</a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="right-menu">
                    <button className="cart-button">
                        CART <span className="cart-count">0</span>
                    </button>
                    <button
                        onClick={() => {
                            setIsLogin(true);    
                            setShowLogin(true);  
                        }}
                        className="cta-button"
                    >
                        Sign In
                    </button>
                </div>

                <div className="wave-navbar"></div>
            </nav>
        </header>
    );
};

export default Navbar;
