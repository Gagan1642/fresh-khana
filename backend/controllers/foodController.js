import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food items
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        image: image_filename,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
    });

    try {
        const savedFood = await food.save();
        // res.status(200).json(savedFood, { success: true, message: "Food added successfully" });
        res.status(200).json({ success: true, message: "Food added successfully" });
    } catch (error) {
        res.status(500).json(error, {success: false, message: "Failed to add food"});
    }
}

// all foods list
const listFood = async (req, res) => {
    try {
        const allFoods = await foodModel.find({});
        res.status(200).json({success: true, data: allFoods});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Failed to fetch foods"});
    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const removedFood = await foodModel.findByIdAndDelete(req.params.id);
        fs.unlinkSync(`./uploads/${removedFood.image}`);
        res.status(200).json({success: true, message: "Food removed successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Failed to remove food"});
    }
}

export { addFood, listFood, removeFood };