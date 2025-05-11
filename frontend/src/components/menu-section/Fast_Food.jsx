import React from "react";
import { fast_food } from "../../assets/assets";

const Fast_Food = ({ onAddToCart }) => {
    return (
        <div className="category-tabs active" id="fast-food">
            <h2 className="section-title">Fast-Food</h2>
            <div className="food-items">
                <div className="food-card">
                    <div className="food-image">
                        <img src={fast_food.burger} alt="Burger" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Aloo Tikki Burger</h3>
                        <div className="food-price">
                            <span className="current-price">₹99</span>
                        </div>
                        <p className="food-description">
                            Crunchy aloo tikki with desi spices, fresh veggies and our secret chutney - pure joy in every bite!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Classic Burger", "₹129", fast_food.burger)}
                        >
                            ADD TO CART
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
                        <p className="food-description">
                            Loaded with colorful veggies, desi masala and oodles of cheese - a slice of happiness!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Veggie Pizza", "₹149", fast_food.pizza)}
                        >
                            ADD TO CART
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
                        <p className="food-description">
                            Crispy grilled bread packed with veggies and our special masala - the perfect snack anytime!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Grilled Sandwich", "₹89", fast_food.sandwich)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={fast_food.spring_rolls} alt="Spring Roll" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Spring Roll</h3>
                        <div className="food-price">
                            <span className="current-price">₹79</span>
                        </div>
                        <p className="food-description">
                            Golden-fried rolls with spicy veggie filling - crunchy outside, chatpata inside!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Grilled Sandwich", "₹89", fast_food.spring_rolls)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={fast_food.paneer_rolls} alt="Paneer Roll" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Paneer Roll</h3>
                        <div className="food-price">
                            <span className="current-price">₹99</span>
                        </div>
                        <p className="food-description">
                            Juicy paneer wrapped in soft roti with a kick of spices - the ultimate street food delight!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Paneer Roll", "₹99", fast_food.paneer_rolls)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={fast_food.paneer_tikka} alt="Paneer Tikka" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Paneer Tikka</h3>
                        <div className="food-price">
                            <span className="current-price">₹129</span>
                        </div>
                        <p className="food-description">
                            Smoky tandoori paneer with a secret marinade - so tasty you'll order seconds!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Paneer Tikka", "₹129", fast_food.paneer_tikka)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={fast_food.pasta} alt="Pasta" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Masala Pasta</h3>
                        <div className="food-price">
                            <span className="current-price">₹109</span>
                        </div>
                        <p className="food-description">
                            Desi-style pasta with a masaledaar twist - Italy meets India in every forkful!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Masala Pasta", "₹109", fast_food.pasta)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={fast_food.cutlets} alt="Cutlets" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Veg Cutlets</h3>
                        <div className="food-price">
                            <span className="current-price">₹69</span>
                        </div>
                        <p className="food-description">
                            Crispy outside, soft inside - our mum's special recipe with a punch of Indian masala!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Veg Cutlets", "₹69", fast_food.cutlets)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fast_Food;