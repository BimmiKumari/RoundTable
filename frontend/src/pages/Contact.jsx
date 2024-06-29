import React from "react"
import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"


const Contact = () => {
  return (
    <div style={{background:"linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%)"}} >
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
       
        <div className="lg:w-[40%] ">
          <ContactDetails />
        </div>

        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Contact