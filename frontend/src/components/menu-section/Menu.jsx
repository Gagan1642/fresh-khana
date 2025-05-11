import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { assets } from "../../assets/assets";

const Menu = () => {
    const { addToCart, url } = useCart();
    const [activeCategory, setActiveCategory] = useState("fast-food");
    const [menuItems, setMenuItems] = useState([]);

    // Fetch food items from backend
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`${url}/api/food/list`);
                if (response.data.success) {
                    setMenuItems(response.data.data);
                } else {
                    console.error("Failed to fetch menu items");
                }
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };
        fetchMenuItems();
    }, [url]);

    // Handle add to cart
    const handleAddToCart = (foodName, foodPrice, foodImage) => {
        addToCart(foodName, `₹${foodPrice}`, foodImage);
    };

    // Handle category change
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    // Filter menu items by active category
    const filteredItems = menuItems.filter(item => item.category === activeCategory);

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h1>Delicious Bites</h1>
                <p>Fresh, healthy and delicious food delivered to your doorstep</p>
            </div>

            <section className="menu-section">
                <div className="menu-heading">
                    <h2>Explore our menu</h2>
                    <p>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your
                        cravings and elevate your dining experience, one delicious meal at a time.</p>
                </div>

                <div className="category-menu">
                    <div
                        className={`category-item ${activeCategory === "fast-food" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("fast-food")}
                    >
                        <div className="category-image">
                            <img src={assets.section1} alt="Fast-Food" />
                        </div>
                        <div className="category-name">Fast-Food</div>
                    </div>
                    <div
                        className={`category-item ${activeCategory === "snacks" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("snacks")}
                    >
                        <div className="category-image">
                            <img src={assets.section2} alt="Snacks" />
                        </div>
                        <div className="category-name">Snacks</div>
                    </div>
                    <div
                        className={`category-item ${activeCategory === "drinks" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("drinks")}
                    >
                        <div className="category-image">
                            <img src={assets.section3} alt="Drinks" />
                        </div>
                        <div className="category-name">Drinks</div>
                    </div>
                    <div
                        className={`category-item ${activeCategory === "sweets" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("sweets")}
                    >
                        <div className="category-image">
                            <img src={assets.section4} alt="Sweets" />
                        </div>
                        <div className="category-name">Sweets</div>
                    </div>
                    <div
                        className={`category-item ${activeCategory === "cakes" ? "active" : ""}`}
                        onClick={() => handleCategoryClick("cakes")}
                    >
                        <div className="category-image">
                            <img src={assets.section5} alt="Cakes" />
                        </div>
                        <div className="category-name">Cakes</div>
                    </div>
                </div>

                {/* Render filtered items */}
                <div className="food-items">
                    {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                            <div className="food-card" key={item._id}>
                                <div className="food-image">
                                    <img src={`${url}/images/${item.image}`} alt={item.name} />
                                </div>
                                <div className="food-info">
                                    <h3 className="food-name">{item.name}</h3>
                                    <div className="food-price">
                                        <span className="current-price">₹{item.price}</span>
                                    </div>
                                    <p className="food-description">{item.description}</p>
                                    <button
                                        className="add-to-cart"
                                        onClick={() => handleAddToCart(item.name, item.price, `${url}/images/${item.image}`)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items available in this category.</p>
                    )}
                </div>
            </section>

            <section className="nearby-section">
                <h2>Top dishes near you</h2>
                <div className="food-items">
                    {menuItems.slice(0, 5).map(item => (
                        <div className="food-card" key={`top-${item._id}`}>
                            <div className="food-image">
                                <img src={`${url}/images/${item.image}`} alt={item.name} />
                            </div>
                            <div className="food-info">
                                <h3 className="food-name">{item.name}</h3>
                                <div className="food-price">
                                    <span className="current-price">₹{item.price}</span>
                                </div>
                                <p className="food-description">{item.description}</p>
                                <button
                                    className="add-to-cart"
                                    onClick={() => handleAddToCart(item.name, item.price, `${url}/images/${item.image}`)}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Menu;