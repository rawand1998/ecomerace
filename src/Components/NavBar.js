import React,{useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import {  Link } from "react-router-dom";

import firebase, { db } from "../firebase";
import { getDocs, collection, query, doc,addDoc } from "firebase/firestore";
function NavBar() {
  const [cartNo,setCartNo] = useState(0)
  const db = firebase.firestore();
  useEffect(()=>{
    db.collection('cart').get().then((res)=>{
      setCartNo(res.docs.length)
    })
  })
  return (
    <div className="nav-container">
        <div className="logo"><h2>Bensike</h2></div>
        <div className="list">
        <Link to="/" className="product-navbar">HOME</Link>
            <Link to="/products" className="product-navbar">PRODUCTS</Link>
            <a>ABOUT</a>
            <a>Support</a>
        </div>
        <div className="navBar-icon">
        <FaSearch className="search-icon"/>
        <Link to="/shopping/cart">
          <FaShoppingCart className="cart"/>
          <sub>{cartNo}</sub>
        </Link>
       
        </div>
    </div>
  )
}

export default NavBar