import React from "react";
import { assets } from "../../assets/assets";
import { SquareMenu, CookingPot, Microwave, CalendarSync } from "lucide-react";

const Steps = () => {
    return (
        <section className="details-section">
            <div className="bg-decoration">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
                <div className="bg-circle bg-circle-4"></div>
            </div>

            <div className="plate-container">
                <img src={assets.plate} alt="Healthy meal plate" className="plate-image" id="rotating-plate" />
            </div>

            <div className="content-container">
                <div className="started-text">Started</div>
                <h1 className="main-heading">Delicious Food, Delivered Fresh</h1>
                <p className="description">
                Experience restaurant-quality dishes prepared by skilled chefs using the finest ingredients, all from the comfort of home.
                </p>

                <ul className="features-list">
                    <li className="feature-item">
                        <div className="feature-icon choose-icon">
                        <SquareMenu size={20}/>
                        </div>
                        <span className="feature-text">Choose your meals</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon cook-icon">
                        <CookingPot size={20}/>
                        </div>
                        <span className="feature-text">We cook & deliver</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon heat-icon">
                        <Microwave size={20}/>
                        </div>
                        <span className="feature-text">Heat & eat</span>
                    </li>
                    <li className="feature-item">
                        <div className="feature-icon repeat-icon">
                        <CalendarSync size={20}/>
                        </div>
                        <span className="feature-text">Enjoy & Repeat</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Steps;