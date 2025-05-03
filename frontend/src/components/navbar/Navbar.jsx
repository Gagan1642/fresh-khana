import React from "react";

const Navbar = () => {
    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="logo">
                    <div className="logo-text">Fresh<span>Khana</span></div>
                </div>
                <div className="nav-links">
                    <a href="#" className="dropdown">HOME</a>
                    <a href="#" className="dropdown">MENU</a>
                    <a href="#">SHOP</a>
                    <a href="#" className="dropdown">PAGES</a>
                </div>
                <div className="right-menu">
                    <button className="cart-button">
                        CART <span className="cart-count">0</span>
                    </button>
                    <button className="cta-button">Sign In</button>
                </div>
                <div className="wave-navbar"></div>
            </nav> 
        </header>
    );
};

export default Navbar;