import React from 'react';
import Templates from '../components/Templates'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
        <Templates
         title="Welcome Back"
         desc1="Build skills for today,tomorrow and beyod."
         desc2=" Education to future-proof your career."
         //images={loginImg}
         formtype="Login"
         setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Login