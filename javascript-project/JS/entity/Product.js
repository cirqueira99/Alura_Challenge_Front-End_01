
export class Product {
  
  constructor(name="", description="", typeProduct="", category="", price=0){
    
  }

  getProducts = () => {
    return fetch(`http://localhost:3000/products`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar as contas')
    })
  }  
  
  
}
