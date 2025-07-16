import mongoose from "mongoose";
import { Schema } from 'mongoose';

const userSchema = new Schema({
 name:{
    type:String,
 },
 email:{
    type:String,
    unique: true,
 },
 phone:{
   type:String,
   unique:true,
 },
 password:{
    type:String,
 },
 address:{
   type:String,
 }
 
});
       

const user = mongoose.model('User', userSchema);
export default user;