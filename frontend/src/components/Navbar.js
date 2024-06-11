 import React from 'react';
 import logo from '../assets/images/logo.png';
 import { Link } from 'react-router-dom'
 import '../assets/css/Navbar.css';

 import { IoPricetagsOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";

 import { GiTeacher } from "react-icons/gi";
 import { FaSearch } from "react-icons/fa";

import { FaDatabase } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
  const Navbar = () => {
   return (
     <div>
        {/*Navbar */}
     
     <div className="Navbar">
       <Link to="/" style={{color:'white',marginTop:'0px',textDecoration:'None'}}><img src={logo} style={{marginTop:0,width:250, height:65}}/> </Link>  

       <Link to="/Workshop" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaSearch  />Workshops</Link>
       <Link to="/Ourinstructor" style={{color:'white',margin:'10px',textDecoration:'None'}}><GiTeacher />Instructor</Link>

       <Link to="/Resource" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaDatabase />Resources</Link>
       
       <div className="rightsection" >
           <Link to="/MyBooking" style={{color:'white',margin:'10px',textDecoration:'None'}}>MyBooking</Link>
           
          <Link to="/Login" ><button className="loginbtn">Log-in<FiLogIn /></button></Link>
           <Link to="/Signup" ><button className="loginbtn"> Sign-up<FiLogOut /></button></Link>
       </div>
     </div>
     
   
    </div>
   )
 }
 export default Navbar;