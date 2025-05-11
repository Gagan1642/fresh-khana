import mongoose from "mongoose";

// MongoDB connection string - use the environment variable or a default local MongoDB URI
 const mongoURI = process.env.MONGO_URI || 'mongodb+srv://gaganjotkourg:Wm8Dr@cluster0.rqstxxb.mongodb.net/foodDeliveryApp';

// Function to connect to MongoDB
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      // Options for the MongoDB connection
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};