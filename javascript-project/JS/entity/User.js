
export class User {
  
  constructor(email="", password=""){
    this.email = email;
    this.password = password;
   }

  getUser(){
    return fetch(`http://localhost:3005/user/verify`, {
      method: 'POST',
       headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
        
      })
    })
    .then(resposta => {
        if(resposta.ok){
          return resposta.json()
        }
        throw new Error('Could not login!')
    })
  }  

}
