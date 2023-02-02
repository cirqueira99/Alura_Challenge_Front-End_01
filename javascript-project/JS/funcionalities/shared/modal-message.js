

const renderModalMessage = (modalName, tagMessage, modalMessage, nextPage='') => {
  var modal = document.getElementById(modalName);
  var message = document.getElementById(tagMessage);
  message.innerHTML = modalMessage;

  $(modal).modal('show');

  window.onclick = (event) => { 
    if (event.target == modal) $(modal).modal('hide'); 
  }

  $(modal).on('hidden.bs.modal', (e) => {
    if(nextPage == 'reload'){
      location.reload();   
    } else
    if(nextPage == 'return') {
      window.history.back();
    }
    
  })

  setTimeout(function() {
    $(modal).modal('hide');    
  }, 4000)

}

const renderModalDialogConirm = (modalMessage) => {
  var message = document.getElementById('modal-message-confirm');
  message.innerHTML = modalMessage;
  
  $('#modal-confirm').modal('show');
}

export const ModalMessage = {
  renderModalMessage,
  renderModalDialogConirm
}