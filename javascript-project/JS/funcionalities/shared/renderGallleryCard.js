
const create = (product) => {
  const money = product.price?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  return (
    `
    <div id="${product.id}" class="gallery_card">
      <div class="image">
        <div class="icons-product">
          <i id="d${product.id}" class="icon-delete fa fa-trash" aria-hidden="true" ></i>
          <i id="e${product.id}" class="icon-edit fa fa-pencil" aria-hidden="true"></i>
        </div>
        <img src="http://localhost:3005/image/file/${product.imageName}" width="176px" height="174px" alt="" srcset="">
      </div>
      <div class="gallery_description">
        <p class="description_product">${product.name}</p>
        <p class="description_price"><strong>${money}</strong></p>
        <p class="description_id"> <a href="../../../pages/product.html?id=${product.id}"># ${product.id}</a></p>
      </div>        
    </div>
    `
  )
}

export const CreateDivGalleryCard = {
  create
}