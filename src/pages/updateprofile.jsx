// localstorage of webtoken will be implemented here once
// backend is ready
import SignupAndSignIn from "../components/Forms/generalform"
import bannerlightgreen from "../assets/bannerlightgreen.svg";
import sismoicon from "../assets/icons/sismoicon.png"
import { useState,useEffect } from "react";
import MainHeader from "../components/header/header";
import FormforProfile from "../components/Forms/formforProfile";
import progresbar from "../assets/progresbar.svg"
import { Link } from "react-router-dom";

function UpdateProfilePage() {
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
             
             <p className="font-ubuntu mt-[60px] font-bold text-[16px] leading-[43px] ">Update Profile</p>
             <FormforProfile redirectLink={'/dashboard'} />
             <div className="w-fit flex-col flex items-center gap-[7px] ">
             <Link to="/signin" className="font-ubuntu cursor-pointer text-formblack font-medium text-[14px]">
            Already have an account? Sign In
          </Link>
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
               <p className=" font-ubuntu  mt-[65px] font-bold text-[15px] text-formblack "> Update Profile</p>
                <FormforProfile redirectLink={'/dashboard'} />
             <div className="w-fit mt-[20px] ">
             <Link to="/signin" className="font-ubuntu cursor-pointer text-formblack font-medium text-[14px]">
            Already have an account? Sign In
          </Link>
          </div>
             </div>
             <div className="flex-col flex items-center w-[50%] h-screen bg-darkgreen ">
                <img className="object-fit " src={bannerlightgreen} alt="sismo adverts image" />
             </div>
        </div>
    )
}


export default UpdateProfilePage;