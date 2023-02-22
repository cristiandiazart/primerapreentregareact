








import styles from "./navbar.module.css";
import { BsCart4 } from 'react-icons/bs';
import CartWidget from "../CartWidget/CartWidget";


const Navbar = () => {
return <nav className={styles.container}>
    <ul className={styles.list} >
        <li><a href="">Inicio</a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Productos</a></li>
    </ul>
        <CartWidget/>
    </nav>

}

export default Navbar