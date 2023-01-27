const multer = require('multer')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("uploads"));
    },
    filename: (req, file, cb) => {
      const time = new Date().getTime();
      
      //cb(null, `${file.originalname}`); // generate specific name
      cb(null, `${time}_${file.originalname}`); // generate random name 
      
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    
   const extensionImg = ['image/png', 'image/jpg', 'image/jpeg'];

    if (extensionImg.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  }
}



