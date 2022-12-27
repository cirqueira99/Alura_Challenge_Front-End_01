import { Product } from "../entity/Product.js"
import { RenderProduct } from "../funcionalities/pageProduct/rederProduct.js";


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id_product = urlParams.get('id')

const productClass = new Product();

const getProductSimilars = async(type_product) => {
  const products = await productClass.getProducts();
  const products_similars = []
  
  products.forEach(product => {
    if(product.type_product == type_product){
      products_similars.push(product)
    }
  });

  RenderProduct.renderProductsSimilars(products_similars);
}

const getProduct = async() => {
  const product = await productClass.getProduct(id_product);
  
  RenderProduct.renderProduct(product);
  getProductSimilars(product.type_product);
}

getProduct();


