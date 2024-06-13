import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import '../assets/css/Loginform.css'
const LoginForm = () => {
    const [formData,setFormData]=useState({
        email:"", password:""
    })
    const [showPassword,setShowPassword]= useState(false)
    function changeHandler(event){
        setFormData((prevData)=>(
          {  ...prevData,
            [event.target.name]:event.target.value
          }
        ))
    }
  return (
    <div >
        <form className='LoginForm'>
            <label>
                <p>
                    Email Adress<sup>*</sup>
                </p>
                <input
                   required
                   type='email'
                   value={formData.email}
                   onChange={changeHandler}
                   placeholder='Enter your email id'
                   name="email"
                   />
            </label>
            <label> 
                <p>
                    Password<sup>*</sup>
                </p>
                <input
                   required
                   type={showPassword ? ("text"):("password")}
                   value={formData.password}
                   onChange={changeHandler}
                   placeholder='Enter your password'
                   name='password'
                   />
                   <span on onClick={()=> setShowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
            <Link to="/">
            <p>forget Password</p>
                
            </Link>
        

            </label>
            <button>Sign In</button>


        </form>

    </div>
  )
}

export default LoginForm