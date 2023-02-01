import { Product } from "../entity/Product.js";
import { DeleteProduct } from "../funcionalities/pageHomeAdmin/deleteProduct.js";
import { UpdateProduct } from "../funcionalities/pageHomeAdmin/uptadeProduct.js";
import { RenderGallery } from "../funcionalities/pageHomeAdmin/rederGallery.js";


const productClass = new Product();

const getProducts = async() => {
  sessionStorage.clear();
  try {
    const products = await productClass.getProducts();
    
    RenderGallery.renderGallery(products);
  
    const deleteProduct_icons = document.getElementsByClassName('icon-delete');
    const editProduct_icons = document.getElementsByClassName('icon-edit');

    for (let i = 0; i < deleteProduct_icons.length; i++) {      
      deleteProduct_icons[i].addEventListener('click', DeleteProduct.del);  
      editProduct_icons[i].addEventListener('click', UpdateProduct.up); 
    }
  } catch (error) {    
    console.log(error);
  }
}


getProducts();

