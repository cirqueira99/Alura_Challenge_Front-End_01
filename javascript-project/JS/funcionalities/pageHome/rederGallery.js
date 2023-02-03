import { CreateDivGalleryCard } from "../shared/renderGallleryCard.js"; 

const galleryGroups = (products) => {

  let gallerys_categories = [];
  let categories = [];

  products.sort((productOne, productTwo)=>{
    if(productOne.category > productTwo.category)  return 1;
    if(productOne.category < productTwo.category)  return -1;

    return 0;
  });
  
  let last_category = products[0].category;
  let group = [];

  products.forEach((product)=>{
    if(!gallerys_categories.includes(product.category)) gallerys_categories.push(product.category);

    if(product.category != last_category){
      last_category = product.category;
      categories.push(group);
      group = [];
    }
    
    group.push(product);
  });

  categories.push(group);

  console.log(gallerys_categories)
  console.log(categories)

  gallerys_categories.forEach( (category, index) => {
    createContainerGallery(category);
    renderGallery(category, categories[index]);
  })
}

const createContainerGallery = (category) => {
  var newForm_category = category.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  const gallery = document.getElementsByClassName('gallery')[0];
  const gallery_container = document.createElement('div');
  gallery_container.setAttribute('id', 'container_' + newForm_category);
  gallery_container.setAttribute('class', 'gallery_container');

  let gallery_container_text = 
    `
    <div class="gallery-topo">
      <p class="gallery-title">${category}</p>
      <p class="gallery-link">Ver Tudo <i class="fa fa-arrow-right" aria-hidden="true"></i></p>
    </div>
    
    <div id="gallery_${newForm_category}" class="gallery_cards"></div>`;

  gallery_container.innerHTML = gallery_container_text;
  gallery.appendChild(gallery_container);
};

const renderGallery = (category, products) => {
  var newForm_category = category.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  const gallery_container = document.getElementById('container_' + newForm_category)
  const gallery_category = document.getElementById('gallery_' + newForm_category);
  let elements_gallery = ``;

  products.forEach((product) => {
    const money = product.price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const card = CreateDivGalleryCard.create(product);

    elements_gallery += card; 
  
  });
  
  gallery_category.innerHTML = elements_gallery;

  gallery_container.appendChild(gallery_category);
  // console.log(gallery_category)
}

export const RenderGalleryHome = {
  galleryGroups
}