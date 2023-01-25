import { Product } from "../../entity/Product.js";
import { Image } from "../../entity/Image.js";
import { ModalMessage } from "../shared/modal-message.js";


const del = async (event) => {
  event.preventDefault();
  const id_product = event.target.id.slice(1);
  const confirm = ModalMessage.renderModalDialogConirm('Você realmente deseja excluir o produto?');

  var btn_confirm = document.getElementsByClassName('btn-confirm')[0];
  btn_confirm.setAttribute('id', `b${id_product}`)
  btn_confirm.addEventListener('click', confirmDeleteProduct);
}

const confirmDeleteProduct = (event) => {
  event.preventDefault();
  $('#modal-confirm').modal('hide');
  
  setTimeout( async() => {
    const id_product = event.target.id.slice(1);   
    const productClass = new Product();
    const imageClass = new Image();       
   
    try {
      const product = await productClass.getProduct(id);
      const delProduct_resopnse = await productClass.deleteProduct(id_product);
      const delImage_response = await imageClass.deleleImage(product.imageName);
      
      ModalMessage.renderModalMessage(
        'modal-success', 
        'modal-message-success',
        'Produto deletado com sucesso!'
      );
  
    } catch (error) {    
      console.log(error);
      ModalMessage.renderModalMessage(
        'modal-error', 
        'modal-message-error',
        'Não foi possível deletar o produto!'
      );
    }    
  }, 800)  
}

export const DeleteProduct = {
  del
}
