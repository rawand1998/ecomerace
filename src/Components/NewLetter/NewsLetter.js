import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import './Style.css'
function NewsLetter() {
  return (
    <div className="newsletter-container">
        <div className="newsletter-description">
            <span>NEWLETTER</span>
            <p>Subscribe our <br/>news letter</p>
            <div className="newsletter-input">
            <input placeholder="Enter Your email" />
            </div>
        </div>
        <div className="newsletter-massage">
            <p className="first-msg">Hey there...</p>
            <p className="second-msg">Hey , thnak you for shopping if you have any questionn ,i`m here to help you.</p>
            <input placeholder="Write a massage"/>
        </div>

    </div>
  )
}

export default NewsLetter