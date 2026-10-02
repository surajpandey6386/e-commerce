import mongoose from 'mongoose';

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected!");
    } catch (error) {
        console.log("Error in db:", error.message);
    }
};

export default connectdb;