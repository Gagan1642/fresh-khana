import React from "react";
import { Bell, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <div className="logo-text">Fresh<span>Khana</span></div>
                    </Link>
                </div>
                <div className="navbar-middle">
                    <div className="search-container">
                        <Search size={18} className="search-icon" />
                        <input type="text" placeholder="Search..." className="search-input" />
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="navbar-item">
                        <div className="admin-profile">
                            <div className="admin-avatar">
                                <img src={assets.admin} alt="" />
                            </div>
                            <span className="admin-name">Admin</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;