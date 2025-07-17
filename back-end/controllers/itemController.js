import Item from "../models/itemModel.js";

// Add Item Controller
export const addItem = async (req, res) => {
  const { imgLink, description, price, rating, itemname, category } = req.body;

  if (!price || !itemname || !category) {
    return res.status(400).json({
      message: "Please provide all required fields",
      success: false,
    });
  }

  try {
    const item = await Item.create({
      imgLink,
      description,
      price,
      rating,
      itemname,
      category
    });

    return res.status(200).json({
      message: "Item added",
      success: true,
      product: item,
    });
  } catch (error) {
    console.error("Error adding item:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// Get Items by Category Controller
export const getItem = async (req, res) => {
  const { category } = req.params;

  try {
    if (!category) {
      return res.status(400).json({
        message: "Category is required",
        success: false,
      });
    }

    const items = await Item.find({ category });

    return res.status(200).json({
      message: "Items fetched successfully",
      success: true,
      products: items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
