import React, { useEffect } from "react";
import "../../styles/features.css";

const Features = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            observer.observe(card);
        });
        
        return () => {
            featureCards.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, []);
    
    return (
        <section className="features">
            <div className="wave-top"></div>

            <div className="features-content">
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2>Explore the Menu</h2>
                    <p>Discover authentic dishes prepared with fresh, local ingredients and delivered straight to your door..</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2>Customize Your Dish</h2>
                    <p>Mix and match your favorite dishes, adjust spice levels, and add special requests for a truly personalized dining experience.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2>Delicious & Budget-Friendly</h2>
                    <p>Enjoy premium quality cuisine at affordable prices, with special deals for every budget.</p>
                </div>
            </div>
            <div className="wave-bottom"></div>
        </section>
    );
};

export default Features;