import React, { useState } from 'react';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import {toast} from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom';
const SignupForm = ({setIsLoggedIn }) => {
    const navigate=useNavigate();

    const[formData,setFormData]=useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    )
    const[showPassword1,setShowPassword1]=useState(false);
    const[showPassword2,setShowPassword2]=useState(false);
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

            toast.error("password didn't match");
        } 
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData={
            ...formData
        }
        console.log (accountData);
        navigate("/");

    }
  return (
    <div className='flex flex-col'>


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
                 className='bg-slate-500 rounded-[0.5rem] text-slate-50 w-9 h-[38px] p-[10] mr-10'
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
                 className='bg-slate-500 rounded-[0.5rem] text-slate-50 w-[212px] h-[38px] p-[10]'
                />
          
            </label>
           <label>
                <p>Email <sup>*</sup></p>
                <input 
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder='Enter Email'
                value={formData.email}
                 className='bg-slate-500 rounded-[0.5rem] text-slate-50 w-[212px] h-[38px] p-[10]'
                />
          
           </label>
           <label>
                <p>Create Password <sup>*</sup></p>
                <input 
                required
                type={showPassword1? ("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder='Enter password'
                value={formData.password}
                 className='bg-slate-500 rounded-[0.5rem] text-slate-50 w-[212px] h-[38px] p-[10]'
                />
                 <span on onClick={()=> setShowPassword1((prev)=>!prev)}>
                        {showPassword1 ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
          
            </label>


            <label>
                <p>Confirm Password <sup>*</sup></p>
                <input 
                required
                type={showPassword2? ("text"):("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder='Enter  confirm password'
                value={formData.confirmpassword}
                 className='bg-slate-500 rounded-[0.5rem] text-slate-50 w-[212px] h-[38px] p-[10]'
                />
                 <span on onClick={()=> setShowPassword2((prev)=>!prev)}>
                        {showPassword2 ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
          
            </label>


           </div>
           <button>Create Account</button>

             



        </form>
    </div>
  )
}

export default SignupForm