import menu from "../../assets/icons/menu.png";
import search from "../../assets/icons/search.png";
import sismoicon from "../../assets/icons/sismoicon.png";
import close from "../../assets/icons/close.svg";
import { GeneralButton } from "../Buttons/generalbuttontemplate";
import instagramicon from "../../assets/icons/instagramicon.svg";
import linkedinicon from "../../assets/icons/linkedinicon.svg";
import twittericon from "../../assets/icons/twittericon.svg";
import { useState } from "react";


function HeaderMobile() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className="flex-col overflow-y-hidden flex relative " >
      <div className="w-full h-[76px] px-[5.66%] flex justify-between items-center bg-white fixed z-30">
      <img
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = "/";
        }}
        className="block ml-[15px] w-[35px] h-[35px] cursor-pointer "
        src={sismoicon}
        alt="sismo Icon"
      />

      <div className="flex w-[92px] gap-[18px] h-[35px] ">
        <img
          className="block w-[24px] h-[24px] "
          src={search}
          alt="search icon"
        />
        <img onClick={(e)=>{
          e.stopPropagation();
          setSidebar(!sidebar);
        }} className="block w-[24px] h-[24px] cursor-pointer " src={menu} alt="menu icon" />
      </div>
      </div>
      {sidebar ? <SideBar setSidebar={setSidebar} /> : null}
    </header>
  );
}

function SideBar({setSidebar}) {
  return (
    <nav className="self-end left-0 m-0 top-0 z-50 flex-col flex overflow-x-hidden gap-4 relative bg-no-repeat bg-logogreen w-screen h-screen ">
      {/**Sidebar content */}
      <img
        className="block cursor-pointer w-[24px] h-[24px] absolute top-[30px] right-[15px] "
        src={close}
        alt="close icon"
        onClick={(e)=>{
           e.stopPropagation();
           setSidebar(false);
        }}
      />
     <div className="flex flex-col gap-4 pl-[38px] pt-[150px] " >
       <ul className="flex-col flex gap-[20px] " >
        <li className="font-mont cursor-pointer text-white text-[16px] font-normal ">Home</li>
        <li className="font-mont cursor-pointer text-white text-[16px] font-normal ">Hire a Tutor </li>
        <li className="font-mont cursor-pointer text-white text-[16px] font-normal ">Student Resources </li>
        <li className="font-mont cursor-pointer text-white text-[16px] font-normal ">Teacher Resources</li>
        <li className="font-mont cursor-pointer text-white text-[16px] font-normal ">Our Blog</li>
        <li className="font-mont cursor-pointer text-white text-[16px] font-normal ">FAQS</li>
      </ul>

      <GeneralButton
        width={`280px`}
        font={`ubuntu`}
        height={`48px`}
        radius={"4px"}
        title={`Login`}
        color={"white"}
        textcolor={"darkgreen"}
        link={"/#"}
        textsize={"16px"}
        fontstyle={`font-normal`}
        external={`self-center px-[132px] py-[17px] mt-[50px] `}
      />

      <p
        onClick={() => {
          window.location.href = "/#";
        }}
        className="font-mont text-[13px] self-center mt-[25px]  text-white font-normal cursor-pointer "
      >
        CREATE ACCOUNT
      </p>

      <div className="self-center flex mt-[15px] gap-[5px]  w-[130px] h-[35px] ">
        <img
          className="block w-[25px] h-[25px] "
          src={linkedinicon}
          alt="linkedin icon"
        />
        <img
          className="block w-[25px] h-[25px] "
          src={instagramicon}
          alt="instagram icon"
        />
        <img
          className="block w-[25px] h-[25px] "
          src={twittericon}
          alt="twitter icon"
        />
      </div>
     </div>

    </nav>
  );
}

export {HeaderMobile,SideBar};
