import tutorsimage from "../../assets/tutorsimage.png";
import { GeneralButton } from "../Buttons/generalbuttontemplate";

function Conversion(props) {
    let headerstyle=`font-${props.font} 
    font-${props.bold} text-${props.color} 
    text-[${props.size}] ${props.width} `;

    let paragraphstyle=`
    font-${props.font} 
    font-${props.bold} text-${props.color} 
    text-[${props.size}] ${props.width} ${props.external}
    `
    return(
        <div className="flex-col flex gap-[49px] items-center">
         <img
         className="block w-[250px] h-[250px] "
         src={tutorsimage} alt="tutors image" />
         <p className={headerstyle} >
          {props.headerstyle}
         </p>
         <p className={paragraphstyle} >
            {props.paragraph}
         </p>
        </div>
    )
}


export default Conversion;