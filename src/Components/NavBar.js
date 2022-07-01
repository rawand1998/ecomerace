import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  return (
    <div class="nav-container">
        <div class="logo"><h2>Bensike</h2></div>
        <div class="list">
            <a>HOME</a>
            <a>PRODUCTS</a>
            <a>ABOUT</a>
            <a>ABOUT</a>
        </div>
        <div class="navBar-icon">
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
        </div>
    </div>
  )
}

export default NavBar