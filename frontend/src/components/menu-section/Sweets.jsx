import React from "react";
import { sweets } from "../../assets/assets";

const Sweets = ({ onAddToCart }) => {
    return (
        <div className="category-tabs active" id="sweets">
            <h2 className="section-title">Sweets</h2>
            <div className="food-items">
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.gulab_jamun} alt="Gulab Jamun" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Gulab Jamun</h3>
                        <div className="food-price">
                            <span className="current-price">₹85</span>
                        </div>
                        <p className="food-description">Soft, golden brown dumplings soaked in rose-scented sugar syrup – a melt-in-your-mouth treat for sweet lovers!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Gulab Jamun", "₹85", sweets.gulab_jamun)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.ghevar} alt="Ghevar" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Ghevar</h3>
                        <div className="food-price">
                            <span className="current-price">₹130</span>
                        </div>
                        <p className="food-description">Disc-shaped sweet with honeycomb texture, drizzled with saffron syrup and pistachios – a royal Rajasthani delicacy!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Ghevar", "₹130", sweets.ghevar)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.rasmalai} alt="Rasmalai" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Rasmalai</h3>
                        <div className="food-price">
                            <span className="current-price">₹95</span>
                        </div>
                        <p className="food-description">Delicate cottage cheese dumplings in creamy cardamom milk, garnished with saffron – the perfect royal indulgence!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Rasmalai", "₹95", sweets.rasmalai)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.jalebi_rabri} alt="Jalebi Rabri" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Jalebi Rabri</h3>
                        <div className="food-price">
                            <span className="current-price">₹110</span>
                        </div>
                        <p className="food-description">Crispy, juicy jalebis served with velvety rabri – a divine combination that makes your taste buds dance!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Jalebi Rabri", "₹110", sweets.jalebi_rabri)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.kulfi} alt="Kulfi" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Kulfi</h3>
                        <div className="food-price">
                            <span className="current-price">₹75</span>
                        </div>
                        <p className="food-description">Rich, creamy traditional Indian ice cream with flavors of cardamom and pistachios – the perfect desi treat to beat the heat!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Kulfi", "₹75", sweets.kulfi)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.motichoor_ladoo} alt="Motichoor Ladoo" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Motichoor Ladoo</h3>
                        <div className="food-price">
                            <span className="current-price">₹90</span>
                        </div>
                        <p className="food-description">Tiny gram flour pearls bound with cardamom sugar syrup – these orange delights are festive and absolutely irresistible!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Motichoor Ladoo", "₹90", sweets.motichoor_ladoo)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.kalakand} alt="Kalakand" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Kalakand</h3>
                        <div className="food-price">
                            <span className="current-price">₹100</span>
                        </div>
                        <p className="food-description">Grainy milk squares with cardamom aroma and pistachios – a royal North Indian treat that melts in your mouth!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Kalakand", "₹100", sweets.kalakand)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={sweets.chum_chum} alt="Chum Chum" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Chum Chum</h3>
                        <div className="food-price">
                            <span className="current-price">₹80</span>
                        </div>
                        <p className="food-description">Soft, cylindrical Bengali delicacy soaked in sweet syrup with khoya – a colorful treat that brings Kolkata's flavors to your plate!</p>
                        <button
                            className="add-to-cart"
                            onClick={() => onAddToCart("Chum Chum", "₹80", sweets.chum_chum)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sweets;