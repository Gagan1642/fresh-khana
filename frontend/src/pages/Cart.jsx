// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const Cart = () => {
//     const {
//         cartItems,
//         removeFromCart,
//         updateQuantity,
//         toggleItemSelection,
//         getCartTotal,
//         getCartItemCount
//     } = useCart();

//     const [couponCode, setCouponCode] = useState("");

//     // Get total number of items in cart
//     const totalItemsCount = getCartItemCount();

//     // Calculate total number of items selected for checkout
//     const selectedItemsCount = cartItems
//         .filter(item => item.selected)
//         .reduce((total, item) => total + item.quantity, 0);

//     // Handle applying coupon (this is just a placeholder, implement actual coupon logic)
//     const handleApplyCoupon = () => {
//         if (couponCode) {
//             alert(`Coupon ${couponCode} applied!`);
//             // Implement your coupon logic here
//         }
//     };

//     return (
//         <div className="cart-page-container">
//             <div className="cart-header">
//                 <h1>Your <span className="highlight">Cart</span></h1>
//                 <p className="items-count">({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})</p>
//             </div>

//             <div className="cart-content">
//                 <div className="cart-items-container">
//                     {cartItems.length === 0 ? (
//                         <div className="empty-cart-message">
//                             <h3>Your cart is empty</h3>
//                             <p>Add some delicious items from our menu!</p>
//                             <Link to="/" className="continue-shopping-btn">
//                                 Continue Shopping
//                             </Link>
//                         </div>
//                     ) : (
//                         cartItems.map((item) => (
//                             <div key={item.id} className="cart-item">
//                                 <div className="item-select">
//                                     <div
//                                         className={`select-circle ${item.selected ? 'selected' : ''}`}
//                                         onClick={() => toggleItemSelection(item.id)}
//                                     >
//                                         {item.selected && <div className="inner-circle"></div>}
//                                     </div>
//                                 </div>
//                                 <div className="item-image">
//                                     <img src={item.image} alt={item.name} />
//                                 </div>
//                                 <div className="item-details">
//                                     <h3>{item.name}</h3>
//                                     <p className="item-description">
//                                         Fresh {item.name.toLowerCase()}
//                                     </p>
//                                 </div>
//                                 <div className="item-price">
//                                     <span className="price-symbol">₹</span>
//                                     <span className="price-value">{item.totalPrice.toFixed(2)}</span>
//                                 </div>
//                                 <div className="item-quantity">
//                                     <button
//                                         className="quantity-btn minus"
//                                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                                     >
//                                         −
//                                     </button>
//                                     <span className="quantity-value">{item.quantity}</span>
//                                     <button
//                                         className="quantity-btn plus"
//                                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                                 <div className="item-remove">
//                                     <button
//                                         className="remove-btn"
//                                         onClick={() => removeFromCart(item.id)}
//                                     >
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                             <polyline points="3 6 5 6 21 6"></polyline>
//                                             <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 {cartItems.length > 0 && (
//                     <div className="cart-sidebar">
//                         <div className="coupon-section">
//                             <input
//                                 type="text"
//                                 placeholder="Coupon Code"
//                                 value={couponCode}
//                                 onChange={(e) => setCouponCode(e.target.value)}
//                                 className="coupon-input"
//                             />
//                             <button
//                                 className="apply-coupon-btn"
//                                 onClick={handleApplyCoupon}
//                             >
//                                 Apply Coupon →
//                             </button>
//                         </div>

//                         <div className="cart-summary">
//                             <h3>Cart Total</h3>
//                             <div className="summary-row">
//                                 <span>Subtotal</span>
//                                 <span>₹{getCartTotal().toFixed(2)}</span>
//                             </div>
//                             <div className="summary-row">
//                                 <span>Total Items</span>
//                                 <span>{selectedItemsCount} {selectedItemsCount === 1 ? 'item' : 'items'}</span>
//                             </div>
//                             <div className="summary-row">
//                                 <span>Total</span>
//                                 <span>₹{getCartTotal().toFixed(2)}</span>
//                             </div>

//                             <Link to="/checkout" className="checkout-btn">
//                                 Proceed To Checkout →
//                             </Link>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;






















import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        toggleItemSelection,
        getCartTotal,
        getCartItemCount
    } = useCart();

    const [couponCode, setCouponCode] = useState("");

    // Get total number of items in cart
    const totalItemsCount = getCartItemCount();

    // Calculate total number of items selected for checkout
    const selectedItemsCount = cartItems
        .filter(item => item.selected)
        .reduce((total, item) => total + item.quantity, 0);

    // Handle applying coupon (this is just a placeholder, implement actual coupon logic)
    const handleApplyCoupon = () => {
        if (couponCode) {
            alert(`Coupon ${couponCode} applied!`);
            // Implement your coupon logic here
        }
    };

    // Handle proceeding to checkout
    const handleCheckout = () => {
        navigate('/order');
    };

    return (
        <div className="cart-page-container">
            <div className="cart-header">
                <h1>Your <span className="highlight">Cart</span></h1>
                <p className="items-count">({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})</p>
            </div>

            <div className="cart-content">
                <div className="cart-items-container">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-message">
                            <h3>Your cart is empty</h3>
                            <p>Add some delicious items from our menu!</p>
                            <Link to="/menu" className="continue-shopping-btn">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-select">
                                    <div
                                        className={`select-circle ${item.selected ? 'selected' : ''}`}
                                        onClick={() => toggleItemSelection(item.id)}
                                    >
                                        {item.selected && <div className="inner-circle"></div>}
                                    </div>
                                </div>
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="item-description">
                                        Fresh {item.name.toLowerCase()}
                                    </p>
                                </div>
                                <div className="item-price">
                                    <span className="price-symbol">₹</span>
                                    <span className="price-value">{item.totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="item-quantity">
                                    <button
                                        className="quantity-btn minus"
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        −
                                    </button>
                                    <span className="quantity-value">{item.quantity}</span>
                                    <button
                                        className="quantity-btn plus"
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="item-remove">
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-sidebar">
                        <div className="coupon-section">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="coupon-input"
                            />
                            <button
                                className="apply-coupon-btn"
                                onClick={handleApplyCoupon}
                            >
                                Apply Coupon →
                            </button>
                        </div>

                        <div className="cart-summary">
                            <h3>Cart Total</h3>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₹{getCartTotal().toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Total Items</span>
                                <span>{selectedItemsCount} {selectedItemsCount === 1 ? 'item' : 'items'}</span>
                            </div>
                            <div className="summary-row">
                                <span>Total</span>
                                <span>₹{getCartTotal().toFixed(2)}</span>
                            </div>

                            <button className="checkout-btn" onClick={handleCheckout}>
                                Proceed To Checkout →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;