export class Image {

  constructor(imageName=''){ this.nameImage = imageName;  }

  deleleImage(image){
    return fetch(`http://localhost:3005/image/delete/${image}`, {
      method: 'DELETE'

    })
    .then(response => {
      if(response.ok){ return response.json() }
      throw new Error('Could not find the image!')
  });
  }

  // uploadProductImg = (formData) => {
  //   return fetch(`http://localhost:3005/image/upload`, {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(response => {
  //     if(response.ok){
  //       return response.json()
  //     }
  //     throw new Error('Não foi possível salvar a imagem!')
  //   })
  // }   
  
}