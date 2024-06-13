import React from 'react';
import Templates from '../components/Templates';
import pic from '../assets/images/font.jpeg';

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
        <Templates
         title="Welcome Back"
         desc1="Build skills for today,tomorrow and beyod."
         desc2=" Education to future-proof your career."
         image={pic}
         formtype="Login"
         setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Login