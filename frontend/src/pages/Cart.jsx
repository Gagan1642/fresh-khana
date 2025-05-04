import React from "react";

const Cart = () => {
    return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "red", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h1>Cart</h1>
        <p>You have no items in your cart</p>
    </div>;
};

export default Cart;