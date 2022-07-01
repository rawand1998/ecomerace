import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
function NewsLetter() {
  return (
    <div className="newsletter-container">
        <div className="newsletter-description">
            <span>NEWLETTER</span>
            <p>Subscribe our <br/>newsletter</p>
            <div className="newsletter-input">
            <input placeholder="Enter Your email"/>
            <FaRegArrowAltCircleRight />
            </div>
        </div>
    </div>
  )
}

export default NewsLetter