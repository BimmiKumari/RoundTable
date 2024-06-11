import React from 'react'
import Templates from '../components/Templates'
 

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
        <Templates
         title="Join the millions learning "
         desc1="Build skills for today,tomorrow and beyod."
         desc2=" Education to future-proof your career."
         //images={signupImg}
         formtype="Signup"
         setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}

export default Signup