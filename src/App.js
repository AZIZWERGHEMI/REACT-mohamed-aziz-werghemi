import './App.css';
import ListArt from './components/clientsside/ListArticles';
import AjoutArt from './components/clientsside/AjoutArticle';
import EditArticle from './components/clientsside/EditArticle';
import Menu from './Menu';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ListCards from './components/clientsside/ListCards';
import Cart from "./components/clientsside/Cart"
import { CartProvider } from "use-shopping-cart";
import PDFCart from "./components/clientsside/PDFCart";
import Loginclient from './components/authentificationClient/loginClient.js';
import Signup from './components/authentificationClient/singup';









function App() {
  // const imprimer = () => {
  //       navigate('/pdfcart');
  //      };
    
    
    return(
        
       
    <CartProvider> 

            <Router>
              <Menu />
              <searchBar/>
          <Routes>
            <Route path='/' element={<ListCards/>}/>
            <Route path='/editArticle/:id' element={<EditArticle/>}/>
           
            <Route path='/addArticle' element={<AjoutArt/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/pdfcart' element={<PDFCart/>}/>

            

                    <Route path='/articles' element={<ListArt/>}/>
            <Route path="/loginclient" exact element={<Loginclient/>}/>
            <Route path="/Signup" exact element={<Signup/>}/>


          </Routes>
          
          </Router>

    
       
    </CartProvider> 

      );
    
    
    }
    
 
export default App;
