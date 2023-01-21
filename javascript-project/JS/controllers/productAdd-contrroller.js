import { Product } from "../entity/Product.js";
import renderModal from "../funcionalities/pageProductAdd/render-modal.js";


const register = async (event) => {
  if(event){
    event.preventDefault();

    const productName = document.getElementById('product').value;
    const productType = document.getElementById('type-product').value;
    const productCategory = document.getElementById('category').value;
    const productPrice = parseInt(document.getElementById('price').value);
    const productDescription = document.getElementById('description').value;
    const productImage = document.getElementById("img-product").files[0];
    const productFileName = '';
    
    const product = new Product(productName, productType, productCategory, productPrice, productDescription, productFileName)
    
    const formData = new FormData();
    formData.append('file', productImage);
    
    try {
      const responseImage = await product.uploadProductImg(formData);  
      
      product.setNameImageProduct(responseImage.filename);      
     
      const responseProduct = await product.postProduct();      
      renderModal('modal-success', 'close-success');      
      
    } catch (error) {
      renderModal('modal-error','close-error');
      console.log(error);
    }
  }
};


const forms = document.getElementById('forms-resgisterpProduct');
forms.addEventListener('submit', register);