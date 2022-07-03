import React, { useState, useEffect } from "react";

import firebase from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import NavBar from "./NavBar";
import SubNavBar from "./SubNavBar";
import { FaTrashAlt } from 'react-icons/fa';
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
      //   setProductInCart(data.docs.map((item)=>console.log(item.data())));
    };
    getProductsInCart();
  }, []);

  const deleteproduct =  (id) => {
   
     db.collection("cart").doc(id).delete()
  };
  return (
    <div>
      <div>
        <NavBar />
        <SubNavBar />
      </div>
      <div></div>
      {productInCart.map((product) => {
        return (
          <div className="shope-container">
          <div key={product.id} className="cart-item">
            <h3>{product.productName}</h3>

            <p className="price">{product.price}</p>
            <br />
            <p className="amount">{product.amount}</p>

            <button onClick={() => deleteproduct(product.id)} className="delete-btn">
              <FaTrashAlt />
            </button>
          </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCartPgae;
