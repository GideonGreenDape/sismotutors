// localstorage of webtoken will be implemented here once
// backend is ready
import bannerlightgreen from "../assets/bannerlightgreen.svg";
import sismoicon from "../assets/icons/sismoicon.png"
import { useState,useEffect } from "react";
import MainHeader from "../components/header/header";
import CoursesForm from "../components/courses/courses";
import progressbar2 from "../assets/progressbar2.svg"


function UpdateCourse() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return(
        <>
        {isDesktop ? <DesktopAndTabSignUp /> : <MobileSignUp  />}
      </>
    )
}


function MobileSignUp() {
    return(
       <>
       <MainHeader />
        <div className="flex-col mt-[70px] flex gap-[40px] mb-[30px] items-center " >
             <p className="font-ubuntu text-darkgreen mt-[60px] font-bold text-[16px] leading-[43px] ">Update Profile</p>
             <CoursesForm />
             <div className="w-fit flex-col flex items-center gap-[7px] ">
                <p className="font-ubuntu font-normal cursor-pointer text-[12px] ">Already have and account? Sign In</p>
                
             </div>
        </div>
       </>
    )
}


function DesktopAndTabSignUp() {
    return(
        <div className="flex gap-0 h-screen relative overflow-y-hidden ">
             <div className="flex-col flex pt-[35px] mb-[90px] gap-[20px] overflow-y-scroll items-center w-[50%] ">
               <img className="absolute top-[30px] left-[40px] w-[35px] h-[35px] " src={sismoicon} alt="sismo tutors icon" /> 
               <p className=" font-ubuntu self-start px-[28%]  mt-[65px] font-bold text-[17px] text-formblack "> Update Preferred Courses</p>
               <img className="mt-[15px] h-[40px] block ml-[15px]  mb-[20px] " src={progressbar2} alt="progress bar" />
               <CoursesForm />
             
             </div>
             <div className="flex-col flex items-center w-[50%] h-screen bg-darkgreen ">
                <img className="object-fit " src={bannerlightgreen} alt="sismo adverts image" />
             </div>
        </div>
    )
}


export default UpdateCourse;