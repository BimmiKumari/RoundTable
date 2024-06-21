import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"
import HighlightText from "./HighlightText";
import frameImg from "../assets/images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center ml-28">
      {loading ? (
        <div className="spinner">loading.........</div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-6 py-12 md:flex-row md:gap-y-0 md:gap-x-6">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 flex flex-col text-[1.125rem] ">
              <span className="text-white">{description1}</span>{" "}
              
                 <span className="font-edu-sa font-bold italic">
                      <HighlightText text={description2} />
                 </span>
              
              
            </p> 
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px]  md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 h-[408px] right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template