import {
    DashboardHeader,
    DashboardHeaderDesktop,
  } from "../components/Dashboard/dashboardheader";
  import { useState,useEffect } from "react";
  import StudyMaterial from "../components/studymaterial/material";
  import MainHeader from "../components/header/header";
  import { GeneralButton } from "../components/Buttons/generalbuttontemplate";
  
  function StudyMaterialPage() {
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
           <StudyMaterial />
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
         <StudyMaterial />
          </div>
         </>
      )
  }
  
  
  export default StudyMaterialPage;