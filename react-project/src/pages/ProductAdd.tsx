import React from "react";
import styles from "styles/ProductAdd.module.css"
import { Form, Input, Label } from "reactstrap";
import classNames from "classnames";
import Btn from "components/Buttons/Button";


const ProductAdd = () => {
  return(
    <section className={styles.content}>
      <div className={styles.content_productAdd}>
        <Form className={styles.form_productAdd} method="post">
          <div className={styles.form_title}><p>Adicionar novo produto</p></div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="text" className="form-control" id='produt' name="product" placeholder="Nome do produto" required></Input>
            <Label for='produt'>Email</Label>
          </div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="text" id='typeProduct' name="typeProduct" placeholder="Tipo de Produto" required></Input>
            <Label for='typeProduct'>Tipo de Produto</Label>
          </div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="text" id='category' name="category" placeholder="Categoria" required></Input>
            <Label for='category'>Categoria</Label>
          </div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="text" id="price" name="price" placeholder="Preço do produto: 0,00" required></Input>
            <Label for='price'>Preço do produto</Label>
          </div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="textarea" row="5" id="comment" name="comment" placeholder="Descrição do produto" required></Input>
            <Label for="comment">Descrição do produto</Label>
          </div>

          <div className={classNames(styles.input_container, 'form-floating', 'input_imgBox')}>
            <div className={styles.imagePreview}>
              <img id="imagePreviewProduct" src="assets/upload.jpg" alt="image_product"></img>
            </div>
            <Input type="file" id="inputImgProduct" name="inputImgProduct" accept=".png, .jpg, .jpeg" required></Input>
          </div>

          <div className={styles.form_button_productAdd}>
            <Btn text='Adinionar Produto' styles='dark' size='btn_big' href='./pages/login.html'/>
          </div>
        </Form>
      </div>
  </section>
  )
}

export default ProductAdd;