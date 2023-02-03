import { Product } from "../entity/Product.js";
import { RenderGalleryHome } from "../funcionalities/pageHome/rederGallery.js";
import { ModalMessage } from "../funcionalities/shared/modal-message.js";



const getProducts = async () => {
  try {
    const product = new Product();
    const list_products = await product.getProducts();

    RenderGalleryHome.galleryGroups(list_products);
  
  } catch (error) {
    console.log(error);

    ModalMessage.renderModalMessage(
      'modal-error', 
      'modal-message-error',
      error
    );
  }
}

getProducts();