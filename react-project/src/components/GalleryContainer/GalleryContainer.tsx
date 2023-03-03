import styles from './GalleryContainer.module.css'
import GalleryCard from "components/GalleryCard/GalleryCard";
import { FaArrowRight } from 'react-icons/fa'
import ProductIterface from 'interfaces/Product';
import Btn from 'components/Buttons/Button';
import { useLocation } from 'react-router-dom';

interface Props {
  title: string,
  products: ProductIterface[],
  iconsView: boolean
}

const GalleryContainer = ({title, products, iconsView}: Props) => {
  const location = useLocation().pathname;

  const renderLinkOrBtn = (location: string) => {
    if(location !== '/homeAdmin'){
      return (
        <div className={styles.gallery_link}>
          <p>Ver Tudo</p>
          <FaArrowRight/>
        </div>
      )
    }else {
      return (
        <div className="plus">
          {/* <button id="btn_add" className="buttons btn-normal btn-dark me-2">Adicionar Produto</button> */}
          <Btn text='Adivcionar Produto' styles='dark' size='btn_small' href='./pages/login.html'/>
        </div>
      )
    }
  }
  
  return(
    <div className={styles.gallery_container}>
      <div className={styles.gallery_topo}>
        <p className={styles.gallery_title}>{title}</p>

        {renderLinkOrBtn(String(location))}
      </div>
      <div id="gallery_Games" className={styles.gallery_cards}>
        {
          products.map( product => (
            <GalleryCard key={product.id} product={product} iconsView={iconsView}/>
          ))
        }        
      </div>
    </div>
  )
}

export default GalleryContainer;