import {
    DashboardHeader,
    DashboardHeaderDesktop,
  } from "../components/Dashboard/dashboardheader";
  import { useState, useEffect } from "react";
  import TemplateforAandR from "../components/sametemplate/assignmentandresource";
  import MainHeader from "../components/header/header";
  import { GeneralButton } from "../components/Buttons/generalbuttontemplate";
  
  function AssignmentPage() {
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
    return <>{isDesktop ? <DesktopAndTabSignIn /> : <MobileSignIn />}</>;
  }
  
  function DesktopAndTabSignIn() {
    return (
      <>
        <MainHeader />
        <div className="flex-col flex gap-7 mt-[100px] overflow-x-hidden">
          <div className=" flex-col flex w-screen overflow-x-hidden items-center ">
            <DashboardHeaderDesktop />
          </div>
          <p className="self-start ml-14 w-fit mt-5 font-mont font-bold text-darkgreen text-[15px] ">Submit Assignment</p>
          <input className="ml-14 " type="file" name="assignment" id="assignment" />
          <div className="flex gap-[20px] px-[4%] ">
            <div className="w-[33%] flex-col flex gap-4 ">
            <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
            <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
            </div>
            <div className="w-[33%] flex-col flex gap-4 ">
            <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
            <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
            </div>
            <div className="w-[33%] flex-col flex gap-4 ">
            <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
            <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
  
            </div>
          </div>
          <GeneralButton width={`236px`}
              font={`ubuntu`}
              height={`42px`}
              radius={"4px"}
              title={`Submit Answers`}
              color={"darkgreen"}
              textcolor={"white"}
              link={"/#"}
              textsize={"15px"}
              fontstyle={`font-semibold`}
              external={`px-[21px] py-[10px] self-center mt-[29px] mb-[90px] `}
            />
        </div>
      </>
    );
  }
  
  function MobileSignIn() {
    return (
      <>
        <MainHeader />
        <div className="flex-col flex items-center overflow-x-hidden gap-5 mt-[90px] ">
          <DashboardHeader />
          <p className="self-start ml-5 mt-5 font-mont font-bold text-darkgreen text-[15px] ">Submit Assignment</p>
          <input className="ml-5 mt-3 mb-4 " type="file" name="assignment" id="assignment" />
          <div className="self-start ml-5 flex-col flex gap-4 items-start ">
          <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
          <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
          <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
          <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
          <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
          <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
          <TemplateforAandR subheading={'20/12/2024'} title={'Assignment submitted by youri pan'} switch={true}   />
          </div>
          <GeneralButton width={`236px`}
              font={`ubuntu`}
              height={`42px`}
              radius={"4px"}
              title={`Submit Answers`}
              color={"darkgreen"}
              textcolor={"white"}
              link={"/#"}
              textsize={"15px"}
              fontstyle={`font-semibold`}
              external={`px-[21px] py-[10px] self-center mt-[29px] mb-[90px] `}
            />
        </div>
      </>
    );
  }
  
  export default AssignmentPage;
  