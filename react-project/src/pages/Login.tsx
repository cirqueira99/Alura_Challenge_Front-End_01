import React from "react";
import styles from "styles/Login.module.css";
import { Form, Input, Label } from "reactstrap";
import classNames from "classnames";
import Btn from "components/Buttons/Button";

const Login = () => {
  return(
    <section className={styles.content}>
      <div className={styles.content_forms}>
        <Form className={styles.content_login} method="post">
          <div className={styles.form_title}><p>Iniciar Sessão</p></div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="email" id='email' name="email" placeholder="Email" required></Input>
            <Label for='email'>Email</Label>
          </div>

          <div className={classNames(styles.input_container, 'form-floating')}>
            <Input type="password" id='password' name="password" placeholder="Password" required></Input>
            <Label for='password'>Senha</Label>
          </div>

          <div className={styles.form_button_login}>
            <Btn text='Adinionar Produto' styles='dark' size='btn_big' href='./pages/login.html'/>
          </div>
        </Form>
      </div>
    </section>
  )
}

export default Login;