import { User } from "../entity/User.js";
import { ModalMessage } from "../funcionalities/shared/modal-message.js";
import { CreateHtmlModals } from "../funcionalities/shared/createTagHtmlModal.js";

const getForm = async (event) => {
  event.preventDefault();
 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  const user = new User(email, password);

  try {
    const user_response = await user.getUser();

    if(user_response.login){
      window.location.href = 'http://127.0.0.1:8080/pages/homeAdmin.html';     
    }else {
      ModalMessage.renderModalMessage(
        'modal-error', 
        'modal-message-error',
        'Email ou senha incorretos!'
      );

      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
    }
    
  } catch (error) {
    console.log(error);
    ModalMessage.renderModalMessage(
      'modal-error', 
      'modal-message-error',
      'Não foi possível realizar o login!'
    );    
  }
  
}

const btn_forms = document.querySelector('[data-form-btn]');
btn_forms.addEventListener('click', getForm);

CreateHtmlModals.create();