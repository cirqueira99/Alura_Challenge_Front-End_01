const express = require('express')
const server  = express();
const routers = express.Router();

server.use(express.json({ extended: true }));

routers.get("/all",(req, res)=>{
  

  res.send("This is the login request")
})

routers.get("/id/:",(req, res)=>{
  
  
  res.send("This is the login request")
})


module.exports = routers;