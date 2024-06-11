import React from 'react'
import SignupForm from '../components/SignupForm' 
import LoginForm from '../components/LoginForm'
const Templates = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
        <div>
        
        
        <div>
            <h1>{title}</h1>

        </div>
        <p>
            
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
          {formtype ==="Signup" ? (<SignupForm/>): (<LoginForm/>)}
        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button>
            <p>Sign in with Google</p>
        </button>


        
        
        
      </div>
  )
}

export default Templates;