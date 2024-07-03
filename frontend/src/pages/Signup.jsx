import signupImg from "../assets/Images/signup.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <div style={{background:"linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)"}}>
    <Template
      title="Join the millions learning emerging skills with Roundtable for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Exposure to future-proof your career."
      image={signupImg}
      formType="signup"
    />
    </div>
  )
}

export default Signup