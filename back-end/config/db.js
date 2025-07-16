import mongoose from 'mongoose';
const connectdb = ()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/ecommerce');
        console.log("Database connected!")
    } catch (error) {
        console.log("Error in db");
    }
}

export default connectdb;