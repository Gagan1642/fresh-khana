import React from "react";
import "../../styles/login.css";

const Login = ({ setShowLogin, setIsLogin }) => {
    return (
        <div className="login-backdrop">
            <div className="login-popup">
                <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
                <h2>Log in</h2>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Log in</button>
                </form>
                <p>
                    Don't have an account?{" "}
                    <span className="switch-link" onClick={() => setIsLogin(false)}>Sign up</span>
                </p>
            </div>
        </div>
    );
};
 
export default Login;