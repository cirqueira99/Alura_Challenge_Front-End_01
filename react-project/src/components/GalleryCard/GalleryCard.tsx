import React from "react";
import ProductIterface from "interfaces/Product";
import styles from './GalleryCard.module.css'
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

interface Props {
  product: ProductIterface,
  iconsView: boolean
}

const GalleryCard = ({product, iconsView}: Props) => {

  const renderIcons = (view: boolean) => {
    if(view) {
      return (
        <div className={styles.icons_product}>
          {/* <i id="" className="icon-delete fa fa-trash" aria-hidden="true" ></i>
          <i id="" className="icon-edit fa fa-pencil" aria-hidden="true"></i> */}
          <FaTrash className={styles.icon_delete}/>
          <FaPencilAlt className={styles.icon_edit}/>
        </div>
      )     
    }
  }

  return(
    <div id={String(product.id)} className={styles.gallery_card}>
      <div className={styles.image}>  
        { renderIcons(iconsView) }
        <img src="assets/star-wars.png" width="176px" height="174px" alt=""></img>
      </div>
      <div className={styles.gallery_description}>
        <p className={styles.description_product}>{product.name}</p>
        <p className={styles.description_price}><strong>{product.price}</strong></p>
        <p className={styles.description_id}> Ver Produto</p>
      </div>        
    </div>
  )
}

export default GalleryCard;