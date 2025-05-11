import React from "react";
import { cakes } from "../../assets/assets";

const Cakes = ({ onAddToCart }) => {
    return (
        <div className="category-tabs active" id="cakes">
            <h2 className="section-title">Cakes</h2>
            <div className="food-items">
                <div className="food-card">
                    <div className="food-image">
                        <img src={cakes.chocolate_cake} alt="Chocolate Cake" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Chocolate Cake</h3>
                        <div className="food-price">
                            <span className="current-price">₹350</span>
                        </div>
                        <p className="food-description">
                            Rich, moist layers with velvety chocolate frosting - an irresistible treat for every chocolate lover's dream come true!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Chocolate Cake", "₹350", cakes.chocolate_cake)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={cakes.fruit_cake} alt="Fruit Cake" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Fruit Cake</h3>
                        <div className="food-price">
                            <span className="current-price">₹380</span>
                        </div>
                        <p className="food-description">
                            Soft sponge loaded with fresh seasonal fruits and light cream - a colorful symphony of flavors in every bite!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Fruit Cake", "₹380", cakes.fruit_cake)}
                        >
                            ADD TO CART
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
                        <p className="food-description">
                            Vibrant red layers with creamy cheese frosting - the perfect blend of elegance and indulgence for special occasions!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Red Velvet Cake", "₹420", cakes.red_velvet_cake)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={cakes.cheese_cake} alt="Cheese Cake" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Cheese Cake</h3>
                        <div className="food-price">
                            <span className="current-price">₹450</span>
                        </div>
                        <p className="food-description">
                            Creamy, smooth texture with buttery biscuit base - a heavenly dessert that melts in your mouth with every spoonful!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Cheese Cake", "₹450", cakes.cheese_cake)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={cakes.cupcake} alt="Cupcake" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Cupcakes</h3>
                        <div className="food-price">
                            <span className="current-price">₹120</span>
                        </div>
                        <p className="food-description">
                            Adorable mini cakes topped with swirls of flavored frosting - perfectly portioned sweetness for any time indulgence!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Cupcakes", "₹120", cakes.cupcake)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={cakes.mug_cake} alt="Mug Cake" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Mug Cake</h3>
                        <div className="food-price">
                            <span className="current-price">₹150</span>
                        </div>
                        <p className="food-description">
                            Warm, fluffy cake served in a mug with molten chocolate center - the ultimate quick fix for dessert cravings!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Mug Cake", "₹150", cakes.mug_cake)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={cakes.tart} alt="Tart" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Tart</h3>
                        <div className="food-price">
                            <span className="current-price">₹180</span>
                        </div>
                        <p className="food-description">
                            Buttery crust filled with seasonal fruits and smooth custard - a perfect balance of tangy and sweet flavors!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Tart", "₹180", cakes.tart)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={cakes.brownie} alt="Brownie" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Brownies</h3>
                        <div className="food-price">
                            <span className="current-price">₹160</span>
                        </div>
                        <p className="food-description">
                            Fudgy chocolate squares with crunchy walnuts - decadently rich treats that satisfy your deepest chocolate cravings!
                        </p>
                        <button 
                            className="add-to-cart"
                            onClick={() => onAddToCart("Brownies", "₹160", cakes.brownie)}
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cakes;