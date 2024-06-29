import React, { useEffect ,useState } from 'react';
import ReviewSlider from "../components/common/ReviewSlider";
import { Link, useLocation, matchPath } from "react-router-dom";
import frame from '../assets/Images/framebg.svg';
import '../assets/css/Home.css';
import SearchWeb from '../components/core/Search/SearchWeb/SearchWeb'
import { GrWorkshop } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";
import { FaChalkboardTeacher } from "react-icons/fa";
import Know_your_progress from "../assets/Images/Know_your_progress.png";
import Compare_with_others from "../assets/Images/Compare_with_others.png";
import Plan_your_lessons from "../assets/Images/Plan_your_lessons.png";
import { apiConnector } from "../services/apiconnector";
import Footer from "../components/common/Footer"
import { ratingsEndpoints } from "../services/apis";
import { useSelector } from "react-redux";
import HighlightText from "../components/core/HomePage/HighlightText"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import { categories } from "../services/apis";
function Home() {
  const [subLinks, setSubLinks] = useState([]);
  const { user } = useSelector((state) => state.profile);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const fetchSubLinks = async () => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        if (res) {
          setSubLinks(res.data.data);
        }
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  };
  const fecthAllReviews = async () => {
    try {
      const response = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );

      if (response) {
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        setReviews(response?.data?.data);
        // console.log("REVIEWS_DETAILS_API RESPONSE.....",response)
      }
    } catch (error) {
      console.log("ERROR IN GETTING ALL REVIEWS....", error);
    }
  };

  useEffect(() => {
    fetchSubLinks();
    fecthAllReviews();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div>
      <div className='Home ml-0'>
     
     {/*Main Page */}
     <div className='Outerdiv ml-0'>
       <div className='Container '>
         <div className='sub1 text-4xl '>
           <HighlightText text={"Beyond The Classroom:Your Path in Excellence"} />
         </div>
         <div className='z-20'>
            <SearchWeb
                  searchOpen={searchOpen}
                  setSearchOpen={setSearchOpen}
                  subLinks={subLinks}
             />
         </div>
         <div className='sub3 z-0'>
          <ul>
             <li style={{backgroundColor: "rgb(10, 61, 58) " ,margin:12, borderRadius:8, fontSize:13.5,padding:6 }}><Link to="/Workshops">Book a workshop</Link></li>
             <li style={{backgroundColor: "rgb(10, 61, 58) ",margin:12,borderRadius:8, fontSize:13.5,padding:6}}><Link to="/OurVirtualtour">Join a tour to your dream Company</Link></li>
             <li style={{backgroundColor: "rgb(10, 61, 58) ", margin:12,borderRadius:8, fontSize:13.5,padding:6}}><Link to="/">Listen Tech podcasts</Link></li>
             <li style={{backgroundColor: "rgb(10, 61, 58) ", margin:12,borderRadius:8, fontSize:13.5,padding:6}}><Link to="/">Explore opportunities</Link></li>
             
          </ul>
         </div>
 
       </div>
       {/*Cards*/}
       <div className="cardcollection z-10 shadow-caribbeangreen-600">
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
   <div className="mx-auto flex w-11/12 max-w-maxContent  flex-col items-center justify-between gap-8 ">
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
           <TimelineSection />

         </div>
         </div>
         <div style={{background: "linear-gradient(360deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)" , width:"100%", height:'800px', display:"flex",flexDirection:'column', justifyContent:'center',alignItems:'center'}}>

             <div className="text-4xl font-semibold text-center text-white my-10" >
           Grab Your swiss knife to 
            <HighlightText text={"Crack Interviews"} />
            <div className="text-center text-white font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
            Because with each  Roundtable session, you will receive a complimentary pro tips and mechanism to learn languages in the most effective manner.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
              <img
                src={Know_your_progress}
                alt=""
                className="object-contain  lg:-mr-32 "
              />
              <img
                src={Compare_with_others}
                alt=""
                className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
              />
              <img
                src={Plan_your_lessons}
                alt=""
                className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
              />
            </div>
            
            <div className='text-xl mt-14 '>
                <button>Book Now</button>
            </div>
          </div>  
         </div>
         <Footer/>

    </div>
  )
}

export default Home