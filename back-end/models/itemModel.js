import mongoose from "mongoose";
import { Schema } from 'mongoose';

const itemSchema = new Schema({
 imgLink:{
    type:String,
 },
 description:{
    type:String,
    required: true
 },
 price:{
   type:String,
  
 },
 rating:{
    type:String,
 },
 itemname:{
   type:String,
 },
 select:{
    type:String,
 }
 
});
       

const item = mongoose.model('Item', itemSchema);
export default item;