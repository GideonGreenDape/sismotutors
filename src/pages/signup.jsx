// localstorage of webtoken will be implemented here once
// backend is ready
import SignupAndSignIn from "../components/Forms/generalform"
import bannerlightgreen from "../assets/bannerlightgreen.svg";
import sismoicon from "../assets/icons/sismoicon.png"
import { useState,useEffect } from "react";
import MainHeader from "../components/header/header";
import { Link } from "react-router-dom";

function SignUpPage() {
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
        <div className="flex-col mt-[70px] flex gap-[50px] items-center " >
             <p className="font-ubuntu mt-[60px] font-bold text-[24px] leading-[43px] ">Sign Up</p>
             <SignupAndSignIn redirectLink={'/updateprofile'} color={'logogreen'} />
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
             <div className="flex-col flex pt-[30px] gap-[20px] items-center w-[50%] ">
               <img className="absolute top-[30px] left-[40px] w-[35px] h-[35px] " src={sismoicon} alt="sismo tutors icon" /> 
               <p className="font-ubuntu mt-[95px] mb-[15px] font-bold text-[21px] text-formblack "> Sign Up</p>
             <SignupAndSignIn redirectLink={'/updateprofile'} color={'darkgreen'} />
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


export default SignUpPage