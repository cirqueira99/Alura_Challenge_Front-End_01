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
    const poriductImagePreview = document.getElementById('imagePreviewProduct');
  
    productName.setAttribute('value', product.name);
    productType.setAttribute('value', product.typeProduct);
    productCategory.setAttribute('value', product.category);
    productDescription.innerHTML = product.description;
    productPrice.setAttribute('value', product.price);
    poriductImagePreview.setAttribute('src', `http://localhost:3005/image/file/${product.imageName}`);
    
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