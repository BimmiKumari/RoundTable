import React, { useState } from 'react';
import Searchbar from '../components/Search';
import { Link } from 'react-router-dom'
import '../assets/css/Home.css';
import { IoPricetagsOutline } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import logo from '../assets/images/logo.png'
import { GrTechnology } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
const Layout = () => {
  const items = [
    'Artificial Intelligence',
    'Data Science',
    'Web application',
    'Devops',
    'Finance'
  ];
  const [filteredItems, setFilteredItems] = useState(items);
  const handleSearch = (query) => {
    if (query) {
      const results = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems(items);
    }
  };
  return (
    
   <div className='Home'>
      {/*Navbar */}
    <nav>
      <div className="Navbar">
        <Link to="/Home" style={{color:'white',marginTop:'0px',textDecoration:'None'}}><img src={logo} style={{marginTop:0,width:250, height:65}}/> </Link>  
        <Link to="/Resource" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaDatabase />Resources</Link>
        <Link to="/Pricing" style={{color:'white',margin:'10px',textDecoration:'None'}}><IoPricetagsOutline />Pricing</Link>
        <Link to="/Customer" style={{color:'white',margin:'10px',textDecoration:'None'}}><FaPeopleArrows />Customers</Link>
        <div >
            <button class="logout">Log-out</button>
        </div>
      </div>
      
    </nav>
    {/*Main Page */}
    <div className='Outerdiv'>
      <div className='Container'>
        <div className='sub1'>
          <b><h1>Beyond The Classroom:Your Path in Excellence</h1></b>
        </div>
        <div classsName='sub2'>
          <Searchbar onSearch={handleSearch} />
        </div>
        <div className='sub3'>
         <ul>
            <li style={{backgroundColor: "rgb(10, 61, 58) " ,margin:12, borderRadius:8, fontSize:13.5,padding:6 }}>Full Stack Development</li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ",margin:12,borderRadius:8, fontSize:13.5,padding:6}}>Artificial Intelligence</li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ", margin:12,borderRadius:8, fontSize:13.5,padding:6}}>Machine Learning</li>
         </ul>
        </div>

      </div>
      {/*Cards*/}
      <div className="cardcollection">
             <div className="Card"> 
                <div className="cardhead1">
                    <div className="heading">Hands-on Workshop </div>
                    <GrWorkshop style={{width:"70",height:"90",color:"white",marginTop:"30"}}/>
                </div>
                <div className="cardbody">
                 <iframe src="https://giphy.com/embed/piZ2mYa0R9zzBpT9yb" width="99%" height="170" ></iframe>
                 <div className="desc">
                        <p style={{textAlign:'justify'}}>
                        Unlock your potential and join a vibrant community of learners. Convenient booking, secure transactions, and personalized experiences await.
                        <br/>Book your session now
                        </p>
                        <button>Book Now</button>
                 </div>
                </div>
             </div>
             <div className="Card"> 
                <div className="cardhead2">
                    <div className="heading">Career Counselling</div>
                    <FaChalkboardTeacher style={{width:"80",height:"90",color:"white",marginTop:"30"}} />
                </div>
                <div className="cardbody">
                   <iframe src="https://giphy.com/embed/S4ASJyURwnvoTPlbms" width="100%" height="170"  ></iframe>
                   <div className="desc">
                        <p style={{textAlign:'justify'}}>
                        Unlock your future potential with expert career counseling! Discover your true calling, set achievable goals, and embark on a path to success. <br/>Join us now 
                        </p>
                        <button>Book Now</button>
                   </div>
                </div>
             </div>
             <div className="Card"> 
                <div className="cardhead3">
                   <div className="heading">Emerging Tech Lecture</div>
                   <GrTechnology style={{width:"80",height:"80",color:"white",marginTop:"30"}}/>
                </div>
                <div className="cardbody">
                    <iframe src="https://giphy.com/embed/KX5nwoDX97AtPvKBF6" width="100%" height="170"  ></iframe>
                    <div className="desc">
                        <p style={{textAlign:'justify'}}>
                         Stay ahead of the curve with our Emerging Technology Sessions! Dive into the latest innovations, from AI to blockchain, and gain cutting-edge knowledge and skills. Join us now 
                        </p>
                        <button>Book Now</button>
                    </div>
                </div>
             </div>
     </div>
    </div>
        

  </div>
  )
}
export default Layout;