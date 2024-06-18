import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import toast from 'react-hot-toast';

  

const LoginForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate();

    const [formData,setFormData]=useState({
        email:"", password:""
    })
    const [showPassword,setShowPassword]= useState(false);

    function changeHandler(event){
        setFormData((prevData)=>(
          {  ...prevData,
            [event.target.name]:event.target.value
          }
        ))
    }
    function submitHandler(event){
     event.preventDefault();
     setIsLoggedIn(true);
     toast.success("Logged In");
     navigate("/");
    }
  return (
    <div className='bg-black bg-opacity-70'>
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-4 bg-black bg-opacity-70'>
            <label className='w-full'>
                <p className='text-[0.875rem text-slate-50 mb-1 leading-[1.375rem]] mr-28'>
                    Email Adress<sup className='text-red-600'>*</sup>
                </p>
                <input
                   required
                   type='email'
                   value={formData.email}
                   onChange={changeHandler}
                   placeholder='Enter your email id'
                   name="email"
                   className='bg-slate-500 rounded-[0.5rem] text-slate-50 w-[216px] h-[38px] p-[10]'
                   />
            </label>
            <label lassName=' relative ' > 
                <p className='text-[0.875rem text-slate-50 mb-1 leading-[1.375rem]] mr-28'>
                    Password<sup className='text-red-600'>*</sup>
                </p>
                <input
                   required
                   type={showPassword ? ("text"):("password")}
                   value={formData.password}
                   onChange={changeHandler}
                   placeholder='Enter your password'
                   name='password' className='bg-slate-500 rounded-[0.5rem] text-slate-50 w-[216px]  h-[38px] p-[12]'
                   />
                   <span 
                   className='absolute right-[152px] bottom-[188px] cursor-pointer'
                   onClick={()=> setShowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible className='text-white'/>):(<AiOutlineEye/>)}
                   </span>
            <Link to="/">
            <p>Forget Password</p>
                
            </Link>
        

            </label>
            <button className='bg-yellow-400 rounded-[8px] font-medium text-black font-semibold' >Sign In</button>


        </form>

    </div>
  )
}

export default LoginForm