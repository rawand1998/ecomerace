import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import {  Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-container">
        <div className="logo"><h2>Bensike</h2></div>
        <div className="list">
            <a>HOME</a>
            <Link to="/products" className="product-navbar">PRODUCTS</Link>
            <a>ABOUT</a>
            <a>Support</a>
        </div>
        <div className="navBar-icon">
        <FaSearch className="search-icon"/>
        <Link to="/shopping/cart"><FaShoppingCart className="cart"/></Link>
       
        </div>
    </div>
  )
}

export default NavBar