import React, { useState } from 'react';
import Searchbar from '../components/Search';
import Footer from '../components/Footer'
import '../assets/css/Home.css';
import { GrWorkshop } from "react-icons/gr";
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
    <div>
   <div className='Home'>
     
    {/*Main Page */}
    <div className='Outerdiv'>
      <div className='Container'>
        <div className='sub1'>
          <b><h1>Beyond The Classroom:Your Path in Excellence</h1></b>
        </div>
        <div className='sub2'>
          <Searchbar onSearch={handleSearch} />
        </div>
        <div className='sub3'>
         <ul>
            <li style={{backgroundColor: "rgb(10, 61, 58) " ,margin:12, borderRadius:8, fontSize:13.5,padding:6 }}>Book a workshop</li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ",margin:12,borderRadius:8, fontSize:13.5,padding:6}}>Join a tour to your dream Company</li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ", margin:12,borderRadius:8, fontSize:13.5,padding:6}}>Listen Tech podcasts</li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ", margin:12,borderRadius:8, fontSize:13.5,padding:6}}>Explore opportunities</li>
            
         </ul>
        </div>

      </div>
      {/*Cards*/}
      <div className="cardcollection">
             <div className="Card"> 
                <div className="cardhead1">
                    <div className="heading">Hands-on Workshop </div>
                    <GrWorkshop style={{width:"170",height:"90",color:"white",marginTop:"30",marginRight:"10"}}/>
                </div>
                <div className="cardbody">
                 <iframe src="https://giphy.com/embed/piZ2mYa0R9zzBpT9yb" width="99%" height="170" ></iframe>
                 <div className="desc">
                        <p style={{textAlign:'justify'}}>
                        Unlock your potential and join a vibrant community of learners. Convenient booking, secure transactions, and personalized experiences await.
                        <br/>Book your session now
                        </p>
                        <button className='bookNow'>Book Now</button>
                 </div>
                </div>
             </div>
             <div className="Card"> 
                <div className="cardhead2">
                    <div className="heading">Career Counselling</div>
                    <FaChalkboardTeacher style={{width:"190",height:"110",color:"white",marginTop:"18",marginRight:"10"}}/>
                </div>
                <div className="cardbody">
                   <iframe src="https://giphy.com/embed/S4ASJyURwnvoTPlbms" width="100%" height="170"  ></iframe>
                   <div className="desc">
                        <p style={{textAlign:'justify'}}>
                        Unlock your future potential with expert career counseling! Discover your true calling, set achievable goals, and embark on a path to success. <br/>Join us now 
                        </p>
                        <button className='bookNow'>Book Now</button>
                   </div>
                </div>
             </div>
             <div className="Card"> 
                <div className="cardhead3">
                   <div className="heading">Emerging Tech Lecture</div>
                   <GrTechnology style={{width:"180",height:"90",color:"white",marginTop:"20",marginRight:"5"}}/>
                </div>
                <div className="cardbody">
                    <iframe src="https://giphy.com/embed/KX5nwoDX97AtPvKBF6" width="100%" height="170"  ></iframe>
                    <div className="desc">
                        <p style={{textAlign:'justify'}}>
                         Stay ahead of the curve with our Emerging Technology Sessions! Dive into the latest innovations, from AI to blockchain, and gain cutting-edge knowledge and skills. Join us now 
                        </p>
                        <button className='bookNow'>Book Now</button>
                    </div>
                </div>
             </div>
     </div>
    </div>
   

  </div>
   <Footer/>
   </div>
  )
}
export default Layout;