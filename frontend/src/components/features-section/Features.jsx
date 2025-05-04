import React, { useEffect } from "react";
import { Menu, Heart, Leaf } from 'lucide-react';
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
            <div className="features-content">
                <div className="feature-card">
                    <div className="feature-icon">
                        <Menu className="h-6 w-6 text-orange-500" />
                    </div>
                    <h2>Explore the Menu</h2>
                    <p>Discover authentic dishes prepared with fresh, local ingredients and delivered straight to your door..</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <Heart className="h-6 w-6 text-orange-500" />
                    </div>
                    <h2>Customize Your Dish</h2>
                    <p>Mix and match your favorite dishes, adjust spice levels, and add special requests for a truly personalized dining experience.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">
                        <Leaf className="h-6 w-6 text-orange-500" />
                    </div>
                    <h2>Delicious & Budget-Friendly</h2>
                    <p>Enjoy premium quality cuisine at affordable prices, with special deals for every budget.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
