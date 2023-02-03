import { Product } from "../entity/Product.js";
import { Image } from "../entity/Image.js";
import { ModalMessage } from "../funcionalities/shared/modal-message.js";
import { atribuiteForm } from "../funcionalities/pageProductAdd/atribuiteValuesForm.js";
import { CreateHtmlModals } from "../funcionalities/shared/createTagHtmlModal.js";


CreateHtmlModals.create();

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
    const imageClass = new Image();
    
    try {
      let productStorage = JSON.parse(sessionStorage.getItem('product')); 
      const formData = new FormData();
      formData.append('file', productImage);
  
      if(productStorage){
     
        if( sessionStorage.getItem('lastTimeImg') != productImage.lastModified ){
          const responseDelImage = await imageClass.deleleImage(productStorage.imageName);
          const responsePostImage = await imageClass.uploadProductImg(formData);
          
          productFileName = responsePostImage.filename;
          
          const productImagePreview = document.getElementById('imagePreviewProduct');
          productImagePreview.setAttribute('src', `http://localhost:3005/image/file/${productFileName}`);
        
        }else {
          productFileName = productStorage.imageName;
        } 
        
        product.setNameImageProduct(productFileName);
        const responsePutProduct = await product.updateProduct(productStorage.id);     
        
        message = 'Produto atualizado com sucesso!'         
        
        productStorage = {      
          "id":  product.id,
          "name": product.name,
          "typeProduct": product.typeProduct,
          "category": product.category,
          "description": product.description,
          "price": product.price,
          "imageName": product.imageName
        }
        sessionStorage.removeItem('product');
        sessionStorage.removeItem('lastTimeImg');
        sessionStorage.setItem("product", JSON.stringify(productStorage));

      }else{
        const responseImage = await imageClass.uploadProductImg(formData);       
        product.setNameImageProduct(responseImage.filename);      
        
        const responsePostProduct = await product.postProduct(); 
        message = 'Produto cadastrado com sucesso!'; 
      }     
      
      ModalMessage.renderModalMessage(
        'modal-success', 
        'modal-message-success',
        message,
        'reload'
      );

    } catch (error) {
      //console.log(error);
      ModalMessage.renderModalMessage(
        'modal-error', 
        'modal-message-error',
        error
      );
    }

  }
};

const forms = document.getElementsByClassName('form-productAdd')[0];
forms.addEventListener('submit', register);

atribuiteForm();