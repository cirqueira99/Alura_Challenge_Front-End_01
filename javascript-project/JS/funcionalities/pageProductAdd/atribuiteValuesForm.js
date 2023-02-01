export const atribuiteForm = () => {
  const productStorage = sessionStorage.getItem('product');
  
  if(productStorage){

    const product = JSON.parse(productStorage);
  
    const productName = document.getElementById('product');
    const productType = document.getElementById('typeProduct');
    const productCategory = document.getElementById('category');
    const productDescription = document.getElementById('description');
    const productPrice = document.getElementById('price');
    const productImage = document.getElementById('inputImgProduct');
    const productImagePreview = document.getElementById('imagePreviewProduct');

    const title_form = document.getElementsByClassName('form_title')[0];
    const btn_register = document.getElementById('registerProduct');
  
    productName.setAttribute('value', product.name);
    productType.setAttribute('value', product.typeProduct);
    productCategory.setAttribute('value', product.category);
    productDescription.innerHTML = product.description;
    productPrice.setAttribute('value', product.price);
    productImagePreview.setAttribute('src', `http://localhost:3005/image/file/${product.imageName}`);
    
    title_form.innerHTML = '<p>Atualizar produto</p>'
    btn_register.innerHTML = "Atualizar Produto";
    
    /* atribuite new file */
    const myFile = new File([`image`], `${product.imageName}`, {
      type: 'text/plain'
    });
    
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(myFile);
    productImage.files = dataTransfer.files;
    
    sessionStorage.removeItem('lastTimeImg');
    const timeImg = myFile.lastModified;
    sessionStorage.setItem('lastTimeImg', timeImg);
    
  }
  
}