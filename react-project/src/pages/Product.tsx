import GalleryContainer from 'components/GalleryContainer/GalleryContainer';
import ProductIterface from 'interfaces/Product';
import styles from 'styles/Product.module.css'

const Product = () => {
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
  const product: ProductIterface =
    {
      "name": "PS4 Slim",
      "typeProduct": "Console",
      "category": "Games",
      "description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
      "price": 233,
      "imageName": "1675016952171_teste.png",
      "id": 2
    }
  
  return(
    <section className={styles.content}>
      <div className={styles.content_product}>
       <div className={styles.product}>
          <div className={styles.product_image}>
            <img src="assets/star-wars-BIG.png" alt="product_image" height="400"></img>
          </div>
          <div className={styles.product_info}>
            <p id="product_name" className={styles.product_name}>{product.name}</p>
            <p id="product_price" className={styles.product_price}>{product.price}</p>
            <div id="product_desc" className={styles.product_description}>{product.description}</div>
          </div>
        </div>

        <div className={styles.gallery}>
          <GalleryContainer title="Produtos Similares" products={products} iconsView={false} ></GalleryContainer>
        </div>
      </div>      
    </section>

  )
}

export default Product;