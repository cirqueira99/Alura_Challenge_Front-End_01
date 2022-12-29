import { User } from "../../entity/User.js"

export const verifyUser = async(userinfo) => {
  
  const user = new User();
  const response = await user.getUser();
  
  try{
    if(response){

      response.forEach(element => {
        if(userinfo.useremail == element.useremail){
          if (userinfo.password = password_cod){
            return true;
          }else {
            throw('Email ou senha incorretos!')    
          }
        }else {
          throw('Email ou senha incorretos!')
        }
      });     

    }else {
      throw('Email ou senha incorretos!')
    }
  }catch(error){
    console.log('Error: ' + error);
  }


}