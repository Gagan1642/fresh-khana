import React, { useEffect } from 'react';
import { assets } from '../../assets/assets.js';
import '../../styles/hero.css';

const Hero = () => {
    useEffect(() => {
        const header = document.querySelector('.header-container');
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 20) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }

            if (currentScrollY > lastScrollY) {
                header?.classList.add('hide');
            } else {
                header?.classList.remove('hide');
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="hero">
            <div className="hero-images">
                <div className="hero-image hero-image-1" id="top-left-image">
                    <img src={assets.daal} alt="daal" />
                </div>
                <div className="hero-image hero-image-2" id="bottom-left-image">
                    <img src={assets.palak_paneer} alt="palak paneer" />
                </div>
                <div className="hero-image hero-image-3" id="right-image">
                    <img src={assets.pulav} alt="pulav" />
                </div>
            </div>
            <div className="hero-content">
                <h1> <span>Hungry?</span> <br /> Eat Well<br />Without the Hassle</h1>
                <p> Your time is precious. <br /> Let us handle the food while you focus on what matters most.</p>
                <button className="hero-button">Order Now</button>
            </div>
        </section>
    );
};

export default Hero;