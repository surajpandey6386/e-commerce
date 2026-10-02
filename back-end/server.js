import express from "express";
import 'dotenv/config';
import connectdb from "./config/db.js";
import {
  createOrder,
  verifyPayment,
} from "./controllers/paymentController.js";
import { getOrders } from "./controllers/orderController.js";
import {
  Register,
  Login,
  getuserdetails,
} from "./controllers/userController.js";
import cors from "cors";
import { addItem, getItem } from "./controllers/itemController.js";
// import { addToCart, getCart } from "./controllers/cartController.js";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "./controllers/cartController.js";
import isAdmin from "./middleware/isAdmin.js";

const app = express();


connectdb();

app.use(express.json());
app.use(cors("*"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", Register);
app.post("/login", Login);
app.get("/userdetails/:id", getuserdetails);
app.get("/getproduct", getItem);
app.post("/add-to-cart", addToCart);
app.get("/get-cart/:userId", getCart);
app.delete("/remove-from-cart/:userId/:itemId", removeFromCart);
app.post("/addItem", isAdmin, addItem);
app.post("/payment/create-order", createOrder);
app.post("/payment/verify", verifyPayment);
app.get("/orders/:userId", getOrders);

export default app;
