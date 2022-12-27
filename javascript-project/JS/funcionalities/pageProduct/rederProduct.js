

const renderProduct = (product) => {
  const name_product_tag = document.getElementById('product_name');
  const price_product_tag = document.getElementById('product_price');
  const money = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  const description_product_tag = document.getElementById('product_desc');

  
  name_product_tag.innerHTML = product.name;
  price_product_tag.innerHTML = money;
  description_product_tag.innerHTML = product.description
}

const renderProductsSimilars = (products) => {
  const gallery_category = document.getElementById('gallery_product-similars');
  let elements_gallery = ``;

  products.forEach((product, index) => {
    if(index < 6 ){
      const money = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      const card = 
      `
      <div id="${product.id}" class="galley_card">
        <div class="image">
          <img src="../../../imgs/star-wars.png" width="176px" height="174px" alt="" srcset="">
        </div>
        <div class="gallery_description">
          <p class="description_product">${product.name}</p>
          <p class="description_price"><strong>${money}</strong></p>
          <p class="description_link"> <a href="../../../pages/product.html?id=${product.id}">Ver Produto</a></p>
        </div>        
      </div>
      `;
  
      elements_gallery += card; 

    }else {
      return;
    }
  
  });
  
  gallery_category.innerHTML = elements_gallery;

}

export const RenderProduct = {
  renderProduct,
  renderProductsSimilars
}