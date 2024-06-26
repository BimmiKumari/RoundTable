import React from 'react'
import "../../assets/css/Footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
 const Footer = () => {
  return (
    <div className="Footer">
        
          <div className="sociallink">
                       
                       <a href="https://facebook.com"  className='sotab' ><PiMicrosoftTeamsLogoBold className='mt-1'/>Teams</a>
                       <a href="https://twitter.com"  className='sotab'><FiTwitter className='mt-1' />Twitter</a>
                       <a href="https://linkedin.com"  className='sotab'><FaLinkedin className='mt-1' />LinkedIn</a>
                       <a href="https://instagram.com"  className='sotab'><FaInstagram className='mt-1'/>Instagram</a>
          </div>
          
          
          <div className="text-white gap-y-6 mt-8 " style={{display:'flex',flexDirection:'column',justifyItems:'center',alignItems:'center'}}>
                    <h2 className="font-bold" >Contact Us</h2>
                    
                    <div className="flex flex-col gap-y-2">
                         <p>Kadubesanhalli, Bangalore, karnataka,India</p>
                         <p>Phone: (123) 456-7890</p>
                         <p>Email: support@RoundTablewebsite.com</p>
                    </div>

          </div>
    </div>
  )
}
export default Footer;
