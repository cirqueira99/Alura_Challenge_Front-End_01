import { CreateDivGalleryCard } from "../shared/renderGallleryCard.js";

const renderProduct = (product) => {
  const name_tag = document.getElementById('product_name');
  const price_tag = document.getElementById('product_price');
  const money = product.price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  const description_tag = document.getElementById('product_desc');
  const image_tag = document.getElementById('image');
  
  name_tag.innerHTML = product.name;
  price_tag.innerHTML = money;
  description_tag.innerHTML = product.description
  image_tag.setAttribute('src', `http://localhost:3005/image/file/${product.imageName}`);
}

const renderProductsSimilars = (products) => {
  const gallery_category = document.getElementById('gallery_product-similars');
  let elements_gallery = ``;

  if(products.length < 1){
    elements_gallery = `<p class="notContains">Não há produtos similares...</p>`
  }else {
    products.forEach((product, index) => {
      if(index < 6 ){      
        const card = CreateDivGalleryCard.create(product);    
        elements_gallery += card; 
  
      }else {
        return;
      }
    
    });
  }
  
  gallery_category.innerHTML = elements_gallery;

}

export const RenderGalleryProduct = {
  renderProduct,
  renderProductsSimilars
}