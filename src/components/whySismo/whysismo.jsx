// Template for WhySismo component
function WhySismoTemplates(props) {
  return (
    <div className="flex-col flex items-center gap-[39px] w-[347px] py-[34px] px-0 ">
      <img
        className="block"
        style={{
          width: props.width,
          height: props.height,
        }}
        src={props.image}
        alt={props.imageTitle}
      />
      <p className="font-ubuntu text-center font-medium leading-[22px] text-[20px] ">
        {props.title}
      </p>
      <p className="font-mont leading-[22px] font-normal text-[14px] text-center ">
        {props.body}
      </p>
    </div>
  );
}

function JoinSismoTutor() {
    return(
        <div className="flex-col flex gap-[33px] items-center">
            <p className="font-mont leading-[34px] font-normal w-[287px] text-center text-[22px] ">Join Sismo Tutors today for free</p>
            <div className="flex-col flex gap-[13px] items-center">
            <GeneralButton
                width={`300px`}
                font={`ubuntu`}
                height={`50`}
                radius={"4px"}
                title={`Learners`}
                color={`logogreen`}
                textcolor={`white`}
                link={"/#"}
                textsize={"14px"}
                fontsyle={"medium"}
                external={`px-[126px] py-[14px] `} />
                <GeneralButton
                width={`300px`}
                font={`ubuntu`}
                height={`50`}
                radius={"4px"}
                title={`Teachers`}
                color={`logogreen`}
                textcolor={`white`}
                link={"/#"}
                textsize={"14px"}
                fontsyle={"medium"}
                external={`px-[126px] py-[14px] `} />
                <GeneralButton
                width={`300px`}
                font={`ubuntu`}
                height={`50`}
                radius={"4px"}
                title={`Parents`}
                color={`logogreen`}
                textcolor={`white`}
                link={"/#"}
                textsize={"14px"}
                fontsyle={"medium"}
                external={`px-[126px] py-[14px] `} />
            </div>
        </div>
    )
}


export {JoinSismoTutor, WhySismoTemplates};