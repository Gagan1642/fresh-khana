import React from "react";
import "../../styles/login.css";

const SignUp = ({ setShowLogin, setIsLogin }) => {
    return (
        <div className="login-backdrop">
            <div className="login-popup">
                <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
                <h2>Create Account</h2>
                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign up</button>
                </form>
                <p>
                    Already have an account?{" "}
                    <span className="switch-link" onClick={() => setIsLogin(true)}>Log in</span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;