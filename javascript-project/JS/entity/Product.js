
export class Product {
  
  constructor(name="", description="", typeProduct="", category="", price=0){
    
  }

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
