import { Product } from "../../entity/Product.js";
import { Image } from "../../entity/Image.js";
import { ModalMessage } from "../shared/modal-mensage.js";


const del = async (event) => {
  event.preventDefault();
  const id = event.target.id.slice(1);
  const productClass = new Product();
  const imageClass = new Image();
  
  
  try {
    const product = await productClass.getProduct(id);
    const delProduct_resopnse = await productClass.deleteProduct(id);
    const delImage_response = await imageClass.deleleImage(product.imageName);
    ModalMessage.modal('modal-success', 'close-success', 'success-message','Produto deletado!');
   

  } catch (error) {    
    console.log(error);
    ModalMessage.modal('modal-error', 'close-error', 'error-message','Não foi possível deletar o produto!');
  }
}

export const DeleteProduct = {
  del
}
