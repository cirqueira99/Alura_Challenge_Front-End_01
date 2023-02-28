import React from 'react';
import styles from './Menu.module.css';
import { Button } from 'react-bootstrap';


const Menu = () => {
  return(
    <div className={styles.menu}>
      <nav>
        <div className={styles.menu_logo}>
          <img src="./assets/Logo.png" alt="logoAlura"></img>
        </div>

        <div className={styles.menu_search}>
          <input className="form-control" type="text" name="" id="" placeholder="O que deseja encontrar"></input>
          <i className="fa fa-search ml-2" aria-hidden="true"></i>
        </div>        

        <div className="menu_login">
          <button className="buttons btn-normal btn-light"> <a href="./pages/login.html">Login</a></button>
        </div>

        <div className="menu_icon-search">
          <i className="fa fa-search ml-2" aria-hidden="true"></i>
        </div>
      </nav>
    </div>
  )
}

export default Menu;