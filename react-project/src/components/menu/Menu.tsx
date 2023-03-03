import styles from './Menu.module.css';
import { BiSearch } from 'react-icons/bi'
import Btn from 'components/Buttons/Button';

const Menu = () => {
  return(
    <div className={styles.menu}>
      <nav className={styles.menu_nav}>
        <div className={styles.menu_logo}>
          <img src="./assets/Logo.png" alt="logoAlura"></img>
        </div>

        <div className={styles.menu_search}>
          <input className="form-control" type="text" name="" id="" placeholder="O que deseja encontrar"></input>
          <BiSearch/>
        </div>        

        <Btn text='Login' styles='light' size='btn_big' href='./pages/login.html'/>

        <div className={styles.menu_icon_search}>
          <BiSearch/>
        </div>
      </nav>
    </div>
  )
}

export default Menu;