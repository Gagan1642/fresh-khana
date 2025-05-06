import React, { useState } from "react";
import Fast_Food from "./Fast_Food";
import Snacks from "./Snacks";
import Drinks from "./Drinks";
import Sweets from "./Sweets";
import Cakes from "./Cakes";
import { assets } from "../../assets/assets";
import { fast_food } from "../../assets/assets";
import { snacks } from "../../assets/assets";
import { drinks } from "../../assets/assets";
import { cakes } from "../../assets/assets";
import { useCart } from "../../context/CartContext"; // Import useCart hook

const Menu = () => {
    // Use React state to track the active category
    const [activeCategory, setActiveCategory] = useState("fast-food");
    
    // Get addToCart function from context
    const { addToCart } = useCart();

    // Function to handle category click
    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    // Function to handle add to cart with correct parameter format
    const handleAddToCart = (foodName, foodPrice, foodImage) => {
        // Use the addToCart function from context
        addToCart(foodName, foodPrice, foodImage);
    };

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

                {/* Only render the active category tab */}
                <div style={{ display: activeCategory === "fast-food" ? "block" : "none" }}>
                    <Fast_Food onAddToCart={handleAddToCart} />
                </div>
                <div style={{ display: activeCategory === "snacks" ? "block" : "none" }}>
                    <Snacks onAddToCart={handleAddToCart} />
                </div>
                <div style={{ display: activeCategory === "drinks" ? "block" : "none" }}>
                    <Drinks onAddToCart={handleAddToCart} />
                </div>
                <div style={{ display: activeCategory === "sweets" ? "block" : "none" }}>
                    <Sweets onAddToCart={handleAddToCart} />
                </div>
                <div style={{ display: activeCategory === "cakes" ? "block" : "none" }}>
                    <Cakes onAddToCart={handleAddToCart} />
                </div>
                {/* Add other categories when you implement them */}
            </section>

            <section className="nearby-section">
                <h2>Top dishes near you</h2>
                <div className="food-items">
                    <div className="food-card">
                        <div className="food-image">
                            <img src={snacks.chole_samosa} alt="Chole Samosa" />
                        </div>
                        <div className="food-info">
                            <h3 className="food-name">Chole Samosa</h3>
                            <div className="food-price">
                                <span className="current-price">₹99</span>
                            </div>
                            <p className="food-description">Crispy samosas smothered in spicy chhole with tangy chutney - a desi fusion that makes your heart sing with joy!</p>
                            <button 
                                className="add-to-cart"
                                onClick={() => handleAddToCart("Chole Samosa", "₹99", snacks.chole_samosa)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-image">
                            <img src={fast_food.pizza} alt="Pizza" />
                        </div>
                        <div className="food-info">
                            <h3 className="food-name">Veggie Pizza</h3>
                            <div className="food-price">
                                <span className="current-price">₹149</span>
                            </div>
                            <p className="food-description">Loaded with colorful veggies, desi masala and oodles of cheese - a slice of happiness!</p>
                            <button
                                className="add-to-cart"
                                onClick={() => handleAddToCart("Veggie Pizza", "₹149", fast_food.pizza)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-image">
                            <img src={fast_food.sandwich} alt="Sandwich" />
                        </div>
                        <div className="food-info">
                            <h3 className="food-name">Grilled Sandwich</h3>
                            <div className="food-price">
                                <span className="current-price">₹89</span>
                            </div>
                            <p className="food-description">Crispy grilled bread packed with veggies and our special masala - the perfect snack anytime!</p>
                            <button
                                className="add-to-cart"
                                onClick={() => handleAddToCart("Grilled Sandwich", "₹89", fast_food.sandwich)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-image">
                            <img src={cakes.red_velvet_cake} alt="Red Velvet Cake" />
                        </div>
                        <div className="food-info">
                            <h3 className="food-name">Red Velvet Cake</h3>
                            <div className="food-price">
                                <span className="current-price">₹420</span>
                            </div>
                            <p className="food-description">Vibrant red layers with creamy cheese frosting – the perfect blend of elegance and indulgence for special occasions!</p>
                            <button
                                className="add-to-cart"
                                onClick={() => handleAddToCart("Red Velvet Cake", "₹420", cakes.red_velvet_cake)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="food-card">
                        <div className="food-image">
                            <img src={drinks.cold_coffee} alt="Cold Coffee" />
                        </div>
                        <div className="food-info">
                            <h3 className="food-name">Cold Coffee</h3>
                            <div className="food-price">
                                <span className="current-price">₹99</span>
                            </div>
                            <p className="food-description">Creamy, frothy goodness with a perfect blend of coffee and ice - a refreshing pick-me-up that'll keep you chilled!</p>
                            <button
                                className="add-to-cart"
                                onClick={() => handleAddToCart("Cold Coffee", "₹99", drinks.cold_coffee)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;