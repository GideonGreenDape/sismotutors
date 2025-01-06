import {
  DashboardHeader,
  DashboardHeaderDesktop,
} from "../components/Dashboard/dashboardheader";
import {
  Grades,
  Bookshelve,
  Assignement,
  VideoConference,
  GradesDesktop,
  VideoConferenceDesktop,
  AssignementDesktop,
  BookshelveDesktop,
} from "../components/Dashboard/dashboardclickable";

import { useState,useEffect } from "react";


import MainHeader from "../components/header/header";
import { GeneralButton } from "../components/Buttons/generalbuttontemplate";

function Dashboard() {
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

function DesktopAndTabSignIn() {
    return(
       <>
        <MainHeader />
       <div className="flex-col flex gap-7 mt-[100px] overflow-x-hidden">
       <div className=" flex-col flex w-screen overflow-x-hidden items-center ">
        <DashboardHeaderDesktop />
        </div>
        <div className="flex gap-[22px] items-start justify-center overflow-x-hidden ">
            <GradesDesktop />
            <VideoConferenceDesktop />
            <BookshelveDesktop />
            <AssignementDesktop />
        </div>
        <GeneralButton width={`236px`}
            font={`ubuntu`}
            height={`42px`}
            radius={"4px"}
            title={`Hire a Tutor`}
            color={"darkgreen"}
            textcolor={"white"}
            link={"/#"}
            textsize={"15px"}
            fontstyle={`font-semibold`}
            external={`px-[21px] py-[10px] self-center mt-[19px] mb-[90px] `}
          />
       </div>
       </>
    )
}


function MobileSignIn() {
    return(
        <>
        <MainHeader />
        <div className="flex-col flex items-center overflow-x-hidden gap-5 mt-[90px] ">
        <DashboardHeader />
        <div className=" flex w-screen px-[22%] justify-between items-center ">
            <Grades />
            <VideoConference />
        </div>
        <div className="flex w-screen mt-9 px-[22%] justify-between items-center " >
        <Bookshelve />
        <Assignement />
        </div>
        <GeneralButton width={`236px`}
            font={`ubuntu`}
            height={`42px`}
            radius={"4px"}
            title={`Hire a Tutor`}
            color={"darkgreen"}
            textcolor={"white"}
            link={"/#"}
            textsize={"15px"}
            fontstyle={`font-semibold`}
            external={`px-[21px] py-[10px] self-center mt-[29px] mb-[90px] `}
          />
        </div>
       </>
    )
}


export default Dashboard;