import { Product } from "../../entity/Product.js";


const up = (event) => {
  const id = event.target.id.slice(1);
  console.log(id)
}

export const UpdateProduct = {
  up
}
