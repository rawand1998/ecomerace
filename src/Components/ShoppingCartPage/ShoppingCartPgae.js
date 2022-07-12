import React, { useState, useEffect } from "react";

import firebase from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
import { FaTrashAlt } from 'react-icons/fa';
import './Style.css';
function ShoppingCartPgae() {
  const [productInCart, setProductInCart] = useState([]);
 

  const db = firebase.firestore();
  const cartRef = collection(db, "cart");
  useEffect(() => {
    const getProductsInCart = async () => {
      const data = await getDocs(cartRef);
      setProductInCart(
        data.docs.map((item) => ({ ...item.data(), id: item.id }))
      );
      
    };
  
    getProductsInCart();
  }, []);
 

  
  return (
    <div>
      <div>
        <NavBar />
        {/* <SubNavBar /> */}
      </div>
      <div className="shop-conatiner">
        <h1 className="shop-title">Shopping Cart</h1>
        <div className="shop-label">
          <p>product Name</p>
          <p>price</p>
          <p>Amount</p>
        </div>
        {productInCart.map((product) => {
          return (
            <div className="shop-item" key={product.id}>
              <p className="shop-item-name">{product.productName}</p>
              <p className="shop-item-price">{product.price}$</p>
              <p>{product.amount} </p>
          
            
            </div>
                  
          );

        })}
   
      </div>
    </div>
  );
}

export default ShoppingCartPgae;
