
import './App.css';

import ProductsPage from './Components/ProductsPage';
import Home from './Components/Home';
import ProductPageDetails from './Components/ProductPageDetails';
import ShoppingCartPgae from './Components/ShoppingCartPgae';
import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'
import Header from './Components/Header';
function App() {
  return (
    <div>
   <Router>
   {/* <Header /> */}

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<ProductsPage />}/>
      <Route path="/products/:id" element={<ProductPageDetails />}/>
      <Route path="/shopping/cart" element={<ShoppingCartPgae />}/>

    </Routes>
   </Router>
   </div>
 
   
  );
}

export default App;
