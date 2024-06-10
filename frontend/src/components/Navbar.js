 import React from 'react';
 import '../assets/css/Home.css';
 import logo from '../assets/images/logo.png';
 import { Link } from 'react-router-dom'
 import '../assets/css/Navbar.css';
 import { IoPricetagsOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
  const Navbar = () => {
   return (
     <div>
        {/*Navbar */}
     <nav>
     <div className="Navbar">
       <Link to="/" style={{color:'white',marginTop:'0px',textDecoration:'None'}}><img src={logo} style={{marginTop:0,width:250, height:65}}/> </Link>  
       <Link to="/Resource" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaDatabase />Resources</Link>
       <Link to="/Pricing" style={{color:'white',margin:'10px',textDecoration:'None'}}><IoPricetagsOutline />Pricing</Link>
       <Link to="/Customer" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaPeopleArrows />Customers</Link>
       <div >
           <button class="logout">Log-out</button>
       </div>
     </div>
     
    </nav>
    </div>
   )
 }
 export default Navbar;