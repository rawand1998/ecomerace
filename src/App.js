
import './App.css';

import ProductsPage from './Components/productPage/ProductsPage';
import Home from './Components/Home/Home';
import ProductPageDetails from './Components/ProductPageDetails/ProductPageDetails';
import ShoppingCartPgae from './Components/ShoppingCartPage/ShoppingCartPgae';
import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'

import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login';
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
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
   </Router>
   </div>
 
   
  );
}

export default App;
