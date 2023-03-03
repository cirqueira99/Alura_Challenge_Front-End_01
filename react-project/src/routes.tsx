import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AppRouter.module.css'
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import Login from './pages/Login';
import ProductAdd from './pages/ProductAdd';
import Product from './pages/Product';
import Menu from './components/menu/Menu';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const AppRouter = () => {
  return(
    <div className={styles.body}>
      <Router>
        <Menu/>
        <Routes>
          <Route path="home" element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="homeAdmin" element={<HomeAdmin/>}></Route>
          <Route path="productAdd" element={<ProductAdd/>}></Route>
          <Route path="product" element={<Product/>}></Route>
          <Route path="*" element={<Home/>}></Route>
        </Routes>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  )
};

export default AppRouter;