import tutorsimage from "../../assets/tutorsimage.png";
import { GeneralButton } from "../Buttons/generalbuttontemplate";

function Conversion(props) {
  let headerstyle = `font-${props.font} 
    font-${props.bold} text-${props.color} 
    text-[${props.size}] ${props.width} `;

  let paragraphstyle = `
    font-${props.font} 
    font-${props.bold} text-${props.color} 
    text-[${props.size}] ${props.width} ${props.external}
    `;
  return (
    <div className="flex-col flex gap-[49px] items-center">
      <img
        className="block w-[250px] h-[250px] "
        src={tutorsimage}
        alt="tutors image"
      />
      <p className={headerstyle}>{props.headerstyle}</p>
      <p className={paragraphstyle}>{props.paragraph}</p>
    </div>
  );
}

function GettingHelp() {
  return (
    <div className=" flex-col flex gap-[23px]  ml-[20px] mt-[20px] ">
      <p className="font-mont font-bold text-[25px] leading-[37px] w-[308px] ">
        Getting Help is Easier Than You Think
      </p>
      <p className="font-mont font-normal text-[15px] leading-[27px] w-[299px] mt-[20px] ">
        we offer each students a personalized support in order to consolidate
        their learning and develop their study strategies.
      </p>
      <GeneralButton
        width={`157px`}
        font={`ubuntu`}
        height={`47px`}
        radius={"4px"}
        title={`Get a Tutor`}
        color={"logogreen"}
        textcolor={"white"}
        link={"/#"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[21px] py-[10px] mt-[25px] `}
      />
    </div>
  );
}

export { Conversion, GettingHelp };
