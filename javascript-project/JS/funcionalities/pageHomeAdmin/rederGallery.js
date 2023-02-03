import { CreateDivGalleryCard } from "../shared/renderGallleryCard.js";


const renderGallery = async(products) => {
  const gallery_category = document.getElementById('gallery_allProducts');
  let elements_gallery = ``;

  products.forEach((product) => {
    const card = CreateDivGalleryCard.create(product, true);   

    elements_gallery += card;   
  });
  
  gallery_category.innerHTML = elements_gallery; 
}

export const RenderGalleryHomeAdmin = {
  renderGallery
}