
export class User {
  
  constructor(username="", password=""){ }

  getUser = () => {
    return fetch(`http://localhost:3000/users`)
    .then(resposta => {
        if(resposta.ok){
          return resposta.json()
        }
        throw new Error('Não foi possível encontrar os produtos!')
    })
  }  

}
