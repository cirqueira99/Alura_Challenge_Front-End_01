import { Product } from "../../entity/Product.js";

const productClass = new Product();
const response = productClass.getProducts();

export const renderGallery = async() => {
    
  const gallerys_classes = ['games', 'peripherals', 'various'];
  let categories = [[], [], []];

  const product = new Product();
  const list_products = await product.getProducts();

  list_products.forEach( (product) => {
    if(product.category == 'Games'){
      categories[0].push(product);
    }else
    if(product.category == 'Periféricos'){
      categories[1].push(product);
      }else
    if(product.category == 'Diversos'){
      categories[2].push(product);
    }  
  })

  gallerys_classes.forEach( (category, index) => {
    createDivGallery(category, categories[index]);
  })
}

const createDivGallery = (category, products) => {
  const gallery_container = document.getElementById('container_' + category)
  const gallery_category = document.getElementById('gallery_' + category);
  let elements_gallery = ``;

  products.forEach((product) => {
    const money = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const card = 
    `
    <div id="${product.id}" class="galley_card">
      <div class="image">
        <img src="./imgs/star-wars.png" width="176px" height="174px" alt="" srcset="">
      </div>
      <div class="gallery_description">
        <p class="description_product">${product.name}</p>
        <p class="description_price"><strong>${money}</strong></p>
        <p class="description_link"> <a href="../../../pages/product.html?id=${product.id}">Ver Produto</a></p>
      </div>        
    </div>
    `;

    elements_gallery += card; 
  
  });
  
  gallery_category.innerHTML = elements_gallery;

  gallery_container.appendChild(gallery_category);
  // console.log(gallery_category)
}
