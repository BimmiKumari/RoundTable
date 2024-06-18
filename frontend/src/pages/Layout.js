import React, { useState } from 'react';
import Searchbar from '../components/Search';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import TourTimeline from '../components/TourTimeline'
import { GrWorkshop } from "react-icons/gr";
import Freetip from "../components/FreeTipadded"
import { GrTechnology } from "react-icons/gr";
import frame from '../assets/images/framebg.svg';
import HighlightText from '../components/HighlightText';
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
   <div className='Home ml-0'>
     
    {/*Main Page */}
    <div className='Outerdiv ml-0'>
      <div className='Container '>
        <div className='sub1'>
          <b><h1>Beyond The Classroom:Your Path in Excellence</h1></b>
        </div>
        <div className='sub2'>
          <Searchbar onSearch={handleSearch} />
        </div>
        <div className='sub3'>
         <ul>
            <li style={{backgroundColor: "rgb(10, 61, 58) " ,margin:12, borderRadius:8, fontSize:13.5,padding:6 }}><Link to="/Workshops">Book a workshop</Link></li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ",margin:12,borderRadius:8, fontSize:13.5,padding:6}}><Link to="/OurVirtualtour">Join a tour to your dream Company</Link></li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ", margin:12,borderRadius:8, fontSize:13.5,padding:6}}><Link to="/">Listen Tech podcasts</Link></li>
            <li style={{backgroundColor: "rgb(10, 61, 58) ", margin:12,borderRadius:8, fontSize:13.5,padding:6}}><Link to="/">Explore opportunities</Link></li>
            
         </ul>
        </div>

      </div>
      {/*Cards*/}
      <div className="cardcollection z-10">
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
    <div className='absolute px-0 ml-[6px] mt-[520px]  flex -z-0 w-fit bg-white' >
      <img src={frame} alt="frame not loaded" />
      <img src={frame} alt="frame not loaded"/>
      <img src={frame} alt="frame not loaded"/>
      
  </div>
  </div>
   <div style={{background: "rgb(55, 94, 99)",color:'white'}}>
  <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col  items-start gap-10 lg:w-[40%]">
              <div className="text-[16px] justify-items-start ">
                Engage in interactive sessions, gain practical skills, and explore technologies.Our expert-led workshops
                and immersive virtual tours offer hands-on experience, real-world applications, and networking opportunities,
                empowering you to stay ahead in today's dynamic world. 
              </div>
              <button active={true} linkto={"/signup"}>
                <div className="">Join us now!</div>
              </button>
            </div>
          </div>

          {/* Timeline Section*/}
          <TourTimeline />
        </div>
        </div> 
        <div style={{background: "rgb(55, 94, 99)" , width:"100%", height:'1000px', display:"flex", justifyContent:'center',alignItems:'center'}}>
               <Freetip/>
        </div>
        
   
   </div>
  )
}
export default Layout;