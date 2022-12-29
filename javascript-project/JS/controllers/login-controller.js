
import { verifyUser } from "../funcionalities/pageLogin/verifyUser.js";


// const btn_forms = document.querySelector('[data-form-btn]');
// btn_forms.addEventListener('click', getForms)

function getForm() {

  var user = new Object();
  
  user.useremail = document.querySelector('[data-form-useremail]').value;
  user.password = atob(document.querySelector('[data-form-password]').value);
  
  
  if(verifyUser(user)){ 
    return true;
  };

  return false;
}
