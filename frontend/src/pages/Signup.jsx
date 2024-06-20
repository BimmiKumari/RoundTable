import signupImg from "../assets/images/signup.webp"
import Template from "../components/Template"

function Signup() {
  return (
    <div style={{background:"linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)"}} >
    <Template
      title="Join the millions learning to code with RoundTable for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
    </div>
  )
}

export default Signup