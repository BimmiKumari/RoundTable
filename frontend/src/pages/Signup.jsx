import signupImg from "../assets/images/signup.webp"
import Template from "../components/Template"

function Signup() {
  return (
    <div style={{background:"linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)"}} >
    <Template
      title="Book your spot in our exclusive workshops with RoundTable"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Exposure to future-proof your career."
      image={signupImg}
      formType="signup"
    />
    </div>
  )
}

export default Signup