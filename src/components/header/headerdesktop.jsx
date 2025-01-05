import sismoicon from "../../assets/icons/sismoicon.png";
import { GeneralButton } from "../Buttons/generalbuttontemplate";

function HeaderDesktop() {
  return (
    <header className="flex items-center mt-[20px] px-[5%] justify-between ">
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
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer ">
          Home
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer ">
          Hire a Tutor
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer ">
          Student Resources{" "}
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer ">
          Teacher Resources
        </li>
        <li className="font-mont font-normal min-[1000px]:text-[12px] min-[1200px]:text-[14px] text-darkgreen cursor-pointer ">
          Our Blog{" "}
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
            link={"/#"}
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
