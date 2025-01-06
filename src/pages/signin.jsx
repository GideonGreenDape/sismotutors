// localstorage of webtoken will be implemented here once
// backend is ready
import SignupAndSignIn from "../components/Forms/generalform"
import banner from "../assets/banner.svg";
import sismoicon from "../assets/icons/sismoicon.png"
import { useState,useEffect } from "react";
import MainHeader from "../components/header/header";
import { Link } from "react-router-dom";

function SignInPage() {
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
        {isDesktop ? <DesktopAndTabSignIn /> : <MobileSignIn  />}
      </>
    )
}


function MobileSignIn() {
    return(
       <>
       <MainHeader />
        <div className="flex-col flex mt-[70px] gap-[50px] items-center " >
             <p className="font-ubuntu text-darkgreen mt-[60px] font-bold text-[24px] leading-[43px] ">Sign In</p>
             <SignupAndSignIn redirectLink={'/dashboard'} color={'logogreen'} />
             <div className="w-fit flex-col flex items-center gap-[7px] ">
                <p className="font-ubuntu font-normal cursor-pointer text-[12px] ">Forgot Password</p>
                <Link to="/signup" className="font-ubuntu font-normal cursor-pointer text-[12px]">Create Account</Link>
             </div>
        </div>
       </>
    )
}


function DesktopAndTabSignIn() {
    return(
        <div className="flex gap-0 h-screen relative overflow-y-hidden ">
             <div className="flex-col flex pt-[30px] gap-[20px] items-center w-[50%] ">
               <img className="absolute top-[30px] left-[40px] w-[35px] h-[35px] " src={sismoicon} alt="sismo tutors icon" /> 
               <p className="font-ubuntu mt-[75px] mb-[15px] font-bold text-[22px] text-formblack "> Sign In</p>
             <SignupAndSignIn redirectLink={'/dashboard'} color={'logogreen'} />
             <div className="w-fit flex-col flex items-center gap-[7px] mt-[20px] ">
                <p className="font-ubuntu cursor-pointer font-medium text-[13px] text-formblack ">Forgot Password</p>
                <Link to="/signup" className="font-ubuntu font-normal cursor-pointer text-[12px]">Create Account</Link>
             </div>
             </div>
             <div className="flex-col flex items-center w-[50%] h-screen bg-darkgreen ">
                <img className="object-fit " src={banner} alt="sismo adverts image" />
             </div>
        </div>
    )
}


export default SignInPage