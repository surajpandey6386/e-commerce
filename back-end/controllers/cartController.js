import Cart from "../models/cartModel.js";
import Item from "../models/itemModel.js";

// Add item to cart
export const addToCart = async (req, res) => {
    console.log(req.body);
  const { userId, itemId, quantity = 1 } = req.body;
console.log("Hey here!")
  try {
    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{
          itemId,
          name: item.itemname,
          price: item.price,
          image: item.imgLink,
          quantity
        }]
      });
    } else {
      const index = cart.items.findIndex(i => i.itemId.toString() === itemId);
      if (index > -1) {
        cart.items[index].quantity += quantity;
      } else {
        cart.items.push({
          itemId,
          name: item.itemname,
          price: item.price,
          image: item.imgLink,
          quantity
        });
      }
      await cart.save();
    }

    res.status(200).json({ success: true, message: "Item added to cart", cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get cart for user
export const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch cart" });
  }
};
