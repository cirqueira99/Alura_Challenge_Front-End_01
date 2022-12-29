
const express = require('express')
const multer = require('multer')
const multerConfig = require("./src/multerConfig")

const app = express();

app.use("/file", express.static("uploads"))

app.post("/upload", multer(multerConfig).single("file"), (req: any, res: any) => {
  
  if(req.file){
    return res.json(req.file?.filename);
  }

  return res.status(400).json({
    erro: true,
    mensagem: "Erro: Upload não realizado!"
  })
});

app.listen(3005);