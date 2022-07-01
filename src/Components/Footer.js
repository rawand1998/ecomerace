import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-description">
        <p className="footer-title">Bensike</p>
        <p className="description-location">Lorem Ipsum is simply dummy text of the printing<br/>
Lorem Ipsum has been the industry's standard</p>
        <div className="footer-icon">
          <FaFacebookSquare  className="icon"/>
          <FaLinkedin className="icon"/>
          <FaTwitter className="icon"/>
        </div>
      </div>
      <div className="footer-list">
        <span>Products</span>
        <p>New</p>
        <p>Upcoming</p>
        <p>Man collection</p>
        <p>On sale</p>
        <p>Live Demo</p>
      </div>
      <div className="footer-list">
        <span>Resources</span>
        <p>Instagram post</p>
        <p>Blog</p>

        <p>Live Demo</p>
      </div>
      <div className="footer-list">
        <span> Contact Us</span>
        <p>Live chat</p>
        <p>Mail us</p>
      </div>
    </div>
  );
}

export default Footer;
