import loginImg from "../assets/images/login.webp"
import Template from "../components/Template"

function Login() {
  return (
    <div style={{background:"linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)"}} >
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Exposure to future-proof your career."
      image={loginImg}
      formType="login"
    />
    </div>
  )
}

export default Login