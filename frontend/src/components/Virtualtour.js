import React from 'react'
import image from '../assets/images/back.png'
import image2 from '../assets/images/back2.png'
import Banner from '../assets/banner.mp4'
const Virtualtour = () => {
  return (
    <div className='flex flex-col' >
        <div className='flex flex-row '>
             <img src={image} className='h-96 w-1/2'/>
             <img src={image2} className='h-96 w-1/2'/>
        </div>
        <div className='bg-black w-full absolute bg-opacity-70 mt-0 h-96 '>
           <div className='flex flex-col  mx-auto mt-40 w-8/12 gap-y-8  text-white '>
               <h1 className='text-5xl font-bold animate-colorChange '>
                    Immerse Yourself in a Virtual Tour of your Dream Companies.
               </h1>
               <h5 className='text-richblack-50' >
                    Welcome to  Virtual Industry Visit,where we offer a pre-recorded virtual tour experience of your dream Company or virtual industry visit.Book now and explore our space from the comfort of your home.
               </h5>
           </div>
          
        </div>
        <div className='absolute mt-16 ml-[500px]'>
        <form onSubmit={""}>
        <input
         type="text"
         value={""}
         onChange={""}
         placeholder="Select your dream company..."
        />
      <button type="submit">Search</button>
      </form>
        </div>
        
       <div className='w-full h-[700px] ' style={{background:" linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)"}}>
       <div className=" flex mt-20 ml-96 -z-0 w-fit">
         {/* Video */}
               <div className="mx-3 my-7 shadow-[10px_-5px_52px_-5px] shadow-caribbeangreen-200">
                  <video
                      className="shadow-[20px_20px_rgba(255,255,255)]"
                      muted
                      loop
                      autoPlay
                      width="800px"
                      height="400px"
                   >
                       <source src={Banner} type="video/mp4" />
                  </video>
              </div>
        </div>
        



       </div>
    

    </div>


  )
}

export default Virtualtour