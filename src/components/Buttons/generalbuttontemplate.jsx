// All about the general button template

import imagebutton from "../../assets/imagebutton.png";



function GeneralButton(props) {
    let styling = ` ${props.external} font-${props.font} ${props.fontstyle} 
    text-[${props.textsize}] justify-center flex items-center 
    bg-${props.color} text-${props.textcolor}
    cursor-pointer `

    return(
        <div  onClick={()=>{
            window.location.href = props.link;
        }}  className={styling} 
        style={{ width: props.width, height: props.height,borderRadius: props.radius }}
        >
           {props.title}
        </div>
    )   
}


export {
    imagebutton,
    GeneralButton
}