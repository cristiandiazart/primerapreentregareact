import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { FaCartPlus } from 'react-icons/fa';
import ItemListContainer from './components/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/NavBarComponents/Navbarcomponent';


function App() {

  return (
    <div>
    
    <Navbarcomponent />
    <ItemListContainer greeting="Item 1"/>



    </div>


  )
}

export default App
