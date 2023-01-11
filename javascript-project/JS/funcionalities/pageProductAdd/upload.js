 import { Product } from "../../entity/Product.js";


async function uploadImage(event){
  event.preventDefault();
  const tag_image = document.getElementById("image").files[0]; 
  const product = new Product();

  
  const formData = new FormData();
  formData.append('file', tag_image);
  
  const response = await product.uploadProductImg(formData);  
  console.log('a')
}
 

const myform = document.getElementById('myform');
myform.addEventListener('submit', uploadImage)
