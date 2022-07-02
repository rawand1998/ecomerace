
import './App.css';

import ProductsPage from './Components/ProductsPage';
import Home from './Components/Home';
import ProductPageDetails from './Components/ProductPageDetails';
import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<ProductsPage />}/>
      <Route path="/products/:id" element={<ProductPageDetails />}/>
    </Routes>
   </Router>
    
 
   
  );
}

export default App;
