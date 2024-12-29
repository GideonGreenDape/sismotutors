import menu from "../../assets/icons/menu.png";
import search from "../../assets/icons/search.png";
import sismoicon from "../../assets/icons/sismoicon.png";
import close from "../../assets/icons/close.svg";
import { GeneralButton } from "../Buttons/generalbuttontemplate";
import instagramicon from "../../assets/icons/instagramicon.svg";
import linkedinicon from "../../assets/icons/linkedinicon.svg";
import twittericon from "../../assets/icons/twittericon.svg";
import { useState } from "react";
import { motion } from "framer-motion";


function HeaderMobile(props) {
  const [sidebar, setSidebar] = useState(false);
  const background=`relative bg-${props.bgcolor} `
  return (
    <header style={{
      display: "flex",
        flexDirection: "column",
        overflowY: "hidden",
        alignItems:"center",
    }} className={background} >
      <div className="w-full mt-[21.5px] mb-[21.5px] px-[5.66%] flex justify-between items-cente fixed z-30">
      <img
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = "/";
        }}
        className="block w-[35px] h-[35px] cursor-pointer "
        src={sismoicon}
        alt="sismo Icon"
      />

      <div className="flex items-center gap-[18px] h-[35px] ">
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

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 }, // Start from the left
  visible: { opacity: 1, x: 0 },  // Slide to the original position
};

function SideBar({ setSidebar }) {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className="self-end left-0 m-0 top-0 z-50 flex-col flex overflow-x-hidden gap-4 relative bg-no-repeat bg-logogreen w-screen h-screen"
    >
      <div onClick={(e)=>{
           e.stopPropagation();
           setSidebar(false);
        }} className=" flex items-center 
        justify-center absolute top-[30px] 
        right-[15px] w-[35px] h-[35px] bg-logogreen hover:bg-darkgreen 
        rounded-3xl ">
      <img
        className="block cursor-pointer w-[24px] h-[24px] "
        src={close}
        alt="close icon"
      />
      </div>
     <div className="flex flex-col gap-4 pt-[150px] " >
      <motion.ul className="flex-col pl-[38px] flex gap-[20px] ">
        <motion.li variants={itemVariants} className="font-mont text-white text-[16px] font-normal">
          Home
        </motion.li>
        <motion.li variants={itemVariants} className="font-mont text-white text-[16px] font-normal">
          Hire a Tutor
        </motion.li>
        <motion.li variants={itemVariants} className="font-mont text-white text-[16px] font-normal">
          Student Resources
        </motion.li>
        <motion.li variants={itemVariants} className="font-mont text-white text-[16px] font-normal">
          Teacher Resources
        </motion.li>
        <motion.li variants={itemVariants} className="font-mont text-white text-[16px] font-normal">
          Our Blog
        </motion.li>
        <motion.li variants={itemVariants} className="font-mont text-white text-[16px] font-normal">
          FAQS
        </motion.li>
      </motion.ul>

      <GeneralButton
        width={`280px`}
        font={`mont`}
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
        className="font-mont text-[13px] self-center mt-[25px]  text-white font-semibold cursor-pointer "
      >
        CREATE ACCOUNT
      </p>

      <div className="self-center flex mt-[15px] gap-[5px] h-[35px] ">
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

    </motion.nav>
  );
}

export {HeaderMobile};
