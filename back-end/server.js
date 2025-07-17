import express from 'express';
import connectdb from './config/db.js';
import { Register, Login, getuserdetails } from './controllers/userCpntroller.js';
import cors from 'cors';
import { addItem, getItem } from './controllers/itemController.js';
import { addToCart, getCart } from "./controllers/cartController.js";

const app = express()
const port = 3000;

connectdb();

app.use(express.json());
app.use(cors("*"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', Register)
app.post('/login', Login)
app.get('/userdetails/:id',getuserdetails)
app.post('/addItem',addItem)
app.get('/getproduct/:category',getItem)
app.post("/add-to-cart", addToCart);
app.get("/get-cart/:userId", getCart);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
