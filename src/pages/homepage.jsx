// localstorage of webtoken will be implemented here once
// backend is ready
import sismoicon from "../assets/icons/sismoicon.png"
import { useState,useEffect } from "react";
import MainHeader from "../components/header/header";
import homepagebanner from '../assets/homepagebanner.svg'
import { Link } from "react-router-dom";
import {
  ContactTutor,
  LearnersandStudent,
  TeacherandSchool,
  ParentandGuardian,
} from "../components/cards/card"

import {JoinSismoTutor, WhySismoTemplates} from "../components/whySismo/whysismo";
import { Conversion, GettingHelp, ConversionTwo } from "../components/uncategorized/conversiontemplate";
import Footer from "../components/footer/footerTemplate";

function Homepage() {
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
        <div className="flex-col mt-[70px] flex gap-[50px] items-center overflow-x-hidden " >
            <div className="bg-headerash flex items-center w-screen h-[239px] ">
            <img className='' src={homepagebanner} alt="homepage banner" />
            </div>

        </div>
        </>
    )
}


function DesktopAndTabSignUp() {
    return(
        <div className="flex gap-0 h-screen relative overflow-y-hidden ">
            <MainHeader />
        </div>
    )
}


export default Homepage