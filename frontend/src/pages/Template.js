import React from 'react'

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
        <div>
        
        
        <div>
            <h1>{title}</h1>

        </div>
        <p>
            
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
          {formtype ==="signup" ?
           {<SignupForm/>}:
           {<LoginForm/>}
          }
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

export default Template