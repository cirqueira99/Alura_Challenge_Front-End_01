const express = require('express')
const server  = express();
const routers = express.Router();
const axios = require('axios');
var md5 = require('md5');

server.use(express.json({ extended: true }));

routers.post("/verify",(req, res)=>{
  console.log("REQ>>>>>>: " + JSON.stringify(req.body));

  const req_email = req.body.email;
  const req_pass = req.body.password;

  const pass = md5(req_pass);
  const user = [];
  try {
    const response = axios.get(`http://localhost:3000/user`)
    .then(response => {
      if(response){
        user.push(response.data[0]);     
        console.log("RESPONSE 01 >>> : ")   
        
      if(req_email == user[0].email && pass == user[0].password){
        return res.status(200).json({
          erro: false,
          login: true
        })
      }
      console.log("ERROR PASSWORD >>>>")
      return res.status(200).json({
        erro: false,
        login: false
      })
      }

      console.log("ERROR USER RESPONSE >>>>")
      throw new Error('Could not get user!');
    });

  } catch (error) {
    return res.status().json({
      erro: true,
      mensagem: `Error: ${error}`
    })
  } 
})

const getUser = async ()=> {
  
}


module.exports = routers;