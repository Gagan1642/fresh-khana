import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
import "../../styles/login.css";

const SignUp = ({ setShowLogin, setIsLogin }) => {

    const { url, setToken } = useContext(CartContext);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
        
        // Clear errors when user types
        if (errors[name]) {
            setErrors({...errors, [name]: ""});
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: "", email: "", password: "" };
        
        // Name validation
        if (!data.name.trim()) {
            newErrors.name = "Name is required";
            valid = false;
        }
        
        // Email validation
        if (!data.email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = "Email address is invalid";
            valid = false;
        }
        
        // Password validation
        if (!data.password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (data.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            valid = false;
        }
        
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    
    let newUrl = url;
    if (validateForm()) {
        newUrl += "/api/user/register";  // Correct endpoint for registration
    } else {
        alert("Please fill the form correctly");
        return;
    }
    
    try {
        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            const token = response.data.token;
            setToken(token);
            localStorage.setItem("token", token);
            setShowLogin(false);
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("Something went wrong. Please try again.");
    }
};


    return (
        <div className="login-backdrop">
            <div className="login-popup">
                <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
                <h2>Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Full Name" 
                            value={data.name}
                            onChange={onChangeHandler}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={data.email}
                            onChange={onChangeHandler}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={data.password}
                            onChange={onChangeHandler}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>
                    <button type="submit" className="signup-btn">Sign up</button>
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