import { Product } from "../entity/Product.js"


const getProducts = async() => {
  const productClass = new Product();
  const data = await productClass.getProducts();

  return data;
}

export const ProductController = {
  getProducts
}