
import styles from './cartWidget.module.css'
import { BsCart4 } from 'react-icons/bs';


function CartWidget() {
  return (
    <div className={styles.container}>
    <BsCart4/>   
    <span className={styles.contador}>1</span>
    </div>
  )
}

export default CartWidget