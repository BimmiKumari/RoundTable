import loginImg from "../assets/Images/login.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <div style={{background:"linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)"}}>
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />
    </div>
  )
}

export default Login