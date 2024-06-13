 import React from 'react';
 import logo from '../assets/images/logo.png';
 import { Link } from 'react-router-dom'
 import '../assets/css/Navbar.css';
 import { FaCartFlatbed } from "react-icons/fa6";
 import { GiTeacher } from "react-icons/gi";
 import { FaSearch } from "react-icons/fa";
 import { FaPodcast } from "react-icons/fa6";
 import { MdWork } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
  const Navbar = () => {
   return (
     <div>
        {/*Navbar */}
     
     <div className="Navbar">
       <Link to="/" style={{color:'white',marginTop:'0px',textDecoration:'None'}}><img src={logo} style={{marginTop:0,width:250, height:65}}/> </Link>  
       <Link to="/Workshop" style={{color:'white',marginTop:'10px',marginLeft:'20px',textDecoration:'None'}}><div className='tab'><FaSearch  />Workshops</div></Link>
       <Link to="/OurVirtualtour" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><GiTeacher />Virtual Tour</div></Link>
       <Link to="/" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><FaPodcast />Podcasts</div></Link>
       <Link to="/" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><MdWork />Opportunities</div></Link>
       <Link to="/Resource" style={{color:'white',marginTop:'10px',marginLeft:'20px',textDecoration:'None'}}><div className='tab'><FaDatabase />Resources</div></Link>
       
       
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