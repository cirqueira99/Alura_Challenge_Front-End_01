import styles from 'styles/HomeAdmin.module.css'
import GalleryContainer from 'components/GalleryContainer/GalleryContainer';
import ProductIterface from 'interfaces/Product';



const HomeAdmin = () => {

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
    },
    {
      "name": "Head Set",
      "typeProduct": "Eletrónico",
      "category": "Periféricos",
      "description": "testeeeeeeeeeeeeeeeeeeeeee",
      "price": 45,
      "imageName": "1673374004766_3.png",
      "id": 6
    },
    {
      "name": "Head Set",
      "typeProduct": "Eletrónico",
      "category": "Periféricos",
      "description": "testeeeeeeeeeeeeeeeeeeeeee",
      "price": 45,
      "imageName": "1673374004766_3.png",
      "id": 7
    }
  ]

  return(
    <section className={styles.content}>
       <div className={styles.gallery}>
        <GalleryContainer products={products} iconsView={true} title="Todos os Produtos"></GalleryContainer>
      </div>
    </section>
  )
}

export default HomeAdmin;