import React from "react";

const Order = () => {
    return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "red", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h1>Order</h1>
        <p>You have no items in your order</p>
    </div>;
};

export default Order;