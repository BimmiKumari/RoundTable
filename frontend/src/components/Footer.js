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
                       
                       <a href="https://facebook.com" target="_blank" className='sotab' ><PiMicrosoftTeamsLogoBold />Teams</a>
                       <a href="https://twitter.com" target="_blank" className='sotab'><FiTwitter />Twitter</a>
                       <a href="https://linkedin.com" target="_blank" className='sotab'><FaLinkedin  />LinkedIn</a>
                       <a href="https://instagram.com" target="_blank" className='sotab'><FaInstagram />Instagram</a>
          </div>
          <hr/>
          
          <div className="address">
                    <h2>Contact Us</h2>
                    
                    <div className="col">
                         <p>Kadubesanhalli, Bangalore, karnataka,India</p>
                         <p>Phone: (123) 456-7890</p>
                         <p>Email: support@RoundTablewebsite.com</p>
                    </div>

          </div>
    </div>
  )
}
export default Footer;
