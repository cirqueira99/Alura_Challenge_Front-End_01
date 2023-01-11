const renderModal = (modalName, spanName) => {
  var modal = document.getElementById(modalName);
  var span = document.getElementById(spanName);

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  setTimeout(function() {
    modal.style.display = "none";
  }, 3000)

}

export default renderModal;

