const express = require("express");
const cors = require("cors");
const images_router = require("./src/images-router.js");
const products_router = require("./src/products-router.js");
const user_router = require("./src/user-router.js");

const app = express();

app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});


app.use(express.json());
app.use("/image", images_router);
app.use("/products", products_router);
app.use("/user", user_router);

app.listen((3005), ()=>{
  console.log("Server is Running...")
})