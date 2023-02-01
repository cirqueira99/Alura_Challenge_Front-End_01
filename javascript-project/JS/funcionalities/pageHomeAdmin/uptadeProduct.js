import { Product } from "../../entity/Product.js";
import { ModalMessage } from "../shared/modal-message.js";

const up = async(event) => {
  const id_product = event.target.id.slice(1);
  const productClass = new Product();

  try {
    const product = await productClass.getProduct(id_product);
    
    const productStorage = {      
      "id":  product.id,
      "name": product.name,
      "typeProduct": product.typeProduct,
      "category": product.category,
      "description": product.description,
      "price": product.price,
      "imageName": product.imageName
    }

    sessionStorage.removeItem('product');
    sessionStorage.setItem("product", JSON.stringify(productStorage));

    window.location.href = "http://127.0.0.1:8080/pages/productAdd.html";

  } catch (error) {
    console.log(error)
    ModalMessage.renderModalMessage(
      'modal-error', 
      'modal-message-error',
      'Não foi possível ir para página de atualizar produto!'
    );
  }
}

export const UpdateProduct = {
  up
}
