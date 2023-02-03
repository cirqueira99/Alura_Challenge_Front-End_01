const create = () => {
  const span_modals = document.getElementById('modals');
  span_modals.innerHTML =  
    `
    <div id="modal-confirm" class="modal fade"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-exclamation">
                      <h5 class="modal-title ms-3 ">Excluir Produto!</h5>
                    </div>
                    <div class="modal-close">
                      <i class="close-modal fa fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
                    </div>
                </div>
                <div class="modal-body">
                  <p id="modal-message-confirm" class="message"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success btn-confirm">Sim</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Não</button>
                </div>
            </div>
        </div>
      </div>

      <!-- modal success -->
      <div id="modal-success" class="modal fade" id="modal-confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div id="success" class="modal-content ">
            <div class="modal-exclamation">
              <p id="modal-message-success" class="message"></p>
            </div>
            <div class="modal-close">
              <i class="close-modal fa fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>      
                  
          </div>
        </div>
      </div>
      
      <!-- modal error -->
      <div id="modal-error" class="modal fade" id="modal-confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div id="error" class="modal-content ">
            <div class="modal-exclamation">
              <p id="modal-message-error" class="message"></p>
            </div>
            <div class="modal-close">
              <i class="close-modal fa fa-times" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>            
          </div>
        </div>
      </div>`;    
}

export const CreateHtmlModals = {
  create
}