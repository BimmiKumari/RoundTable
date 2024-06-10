import React, { useState } from 'react';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const Signup = () => {

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
  return (
    <div>


        <div>
            <button>Visitor</button>
            <button>Admin</button>
           
        </div>

        <form>
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
                name="lastname"
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
                name="lastname"
                onChange={changeHandler}
                placeholder='Enter  confirm password'
                value={formData.confirmpassword}
                />
                 <span on onClick={()=> setShowPassword((prev)=>!prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                   </span>
          
            </label>


           </div>

             



        </form>
    </div>
  )
}

export default Signup