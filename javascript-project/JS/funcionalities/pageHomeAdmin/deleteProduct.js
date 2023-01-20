import { Product } from "../../entity/Product.js";
import { Image } from "../../entity/Image.js";


const del = async (event) => {
  const id = event.target.id.slice(1);
  const productClass = new Product();
  const imageClass = new Image();
  
  try {
    const product = await productClass.getProduct(id);
    const delProduct_resopnse = await productClass.deleteProduct(id);
    const delImage_response = await imageClass.deleleImage(product.imageName);
    
    location.reload();

  } catch (error) {    
    console.log(error);
  }
}

export const DeleteProduct = {
  del
}
