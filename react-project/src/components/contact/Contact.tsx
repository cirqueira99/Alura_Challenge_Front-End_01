import React from "react";
import styles from "./Contact.module.css";
import { Form, Input, Label } from "reactstrap";
import classNames from "classnames";
import Btn from "components/Buttons/Button";


const Contact = () => {
  return(
    <div className={styles.contact}>
      <div className={styles.contact_logotopics}>
        <div className={styles.contact_logo}>
          <img src="./assets/Logo.png" alt="" ></img>
        </div>
  
        <div className={styles.contact_topics}>
          <ul>
            <li>Quem somos nós</li>
            <li>Política de privacidade</li>
            <li>Programa fidelidade</li>
            <li>Nossas lojas</li>
            <li>Quero ser franqueado</li>
            <li>Anuncie aqui</li>
          </ul>
        </div>
      </div>

      <div className={styles.contact_forms}>
        <Form action="#">
          <div className={styles.form_title}><p>Fale conosco</p></div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input id='email' placeholder="Enter email" name="email" required></Input>
            <Label for='email'>Email</Label>
          </div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="textarea" id="comment" name="text" placeholder="Escreva uma mensagem" required></Input>
            <Label for='comment'>Escreva uma mensagem...</Label>
          </div>

          <div className={styles.forms_button}>
            <Btn text='Enviar Mensagem' styles='dark'></Btn>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Contact;