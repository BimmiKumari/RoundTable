import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "../../core/HomePage/CourseCard";
import HighlightText from "../../core/HomePage/HighlightText";
import frame from '../../../assets/Images/framebg.svg';
const tabsName = [
  "Free",
  "New to Techfield",
  "Most popular",
  "Machine Learning",
  "Artificial Intelligence",
];

const Workshop = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div style={{background: "linear-gradient(180deg, rgb(0, 0, 0) 10%, rgb(55, 94, 99) 50%);"}}>
      
        <div className="text-4xl py-10 text-white  font-semibold  text-center">
          
          <div className="mt-10">
           Unlock the
          <HighlightText text={"Power of Technical Skills"} />
          <p className="text-center text-richblack-300 animate-colorChange  text-lg  font-semibold mt-2">
           Book Us and Learn to Build Anything You Can Imagine 
          </p>
          </div>
          
        </div>
      

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 mt-6 mx-auto w-max bg-caribbeangreen-5 text-black p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-900"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>
      

      {/* Cards Group */}
      <div className="lg:absolute z-10 justify-center  flex gap-x-10 flex-wrap w-full  lg:left-[50%] ml-0 lg:translate-x-[-50%] lg:translate-y-[50%] text-black mt-0 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              
            />
          );
        })}
      </div>
      <div className='absolute flex px-0 ml-4 mt-[300px] bg-white  -z-0 w-fit'>
      <img src={frame} alt="frame not loaded" />
      <img src={frame} alt="frame not loaded"/>
      <img src={frame} alt="frame not loaded"/>
      
      </div>
    </div>
  );
};

export default Workshop