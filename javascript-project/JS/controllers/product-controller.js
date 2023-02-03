import { Product } from "../entity/Product.js"
import { RenderGalleryProduct } from "../funcionalities/pageProduct/rederProduct.js";
import { ModalMessage } from "../funcionalities/shared/modal-message.js";
import { CreateHtmlModals } from "../funcionalities/shared/createTagHtmlModal.js";


CreateHtmlModals.create();


const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);
const id_product = urlParams.get('id')

const productClass = new Product();

const getProductSimilars = async(productCentral) => {
  
  try {
    const products = await productClass.getProducts();
    const products_similars = []
    
    products.forEach(product => {
      if(product.typeProduct == productCentral.typeProduct && product.id != productCentral.id){
        products_similars.push(product)
      }
    });
  
    RenderGalleryProduct.renderProductsSimilars(products_similars);
    
  } catch (error) {
    console.log(error);
    ModalMessage.renderModalMessage(
      'modal-error', 
      'modal-message-error',
      error
    );
  }
}

const getProduct = async() => {
  try {
    const product = await productClass.getProduct(id_product);
  
    RenderGalleryProduct.renderProduct(product);
    
    getProductSimilars(product);
    
  } catch (error) {
    console.log(error);
    ModalMessage.renderModalMessage(
      'modal-error', 
      'modal-message-error',
      error,
      'return'
    );
  }
  
}

getProduct();


