import React from 'react'
import image from '../assets/images/back.png'
import Searchbar from '../components/Search'
import image2 from '../assets/images/back2.png'

import corporate from '../assets/images/corporatee.jpg'
const Virtualtour = () => {
  return (
    <div className='flex flex-col' >
        <div className='flex flex-row '>
             <img src={image} className='h-96 w-1/2'/>
             <img src={image2} className='h-96 w-1/2'/>
        </div>
        <div className='bg-black absolute bg-opacity-70 mt-0 h-96 '>
           <div className='flex flex-col font-bold mx-auto mt-40 w-8/12 gap-y-8  text-white '>
               <h1 className='text-5xl animate-colorChange '>
                    Immerse Yourself in a Virtual Tour of your Dream Companies.
               </h1>
               <h5 >
                    Welcome to  Virtual Industry Visit,where we offer a pre-recorded virtual tour experience of your dream Company or virtual industry visit.Book now and explore our space from the comfort of your home.
               </h5>
           </div>
          
        </div>
        <div>
           
        </div>
        


    </div>


  )
}

export default Virtualtour