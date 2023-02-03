import { Product } from "../entity/Product.js";
import { RenderGalleryHomeAdmin } from "../funcionalities/pageHomeAdmin/rederGallery.js";
import { DeleteProduct } from "../funcionalities/pageHomeAdmin/deleteProduct.js";
import { UpdateProduct } from "../funcionalities/pageHomeAdmin/uptadeProduct.js";
import { CreateHtmlModals } from "../funcionalities/shared/createTagHtmlModal.js";


CreateHtmlModals.create();

const productClass = new Product();

const getProducts = async() => {
  sessionStorage.clear();
  try {
    const products = await productClass.getProducts();
    
    RenderGalleryHomeAdmin.renderGallery(products);
  
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

const btn_add = document.getElementById('btn_add');
btn_add.addEventListener('click', ()=>{
  window.location.href = 'http://127.0.0.1:8080/pages/productAdd.html';
})