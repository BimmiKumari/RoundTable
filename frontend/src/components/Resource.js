import React from 'react'
import '../assets/css/Resource.css'
import { IoArrowBackSharp } from "react-icons/io5";
 const Resource = () => {
  return (
    <div className='Resource' >
      <div className='ResCard '>
        <div className='demo'>
             <h1 >Get Better insights with our Resources</h1>
             <div className='btnalign'>
             <button className="request">Request a Demo</button>
             <button className="request"><IoArrowBackSharp />Back to Home</button>
             </div>
        </div>
        
      </div>
      <div className="Resbody">

        </div>
    </div>
  )
}
export default Resource;
