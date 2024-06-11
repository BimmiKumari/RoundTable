 import React from 'react';
 import logo from '../assets/images/logo.png';
 import { Link } from 'react-router-dom'
 import '../assets/css/Navbar.css';
<<<<<<< HEAD
 import { FaCartFlatbed } from "react-icons/fa6";
=======

 import { IoPricetagsOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";

>>>>>>> c0133479a5414d4ef6fc3938767d32d92a8ccc96
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
<<<<<<< HEAD
       <Link to="/Workshop" style={{color:'white',marginTop:'10px',marginLeft:'40px',textDecoration:'None'}}><div className='tab'><FaSearch  />Workshops</div></Link>
       <Link to="/Ourinstructor" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><GiTeacher />Instructor</div></Link>
       <Link to="/Resource" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><FaDatabase />Resources</div></Link>
=======

       <Link to="/Workshop" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaSearch  />Workshops</Link>
       <Link to="/Ourinstructor" style={{color:'white',margin:'10px',textDecoration:'None'}}><GiTeacher />Instructor</Link>

       <Link to="/Resource" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaDatabase />Resources</Link>
>>>>>>> c0133479a5414d4ef6fc3938767d32d92a8ccc96
       
       <div className="rightsection" >
           <Link to="/MyBooking" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><FaCartFlatbed />MyBooking</div></Link>
           
          <Link to="/Login" ><button className="loginbtn">Log-in<FiLogIn /></button></Link>
           <Link to="/Signup" ><button className="loginbtn"> Sign-up<FiLogOut /></button></Link>
       </div>
     </div>
     
   
    </div>
   )
 }
 export default Navbar;