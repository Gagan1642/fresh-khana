import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import '../../styles/navbar.css';

const Navbar = ({ setShowLogin, setIsLogin }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const { getCartItemCount } = useCart();

    // Get cart count using the function from context
    const cartCount = getCartItemCount();

    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <div className="logo-text">Fresh<span>Khana</span></div>
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/">
                        <a href="#">HOME</a>
                    </Link>

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
                    <Link to="/cart">
                        <button className="cart-button">
                            CART <span className="cart-count">{cartCount}</span>
                        </button>
                    </Link>
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