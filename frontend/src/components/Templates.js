import React from 'react'
import SignupForm from '../components/SignupForm' 
import LoginForm from '../components/LoginForm'
import {FcGoogle, fcGoogle} from "react-icons/fc"
const Templates = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
        <div style={{background: "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(55, 94, 99) 50%, rgb(249, 247, 247) 100%)"}} className='h-screen flex '>
        
        
        <div className='flex flex-col absolute bg-black bg-opacity-75  w-4/12 mt-28 mx-[510px] rounded-md'>
            <h1 className='text-white font-bold text-5xl mt-8' >{title}</h1>

       
        <p className='text-white py-4'>
            
            <span className='text-lg font-semibold'>{desc1}</span><br/>
            <span className='py-2 font-medium'>{desc2}</span>
        </p>
          {formtype ==="Signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>): (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
      
            <div className='flex  items-center my-2 gap-x-2 '>
            <div className=' h-[1px] bg-slate-700 w-full '></div>
                  <p  className='text-slate-700 font-medium leading[1.374rem]'>OR</p>
            <div className=' w-full h-[1px] bg-slate-700'></div>
            </div>
            
      
        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-50 border border-slate-900 px-[10px] py-[8px] gap-x-2 mt-4 bg-slate-500'>
            <FcGoogle/>
            <p>Sign in with Google</p>
        </button>
       </div>
       <div className='flex w-screen'>
        <img src={image}
        alt="Front image not found"
        width={1550}

        loading='lazy'/>
       </div>
        
      </div>
  )
}

export default Templates;