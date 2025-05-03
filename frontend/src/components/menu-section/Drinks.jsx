import React from "react";
import { drinks } from "../../assets/assets";

const Drinks = ({ onAddToCart }) => {
    return (
        <div className="category-tabs active" id="drinks">
            <h2 className="section-title">Drinks</h2>
            <div className="food-items">
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
                            onClick={() => onAddToCart("Cold Coffee", "₹99")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={drinks.falooda} alt="Falooda" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Falooda</h3>
                        <div className="food-price">
                            <span className="current-price">₹149</span>
                        </div>
                        <p className="food-description">Royal treat with layers of rose syrup, vermicelli, basil seeds, and creamy rabri - a dessert drink fit for Maharajas!</p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Falooda", "₹149")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={drinks.lassi} alt="Lassi" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Lassi</h3>
                        <div className="food-price">
                            <span className="current-price">₹89</span>
                        </div>
                        <p className="food-description">Thick, creamy yogurt churned to perfection with a hint of cardamom - Punjab's gift to beat the summer heat!</p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Lassi", "₹89")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={drinks.milk} alt="Kesar Badam" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Kesar Badam Milk</h3>
                        <div className="food-price">
                            <span className="current-price">₹79</span>
                        </div>
                        <p className="food-description">Rich milk infused with saffron strands and crushed almonds - a royal indulgence that's both tasty and healthy!</p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Kesar Badam Milk", "₹79")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={drinks.mango_shake} alt="Mango Shake" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Mango Shake</h3>
                        <div className="food-price">
                            <span className="current-price">₹99</span>
                        </div>
                        <p className="food-description">Alphonso magic in a glass! Creamy, pulpy and oh-so-delicious - the king of fruits transformed into summer's perfect companion!</p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Mango Shake", "₹99")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={drinks.hot_chocolate} alt="Hot Chocolate" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Hot Chocolate</h3>
                        <div className="food-price">
                            <span className="current-price">₹129</span>
                        </div>
                        <p className="food-description">Velvety smooth chocolate delight with a desi twist of cinnamon and cardamom - pure comfort in every sip!</p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Hot Chocolate", "₹129")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={drinks.shikanji} alt="Shikanji" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Shikanji</h3>
                        <div className="food-price">
                            <span className="current-price">₹69</span>
                        </div>
                        <p className="food-description">Tangy lime cooler with a secret masala mix - the perfect desi lemonade to quench your thirst and rejuvenate your soul!</p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Shikanji", "₹69")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={drinks.ruh_avzah} alt="Ruh Avzah" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Ruh Avzah</h3>
                        <div className="food-price">
                            <span className="current-price">₹75</span>
                        </div>
                        <p className="food-description">Traditional Kashmiri refresher with rose essence and basil seeds - a cooling concoction straight from the valleys of paradise!</p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Ruh Avzah", "₹75")}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drinks;