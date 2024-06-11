import React, { useState } from 'react';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import {toast} from 'react-hot-toast'
const SignupForm = () => {

    const[formData,setFormData]=useState(
        {
            firstname:" ",
            lastname:" ",
            email:" ",
            password:" ",
            confirmPassword:" "
        }
    )
    const[showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>(
          {  ...prevData,
            [event.target.name]:event.target.value
          }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        if (formData.password!=formData.confirmPassword){

            toast.error("password didn't match")
        } 
    }
  return (
    <div>


        <div>
            <button>Visitor</button>
            <button>Admin</button>
           
        </div>

        <form onSubmit={submitHandler}>
           <div>
           <label>
                <p>First Name <sup>*</sup></p>
                <input 
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstname}
                />
          
            </label>
            <label>
                <p>Last Name <sup>*</sup></p>
                <input 
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastname}
                />
          
            </label>



           </div>
           <label>
                <p>Email <sup>*</sup></p>
                <input 
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder='Enter Email'
                value={formData.email}
                />
          
           </label>
           <div>
           <label>
                <p>Create Password <sup>*</sup></p>
                <input 
                required
                type={showPassword? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder='Enter password'
                value={formData.password}
                />
                 <span on onClick={()=> setShowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
          
            </label>


            <label>
                <p>Confirm Password <sup>*</sup></p>
                <input 
                required
                type={showPassword? ("text"):("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder='Enter  confirm password'
                value={formData.confirmpassword}
                />
                 <span on onClick={()=> setShowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
          
            </label>


           </div>
           <button>Create Account</button>

             



        </form>
    </div>
  )
}

export default SignupForm