

const renderModalMessage = (modalName, tagMessage, modalMessage) => {
  var modal = document.getElementById(modalName);
  var message = document.getElementById(tagMessage);
  message.innerHTML = modalMessage;

  $(modal).modal('show');

  window.onclick = (event) => { if (event.target == modal) $(modal).modal('hide'); }

  $(modal).on('hidden.bs.modal', (e) => {
    location.reload();
  })

  // setTimeout(function() {
  //   $(modal).modal('hide');
  //   location.reload();
  // }, 3000)

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