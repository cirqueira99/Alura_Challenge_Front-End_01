import { Product } from "../../entity/Product.js";
import { CreateDivGalleryCard } from "../shared/renderGallleryCard.js";

const productClass = new Product();
const response = productClass.getProducts();

const renderGallery = async(products) => {
  const gallery_category = document.getElementById('gallery_allProducts');
  let elements_gallery = ``;

  products.forEach((product) => {
    const card = CreateDivGalleryCard.create(product);   

    elements_gallery += card;   
  });
  
  gallery_category.innerHTML = elements_gallery; 
}

export const RenderGallery = {
  renderGallery
}