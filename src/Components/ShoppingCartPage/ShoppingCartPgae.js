import React, { useState, useEffect } from "react";

import firebase from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import NavBar from "../NavBar/NavBar";
// import SubNavBar from "../SubNavbar/SubNavBar";
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
  const increaAmount = async(id,productAmount,price)=>{
    console.log(id,productAmount,price)
   await db.collection("cart")
    .doc('6JV0MkH3tVlMzLO75omc')
 .update({ amount: productAmount +1, price:price * (++productAmount)})
   }
  const deleteproduct = (id) => {
    db.collection("cart").doc(id).delete();
  };
  
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
              <p>{product.amount} 
              
              
              </p>
            
            </div>
                  
          );

        })}
   
      </div>
    </div>
  );
}

export default ShoppingCartPgae;
