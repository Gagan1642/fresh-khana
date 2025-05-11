import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/itemsList.css";

const ItemsList = ({ url }) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchList = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${url}/api/food/list`);
            console.log("Fetched data:", response.data);
            
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Failed to fetch list");
            }
        } catch (error) {
            console.error("Error fetching food items:", error);
            toast.error("An error occurred while fetching food items");
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            const response = await axios.delete(`${url}/api/food/remove/${itemId}`);

            if (response.data.success) {
                toast.success("Item removed successfully");
                fetchList(); // Refresh the list
            } else {
                toast.error("Failed to remove item");
            }
        } catch (error) {
            console.error("Error removing item:", error);
            toast.error("An error occurred while removing the item");
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="items-list">
            {/* Background decoration with floating circles */}
            <div className="bg-decoration">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
                <div className="bg-circle bg-circle-4"></div>
                <div className="bg-circle bg-circle-5"></div>
                <div className="bg-circle bg-circle-6"></div>
            </div>
            
            <h2 className="page-title">Food Items List</h2>
            
            {loading ? (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Loading items...</p>
                </div>
            ) : list.length === 0 ? (
                <div className="no-items">
                    <p>No items found. Add some items to get started!</p>
                </div>
            ) : (
                <div className="items-container">
                    <div className="items-header">
                        <div className="item-col image-col">Image</div>
                        <div className="item-col name-col">Name</div>
                        <div className="item-col price-col">Price</div>
                        <div className="item-col category-col">Category</div>
                        <div className="item-col action-col">Action</div>
                    </div>
                    
                    <div className="items-body">
                        {list.map((item) => (
                            <div className="item-row" key={item._id || item.id}>
                                <div className="item-col image-col">
                                    {item.image ? (
                                        <img 
                                            src={`${url}/images/${item.image}`} 
                                            alt={item.name} 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://via.placeholder.com/80?text=No+Image";
                                            }}
                                        />
                                    ) : (
                                        <div className="no-image">No Image</div>
                                    )}
                                </div>
                                <div className="item-col name-col">{item.name}</div>
                                <div className="item-col price-col">₹{item.price}</div>
                                <div className="item-col category-col">
                                    <span className={`category-badge ${item.category}`}>
                                        {item.category}
                                    </span>
                                </div>
                                <div className="item-col action-col">
                                    <button 
                                        className="remove-btn"
                                        onClick={() => handleRemoveItem(item._id || item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemsList;

