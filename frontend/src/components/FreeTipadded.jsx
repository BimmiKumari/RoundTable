import React from 'react'
import HighlightText from './HighlightText'
import Know_your_progress from "../assets/images/Know_your_progress.png";
import Compare_with_others from "../assets/images/Compare_with_others.png";
import Plan_your_lessons from "../assets/images/Plan_your_lessons.png";

const FreeTip = () => {
  return (
    <div>
        <div className="text-4xl font-semibold text-center text-white my-10" >
           Grab Your swiss knife to 
            <HighlightText text={"Crack Interviews"} />
            <div className="text-center text-white font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
            Because with each  Roundtable session, you will receive a complimentary pro tips and mechanism to learn languages in the most effective manner.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
              <img
                src={Know_your_progress}
                alt=""
                className="object-contain  lg:-mr-32 "
              />
              <img
                src={Compare_with_others}
                alt=""
                className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
              />
              <img
                src={Plan_your_lessons}
                alt=""
                className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
              />
            </div>
            
            <div className='text-xl mt-14 mb-14'>
                <button>Book Now</button>
            </div>
          </div>

         
    </div>
  )
}

export default FreeTip