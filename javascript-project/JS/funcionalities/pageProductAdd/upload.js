 import { Product } from "../../entity/Product.js";
// import api from "./config-api.js";

// const upload = async(image) => {
//  
// }


async function uploadImage(event){
  event.preventDefault();
  const tag_image = document.getElementById("image").files[0]; 
  const product = new Product();
  const formData = new FormData();
  formData.append('file', tag_image);

  const response = await product.uploadProductImg(formData);  
  console.log(response)

  // const headers = {
  //   'headers': {
  //     'Content-Type': 'text/plain'
  //   }
  // }

  // await api.post("image/upload", formData, headers)
  // .then((response) => {
  //   console.log(response);
  // }).catch((err) => {
  //   err.response? console.log(err.response): console.log('Erro: tente mais tarde!');
  // });
}
 

const myform = document.getElementById('myform');
myform.addEventListener('submit', uploadImage)
