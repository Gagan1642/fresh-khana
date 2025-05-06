import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../styles/order.css';

const Order = () => {
    const { cartItems, getCartTotal } = useCart();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        phone: ''
    });

    // Handler for form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Calculate delivery fee (you can implement your own logic)
    const deliveryFee = cartItems.length > 0 ? 40 : 0;
    
    // Calculate total amount
    const subtotal = getCartTotal();
    const totalAmount = subtotal + deliveryFee;

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the order
        console.log('Order submitted:', { formData, cartItems, totalAmount });
        // You can redirect to payment gateway or confirmation page
        alert('Order placed successfully!');
    };

    // If cart is empty, show a message
    if (cartItems.length === 0) {
        return (
            <div className="empty-order-container">
                <h2>Your cart is empty</h2>
                <p>Add some delicious items to your cart before placing an order.</p>
                <Link to="/menu" className="menu-btn">
                    Browse Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="order-page-container">
            <div className="order-header">
                <h1>Delivery Information</h1>
            </div>

            <div className="order-content">
                <form className="delivery-info-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="street"
                            placeholder="Street"
                            value={formData.street}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="Zip code"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="view-cart-link">
                        <Link to="/cart">
                            View your cart ({cartItems.length} items) →
                        </Link>
                    </div>
                </form>

                <div className="order-summary">
                    <h3>Cart Totals</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery Fee</span>
                        <span>₹{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>₹{totalAmount.toFixed(2)}</span>
                    </div>

                    <button type="submit" className="payment-btn" onClick={handleSubmit}>
                        PROCEED TO PAYMENT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;