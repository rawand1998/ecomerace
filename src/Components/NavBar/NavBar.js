import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {signOut} from '../../hooks'
import firebase, { db } from "../../firebase";
import { getDocs, collection, query, doc, addDoc } from "firebase/firestore";
import './Style.css'
function NavBar() {
  
  const [cartNo, setCartNo] = useState(0);
  const [userName, setUserName] = useState(false);
  const db = firebase.firestore();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(true);
        db.collection("cart")
          .get()
          .then((res) => {
            setCartNo(res.docs.length);
          });
      } else {
        setUserName(false);
      }
    });
  });
  const signOut = async()=>{
    signOut()
  
  }
  return (
    <div className="nav-container">
        <div className="logo"><h2>Captial Shop</h2></div>
        <div className="list">
        <Link to="/" className="product-navbar">HOME</Link>
            <Link to="/products" className="product-navbar">PRODUCTS</Link>
          
            <a  className="product-navbar"> Support</a>
            <Link to="/login" className="product-navbar">LOGIN</Link>
        </div>
        <div className="navBar-icon">
        <FaSearch className="search-icon"/>
        <Link to="/shopping/cart">
          <FaShoppingCart className="cart" />
          <sup>{cartNo}</sup>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
