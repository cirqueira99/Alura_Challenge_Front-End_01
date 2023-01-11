
const multer = require('multer');
const multerConfig = require("./multerConfig.js");
const fs = require('fs');

const express = require('express')
const server  = express();
const routers = express.Router();

server.use(express.json({ extended: true }))

routers.use("/file", express.static("uploads"))
// routers.use("/files", express.static("uploads"))

routers.post("/upload", multer(multerConfig).single("file"), (req, res) => {
  // console.log("RESQUISIÇÂO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>: ")
  //console.log(req.body)
  if(req.file){ return res.json(req.file);  }

  return res.status(400).json({
    erro: true,
    mensagem: "Erro: Upload não realizado!"
  })
});

module.exports = routers;