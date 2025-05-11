import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddItems = ({ url }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "fast-food",
        price: "",
        image: null
    });
    const [imagePreview, setImagePreview] = useState(null);
    const [successMessage, setSuccessMessage] = useState("Item added successfully");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setFormData({
                ...formData,
                image: file
            });
            
            // Create image preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            // Create form data for file upload
            const formDataForUpload = new FormData();
            formDataForUpload.append("name", formData.name);
            formDataForUpload.append("description", formData.description);
            formDataForUpload.append("category", formData.category);
            formDataForUpload.append("price", formData.price);
            if (formData.image) {
                formDataForUpload.append("image", formData.image);
            }
            
            // Make API call
            const response = await axios.post(
                `${url}/api/food/add`, 
                formDataForUpload,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            
            console.log("API Response:", response.data);
            
            if (response.data.success) {
                // Show success message
                setSuccessMessage("Item Added Successfully!");
                toast.success("Item added successfully!");
                
                // Reset form after submission
                setFormData({
                    name: "",
                    description: "",
                    category: "fast-food",
                    price: "",
                    image: null
                });
                setImagePreview(null);
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000);
            } else {
                toast.error(response.data.message || "Failed to add item");
            }
        } catch (error) {
            console.error("Error adding item:", error);
            toast.error("An error occurred while adding the item");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-items">
            {/* Background decoration with floating circles */}
            <div className="bg-decoration">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
                <div className="bg-circle bg-circle-4"></div>
                <div className="bg-circle bg-circle-5"></div>
                <div className="bg-circle bg-circle-6"></div>
            </div>
            
            <h2 className="page-title">Add New Food Item</h2>
            
            {/* Success message */}
            {successMessage && (
                <div className="success-message">
                    <p>{successMessage}</p>
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        {imagePreview ? (
                            <img 
                                src={imagePreview} 
                                alt="Selected preview" 
                                className="image-preview" 
                            />
                        ) : (
                            <img src={assets.upload_area} alt="Upload" />
                        )}
                    </label>
                    <input 
                        type="file" 
                        id="image" 
                        name="image"
                        accept="image/*"
                        hidden 
                        onChange={handleImageChange}
                        required 
                    />
                    {formData.image && (
                        <p className="file-selected">
                            File selected: {formData.image.name}
                        </p>
                    )}
                </div>
                <div className="add-item-name flex-col">
                    <p>Item Name</p>
                    <input 
                        type="text" 
                        placeholder="Enter item name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="add-item-description flex-col">
                    <p>Item Description</p>
                    <textarea 
                        name="description" 
                        rows="6" 
                        placeholder="Enter item description" 
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Category</p>
                        <select 
                            name="category" 
                            value={formData.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="fast-food">Fast-Food</option>
                            <option value="snacks">Snacks</option>
                            <option value="drinks">Drinks</option>
                            <option value="sweets">Sweets</option>
                            <option value="cakes">Cakes</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Price</p>
                        <input 
                            type="number" 
                            placeholder="₹99" 
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            required
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="add-btn"
                    disabled={loading}
                >
                    {loading ? "ADDING..." : "ADD ITEM"}
                </button>
            </form>
        </div>
    );
};

export default AddItems;
