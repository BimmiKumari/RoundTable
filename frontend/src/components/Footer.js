import React from 'react'
import "../assets/css/Footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
 const Footer = () => {
  return (
    <div className="Footer">
        
          <div className="sociallink">
                       
                       <a href="https://facebook.com" target="_blank" ><PiMicrosoftTeamsLogoBold />Teams</a>
                       <a href="https://twitter.com" target="_blank"><FiTwitter />Twitter</a>
                       <a href="https://linkedin.com" target="_blank"><FaLinkedin  />LinkedIn</a>
                       <a href="https://instagram.com" target="_blank"><FaInstagram />Instagram</a>
          </div>
        
          
          <div class="col">
                    <h4>Contact Us</h4>
                    <div >
                         <p>Kadubesanhalli, Bangalore, karnataka,India</p>
                         <p>Phone: (123) 456-7890</p>
                         <p>Email: support@RoundTablewebsite.com</p>
                    </div>

          </div>
    </div>
  )
}
export default Footer;
