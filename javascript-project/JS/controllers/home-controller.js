import { ProductController } from "./product-controller.js";
import { renderGallery } from "../funcionalities/pageHome/rederGallery.js";



const response = ProductController.getProducts();
const data = [];

Promise.resolve(response).then((resp)=> {
  resp.forEach( (element) => { data.push(element) } )
});



const galleryGames = document.getElementById('gallery_games');
const galleryPeripherals = document.getElementById('gallery_peripherals');
const galleryVarious = document.getElementById('gallery_various');

const gallerys = [galleryGames, galleryPeripherals, galleryVarious]


// gallerys.forEach( (gallery) => {
//   const new_data = [];

//   if(gallery.id == 'gallery_games'){
//     data.forEach((element) => {
//       element['category'] = 'Games'
//       new_data.push(element);
//     })
//   }else
//   if(gallery.id == 'gallery_peripherals'){
//     data.forEach((element) => {
//       element['category'] = 'Periféricos'
//       new_data.push(element);
//     })
//   }else
//   if(gallery.id == 'gallery_various'){
//     data.forEach((element) => {
//       element['category'] = 'Diversos'
//       new_data.push(element);
//     })
//   }

//   gallery.appendChild( renderGallery(new_data, gallery) );
// } )


