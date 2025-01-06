import sismoicon from "../../assets/icons/sismoicon.png";
import { GeneralButton } from "../Buttons/generalbuttontemplate";
import { Link } from "react-router-dom";

function HeaderDesktop() {
  return (
    <header className="fixed z-30 top-[-20px] w-screen py-[15px] bg-headerash flex items-center mt-[20px] px-[5%] justify-between ">
      <img
        onClick={(e) => {
          e.stopPropagation();
          window.location.href = "/";
        }}
        className="block w-[35px] h-[35px] cursor-pointer "
        src={sismoicon}
        alt="sismo Icon"
      />

      <ul className="flex items-center min-[1000px]:gap-[20px]  min-[1200px]:gap-[40px]  ">
      <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer">
          <Link to="/signin">Hire a Tutor</Link>
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer">
          <Link to="/signin">Student Resources</Link>
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer">
          <Link to="/signin">Teacher Resources</Link>
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer">
          <Link to="/signin">Our Blog</Link>
        </li>
        <li>
          <GeneralButton
            width={`100px`}
            font={`ubuntu`}
            height={`40px`}
            radius={"4px"}
            title={`Sign In`}
            color={"logogreen"}
            textcolor={"white"}
            link={"/signin"}
            textsize={"15px"}
            fontstyle={`font-bold`}
            external={`px-[5px] py-[15px] self-center`}
          />
        </li>
      </ul>
    </header>
  );
}

export default HeaderDesktop;
