const modal = (modalName, spanClose, tagMessage, modalMensage) => {
  renderModal(modalName, spanClose, tagMessage, modalMensage);
}

const renderModal = (modalName, spanClose, tagMessage, modalMensage) => {
  var modal = document.getElementById(modalName);
  var span = document.getElementById(spanClose);
  var mensage = document.getElementById(tagMessage);
  mensage.innerHTML = modalMensage;

  modal.style.display = "block";

  span.onclick = () => {
    modal.style.display = "none";
    location.reload();
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      location.reload();
    }
  }

  setTimeout(function() {
    modal.style.display = "none";
    location.reload();
  }, 4000)

}

export const ModalMessage = {
  modal
}