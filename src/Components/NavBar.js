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
            <Link to="/products">PRODUCTS</Link>
            <a>ABOUT</a>
            <a>Support</a>
        </div>
        <div className="navBar-icon">
        <FaSearch className="search-icon"/>
        <FaShoppingCart className="cart"/>
       
        </div>
    </div>
  )
}

export default NavBar