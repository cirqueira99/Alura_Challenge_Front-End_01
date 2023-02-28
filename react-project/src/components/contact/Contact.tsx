import React from "react";
import styles from "./Contact.module.css";
import { Form } from "react-bootstrap";

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

      <div className={styles.forms}>
        <Form action="#">
          <div><p>Fale conosco</p></div>

          <div>
            <input type="text" id="email" placeholder="Enter email" name="email" required></input>
            <label htmlFor="email">Email</label>
          </div>

          <div>
            <textarea id="comment" name="text" placeholder="Escreva uma mensagem" required></textarea>
            <label htmlFor="comment">Escreva uma mensagem</label>
          </div>

          <div className={styles.forms_button}>
            <button type="submit">Enviar Mensagem</button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Contact;