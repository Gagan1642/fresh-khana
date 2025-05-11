import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if(!user){
            return res.status(400).json({success: false, message: "User does not exist"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({success: false, message: "Incorrect password"});
        }

        const token = createToken(user._id);
        res.json({success: true, message: "User logged in successfully", token});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Failed to login user"});
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // if user already exists
        const exists = await userModel.findOne({ email });
        if(exists){
            return res.status(400).json({success: false, message: "User already exists"});
        }

        // if email is not valid
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false, message: "Invalid email"});
        }

        // if password is not strong enough
        if(password.length < 8){
            return res.status(400).json({success: false, message: "Password is not strong enough"});
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // saving user
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, message: "User registered successfully", token});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Failed to register user"});
    }
}

export { loginUser, registerUser };