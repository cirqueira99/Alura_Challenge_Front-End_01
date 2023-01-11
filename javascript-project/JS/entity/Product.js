
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
    return fetch(`http://localhost:3000N/products/${id}`, {
      method: 'GET'
    })
    .then(resposta => {
        if(resposta.ok){
          return resposta.json()
        }
        throw new Error('Não foi possível encontrar os produtos!')
    })
  }  

  getProducts = () => {
    return fetch(`http://localhost:3000/products`)
    .then(resposta => {
        if(resposta.ok){
          return resposta.json()
        }
        throw new Error('Não foi possível encontrar os produtos!')
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
    .then( resposta => {
        if(resposta.ok){
          return resposta.json()
        }
        throw new Error('Não foi possível criar uma conta')
    })
  }

  // updateAccount(id, date_account, description, type_account, cost, payment) {
  //   return fetch(`http://localhost:3000/contas/${id}`, {
  //       method: 'PUT',
  //       headers: { 
  //           'Content-type' : 'application/json'
  //       },
  //       body: JSON.stringify({
  //         description: description,
  //         type_account: type_account,
  //         cost: cost,
  //         date_account: date_account,
  //         payment: payment
  //       })
  //   })
  //   .then( resposta => {
  //       if(resposta.ok){
  //           return resposta.json()
  //       }
  //       throw new Error('Não foi possível detalhar um cliente')
  //   })
  // }

  // deleteAccount = (id) => { 
    
  //   return fetch(`http://localhost:3000/contas/${id}`, {
  //       method: 'DELETE'
  //   })
  //   .then( resposta => { 
  //       if(!resposta.ok){
  //       throw new Error('Não foi possível deletar a conta')
  //       }
  //   })
  // }

  uploadProductImg = (formData) => {
    return fetch(`http://localhost:3005/image/upload`, {
      method: 'POST',
      body: formData
    })
    .then(resposta => {
        if(resposta.ok){
          return resposta.json()
        }
        throw new Error('Não foi possível salvar a imagem!')
    })
  }   
  
}
