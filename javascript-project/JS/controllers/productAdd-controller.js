import { Product } from "../entity/Product.js";
import { Image } from "../entity/Image.js";
import { ModalMessage } from "../funcionalities/shared/modal-message.js";
import { atribuiteForm } from "../funcionalities/pageProductAdd/atribuiteValuesForm.js";


const register = async (event) => {
  if(event){
    event.preventDefault();

    const productName = document.getElementById('product').value;
    const productType = document.getElementById('typeProduct').value;
    const productCategory = document.getElementById('category').value;
    const productPrice = parseInt(document.getElementById('price').value);
    const productDescription = document.getElementById('description').value;
    const productImage = document.getElementById("inputImgProduct").files[0]; 
    let productFileName = '';
    let message = '';
    
    const product = new Product(productName, productType, productCategory, productPrice, productDescription, productFileName); 
    const imageClass = new Image()
    
    try {
      const productStorage = JSON.parse(sessionStorage.getItem('product')); console.log(productStorage.id)
      const formData = new FormData();
      formData.append('file', productImage);
  
      if(productStorage){
     
        if( sessionStorage.getItem('lastTimeImg') != productImage.lastModified ){
          const responseImage = await imageClass.uptadeProductImg(productImage.name);
          productFileName = responseImage.filename;
        }else {
          productFileName = productImage.name;
        } 
        product.setNameImageProduct(productFileName);
        const responsePutProduct = await product.updateProduct(productStorage.id);     
        message = 'Produto atualizado com sucesso!'
      }else{
        const responseImage = await product.uploadProductImg(formData);        
        product.setNameImageProduct(responseImage.filename);      
        const responsePostProduct = await product.postProduct();   
        message = 'Produto cadastrado com sucesso!'  
      }     
      
      ModalMessage.renderModalMessage(
        'modal-success', 
        'modal-message-success',
        message
      );
      
    } catch (error) {
      console.log(error);
      ModalMessage.renderModalMessage(
        'modal-error', 
        'modal-message-error',
        'Não foi possível atualizar o produto!'
      );
    }

  }
};

const forms = document.getElementsByClassName('form-productAdd')[0];
forms.addEventListener('submit', register);

atribuiteForm();