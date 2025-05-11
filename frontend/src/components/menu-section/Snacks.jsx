import React from "react";
import { snacks } from "../../assets/assets";

const Snacks = ({ onAddToCart }) => {
    return (
        <div className="category-tabs active" id="snacks">
            <h2 className="section-title">Snacks</h2>
            <div className="food-items">
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.aloo_tikki} alt="Aloo Tikki" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Aloo Tikki Chaat</h3>
                        <div className="food-price">
                            <span className="current-price">₹89</span>
                        </div>
                        <p className="food-description">
                            Crispy potato patties topped with tangy yogurt & sweet-spicy chutneys - a street food marvel that dances on your taste buds!
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Aloo Tikki Chaat", "₹89", snacks.aloo_tikki)}
                        >ADD TO CART</button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.chhole_bhature} alt="Chhole Bhature" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Chhole Bhature</h3>
                        <div className="food-price">
                            <span className="current-price">₹149</span>
                        </div>
                        <p className="food-description">
                            Fluffy, deep-fried bhature with spicy chickpea curry - a Punjabi classic that's a flavor explosion in every bite!
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Chhole Bhature", "₹149", snacks.chhole_bhature)}
                        >ADD TO CART</button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.chhole_kulche} alt="Chhole Kulche" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Chhole Kulche</h3>
                        <div className="food-price">
                            <span className="current-price">₹129</span>
                        </div>
                        <p className="food-description">
                            Soft, butter-brushed kulche with masaledar chhole cooked in our secret spice blend - a North Indian delight you'll crave daily!
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Chhole Kulche", "₹129", snacks.chhole_kulche)}
                        >ADD TO CART</button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.chole_samosa} alt="Chole Samosa" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Chole Samosa</h3>
                        <div className="food-price">
                            <span className="current-price">₹99</span>
                        </div>
                        <p className="food-description">
                            Crispy samosas smothered in spicy chhole with tangy chutney - a desi fusion that makes your heart sing with joy!
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Chhole Samosa", "₹99", snacks.chole_samosa)}
                        >ADD TO CART</button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.dahi_vada} alt="Dahi Vada" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Dahi Vada</h3>
                        <div className="food-price">
                            <span className="current-price">₹79</span>
                        </div>
                        <p className="food-description">
                            Soft lentil dumplings in creamy yogurt with sweet-tangy chutneys - a refreshing chaat that cools your soul!
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Dahi Vada", "₹79", snacks.dahi_vada)}
                        >ADD TO CART</button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.dosa} alt="Dosa" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Dosa</h3>
                        <div className="food-price">
                            <span className="current-price">₹119</span>
                        </div>
                        <p className="food-description">
                            Crispy, golden-brown rice crepe with sambar and coconut chutney - South India's gift that makes every bite memorable!
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Dosa", "₹119", snacks.dosa)}
                        >ADD TO CART</button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.golgapa} alt="Golgapa" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Golgapa</h3>
                        <div className="food-price">
                            <span className="current-price">₹69</span>
                        </div>
                        <p className="food-description">
                            Hollow, crispy puris with spicy jaljeera water - pop whole for a flavor explosion that'll make you say 'Ek aur!'
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Golgapa", "₹69", snacks.golgapa)}
                        >ADD TO CART</button>
                    </div>
                </div>
                <div className="food-card">
                    <div className="food-image">
                        <img src={snacks.pao_bhaji} alt="Pao Bhaji" />
                    </div>
                    <div className="food-info">
                        <h3 className="food-name">Pao Bhaji</h3>
                        <div className="food-price">
                            <span className="current-price">₹109</span>
                        </div>
                        <p className="food-description">
                            Buttery pav with mashed veggies in rich, spicy gravy - Mumbai's favorite street food that comforts your soul!
                        </p>
                        <button className="add-to-cart"
                            onClick={() => onAddToCart("Pao Bhaji", "₹109", snacks.pao_bhaji)}
                        >ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Snacks;