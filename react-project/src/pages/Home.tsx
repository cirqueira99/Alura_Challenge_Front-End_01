
import GalleryContainer from "components/GalleryContainer/GalleryContainer";
import Header from "components/header/Header";
import styles from 'styles/Home.module.css'
import ProductIterface from "interfaces/Product";


const Home = () => {
  const products: ProductIterface[] =  [
    {
      "name": "PS4 Slim",
      "typeProduct": "Console",
      "category": "Games",
      "description": "TESTE",
      "price": 233,
      "imageName": "1675016952171_teste.png",
      "id": 2
    },
    {
      "name": "Head Set",
      "typeProduct": "Eletrónico",
      "category": "Periféricos",
      "description": "testeeeeeeeeeeeeeeeeeeeeee",
      "price": 45,
      "imageName": "1673374004766_3.png",
      "id": 3
    },
    {
      "name": "Head Set",
      "typeProduct": "Eletrónico",
      "category": "Periféricos",
      "description": "testeeeeeeeeeeeeeeeeeeeeee",
      "price": 45,
      "imageName": "1673374004766_3.png",
      "id": 4
    },
    {
      "name": "Head Set",
      "typeProduct": "Eletrónico",
      "category": "Periféricos",
      "description": "testeeeeeeeeeeeeeeeeeeeeee",
      "price": 45,
      "imageName": "1673374004766_3.png",
      "id": 5
    }
  ]
  
  // const categories: Array<string> = ['Games', 'Eletrónicos'];

  return(
    <>
    <Header/>

    <section className={styles.content}>
      <div className={styles.gallery}>
        <GalleryContainer title="Star Wars" products={products} iconsView={false} ></GalleryContainer>
      </div>
    </section>

    </>
  )
}

export default Home;