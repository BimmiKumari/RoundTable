import React from 'react'
import SignupForm from '../components/SignupForm' 
import LoginForm from '../components/LoginForm'
const Templates = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
        <div style={{background: "linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(55, 94, 99) 50%, rgb(249, 247, 247) 100%)"}} className='h-screen flex mx-auto '>
        
        
        <div className='flex flex-col absolute bg-black bg-opacity-75   '>
            <h1 >{title}</h1>

       
        <p>
            
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
          {formtype ==="Signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>): (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
       
            <div></div>
            <p>OR</p>
            <div></div>
      
        <button>
            <p>Sign in with Google</p>
        </button>
       </div>
       <div className='flex w-screen '>
        <img src={image}
        alt="Front image not found"
        width={1550}

        loading='lazy'/>
       </div>
        
      </div>
  )
}

export default Templates;