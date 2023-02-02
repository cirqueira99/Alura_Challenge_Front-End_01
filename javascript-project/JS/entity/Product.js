
export class Product {


  constructor(productName='', productType='', productCategory='', productPrice=0, productDescription='', productFileName=''){
    this.name = productName;
    this.typeProduct = productType;
    this.category = productCategory;
    this.description = productDescription;
    this.price = productPrice;
    this.imageName = productFileName;
  }

  setNameImageProduct(newName){
    this.imageName = newName;
  };

  getProduct = (id) => {
    return fetch(`http://localhost:3005/products/id/${id}`, {
      method: 'GET'
    })
    .then(response => {
        if(response.ok){
          return response.json()
        }
        throw new Error('Não foi possível encontrar o produto!');
    })
  }  

  getProducts = () => {
    return fetch(`http://localhost:3005/products/all`)
    .then(response => {
        if(response.ok){
          return response.json()
        }
        throw new Error('Não foi possível encontrar os produtos!');
    })
  }  

  postProduct(){
    return fetch(`http://localhost:3000/products`, {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        typeProduct: this.typeProduct,
        category: this.category,
        description: this.description,
        price: this.price,
        imageName : this.imageName
      })
    })
    .then( response => {
        if(response.ok){
          return response.json()
        }
        throw new Error('Não foi possível cadastrar o produto!');
    })
  }

  updateProduct(idProduct) {
    return fetch(`http://localhost:3005/products/update/${idProduct}`, {
        method: 'PUT',
        headers: { 
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          typeProduct: this.typeProduct,
          category: this.category,
          description: this.description,
          price: this.price,
          imageName : this.imageName
        })
    })
    .then( response => {
        if(response.ok) return response.json()
       
        throw new Error('Não foi possível atualizar o produto!');
    })
  };

  deleteProduct(id){   
    return fetch(`http://localhost:3005/products/id/${id}`, {
        method: 'DELETE'
    })
    .then( response => { 
        if(!response.ok){
        throw new Error('Não foi possível deletar o produto');
        }
    })
  }  
  
}
