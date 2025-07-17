import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema({
  imgLink: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number, 
  },
  itemname: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
