// localstorage of webtoken will be implemented here once
// backend is ready
import SignupAndSignIn from "../components/Forms/generalform"


function SignIn() {
    return(
         <div className="flex-col flex gap-[70px] min-[1000px]:flex min-[1000px]:gap-[0px] ">
           
         </div>
    )
}


function MobileSignIn() {
    return(
        <div className="flex-col flex gap-[70px] items-center " >
             <p className="font-ubuntu font-bold text-[26px] leading-[43px] ">Sign In</p>
             <SignupAndSignIn />
             <div>
                <p className="font-mont font-normal text-[15px] ">Forgot Password</p>
                <p className="font-mont font-normal text-[15px] ">Create Account</p>
             </div>
        </div>
    )
}


function DesktopAndTabSignIn() {
    return(
        <div className="flex gap-0 ">

        </div>
    )
}