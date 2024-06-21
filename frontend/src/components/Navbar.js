 import { useEffect, useState } from 'react';
 import { Link, matchPath, useLocation } from "react-router-dom"
 import logo from '../assets/images/logo.png';
 import { useSelector } from "react-redux"
 import '../assets/css/Navbar.css';
 import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
 import { GiTeacher } from "react-icons/gi";
 import { FaSearch } from "react-icons/fa";
 import { FaPodcast } from "react-icons/fa6";
 import { MdWork } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { apiConnector } from "../Services/apiconnector"
import { ACCOUNT_TYPE } from "../utils/constants"
import ProfileDropdown from "../components/profile/ProfileDropDown"
  const Navbar = () => {
   const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const location = useLocation()
    const matchRoute = (route) => {
      return matchPath({ path: route },location.pathname)
    }
   return (
     <div>
        {/*Navbar */}
     
     <div className="Navbar">
       <Link to="/" style={{color:'white',marginTop:'0px',textDecoration:'None'}}><img src={logo} alt="not loaded" style={{marginTop:0,width:250, height:65}}/> </Link>  
       <Link to="/Workshops" style={{color:'white',marginTop:'10px',marginLeft:'20px',textDecoration:'None'}}><div className='tab'><FaSearch className='mt-1' />Workshops</div></Link>
       <Link to="/OurVirtualtour" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><GiTeacher className='mt-1' />Virtual Tour</div></Link>
       <Link to="/" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><FaPodcast className='mt-1' />Podcasts</div></Link>
       <Link to="/" style={{color:'white',marginTop:'10px',textDecoration:'None'}}><div className='tab'><MdWork className='mt-1' />Opportunities</div></Link>
       <Link to="/Resource" style={{color:'white',marginTop:'10px',marginLeft:'20px',textDecoration:'None'}}><div className='tab'><FaDatabase className='mt-1' />Resources</div></Link>
       
       
       <div className="rightsection" >
          
         <div className="hidden  items-center gap-x-4 md:flex  ">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative px-10 flex">
              <AiOutlineShoppingCart className="text-2xl text-white mr-1" />
              MyBooking
            </Link>
          )}
          {token === null && (
            <Link to="/login">
             <button className="loginbtn">Log-in<FiLogIn /></button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
             <button className="loginbtn"> Sign-up<FiLogOut /></button>
            </Link>
          )}
          {token !== null && <ProfileDropdown  />}
        </div>
       </div>
     </div>
     
   
    </div>
   )
 }
 export default Navbar;