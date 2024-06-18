import React from "react";
import TimeLineImage from '../assets/images/TimelineImage.png'
import Logo1 from "../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../assets/TimeLineLogo/Logo4.svg";
import HighlightText from "./HighlightText";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Soft Skill",
      Description: " Because Effective communication drives progress",
    },
    {
      Logo: Logo2,
      Heading: "Providing Networking opportunities",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Top Gen AI Demo",
      Description: "Shape your Tomorrow with Experience of Intelligence",
    },
    {
      Logo: Logo4,
      Heading: "Hands-on-session",
      Description: "Practical insights directly from experts in the field",
    },
  ];


const TimelineSection = () => {
  return (
    <div >
      <div className="flex flex-col lg:flex-row gap-20 mb-36  items-center ">
        <div className="lg:w-[40%] flex flex-col gap-14 lg:gap-3">
        <h2 className="font-bold text-3xl mb-10">What our services contain</h2>
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3  " key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[60px] h-[60px] bg-rgb(249, 247, 247) bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-white bg-black-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-caribbeangreen-300 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-black flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-black px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">3</h1>
              <h1 className="text-white text-sm w-[75px]">
                Years  in corporate
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">All</h1>
              <h1 className="text-white text-sm w-[75px]">
                Domain of IT
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;