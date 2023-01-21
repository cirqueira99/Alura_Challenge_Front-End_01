const express = require('express')
const server  = express();
const routers = express.Router();
const axios = require('axios');

server.use(express.json({ extended: true }));

routers.get("/all",(req, res)=>{
  try {
    const response = axios.get(`http://localhost:3000/products`)
    .then(response => {
      if(response){
        return res.status(200).json(response.data);     
      }
      throw new Error('Could not find the products!')
    });
    
  } catch (error) {
    return res.status(400).json({
      erro: true,
      mensagem: `Error: ${error}`
    })
  } 
})

routers.get("/id/:id",(req, res) => {

  try {
    const response = axios.get(`http://localhost:3000/products/${req.params.id}`)
    .then(response => {
     
      if(response){
        return res.status(200).json(response.data);
      }
      throw new Error('Could not find the product!')
    });
    
  } catch (error) { 
    console.log("ERROR >>>>>>>>>>>>>>>>>>>>")
    return res.status().json({
      erro: true,
      mensagem: `Error: ${error}`
    })
  }   
})

routers.delete("/id/:id", (req, res) => {
  
  try {      
    const response = axios.delete(`http://localhost:3000/products/${req.params.id}`)
    .then(response => {
      if(response){
        console.log("Product " + response.data.name +" deleted!");
        return res.status(200).json(response.data);
      }
      throw new Error('Could not delete the products!')
    });

  } catch (error) {
    
    return res.status().json({
      erro: true,
      mensagem: `Error: ${error}`
    })
  }
});


module.exports = routers;