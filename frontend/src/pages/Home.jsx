import React from "react";
import Hero from "../components/hero-section/Hero";
import Features from "../components/features-section/Features";
import Steps from "../components/steps/Steps";
import Menu from "../components/menu-section/Menu";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Steps />
            <Menu />
            <Footer />
        </div>
    )
};

export default Home;