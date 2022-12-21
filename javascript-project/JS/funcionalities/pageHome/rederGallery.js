

export const renderGallery = (new_data, gallery) => {
  const galley_card = document.createElement('div');
  galley_card.setAttribute('class', 'galley_card');

  console.log(new_data)

  // const elements_card = 
  // `
  //   <div class="image"><img src="./imgs/star-wars.png" width="176px" height="174px" alt="" srcset=""></div>
  //   <div class="gallery_description">
  //     <p class="description_product">Produto XYZ</p>
  //     <p class="description_price"><strong>R$ 60,00</strong></p>
  //     <p class="description_link">Ver Produto</p>
  //   </div>        
  // `;

  // galley_card.innerHTML = elements_card;


  return galley_card;
}
