import Item from "../models/itemModel.js";

export const addItem = async(req, res) => {
    const {imgLink, description, price, rating, itemname ,select} = req.body;
    if(!price || !itemname){
        return res.status(400).json({message:"Please provide all fields", success: false});
    }
    const item = await Item.create({
        imgLink,
        description,
        price,
        rating,
        itemname,
        select
    })
    return res.status(200).json({message:"Item added", success: true});
}

export const getItem = async(req,res) =>{
    console.log(req.body);
    const {category} = req.body;
    console.log(category);
    console.log(req.body);
    
    const items = await Item.find({select:category});
    return res.status(200).json({message:"All items ", items})
    
}