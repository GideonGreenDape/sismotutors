import { GeneralButton } from "../Buttons/generalbuttontemplate";

function TemplateforAandR(props) {
  return (
    <div className="flex gap-[48px] items-center bg-ash px-[6px] py-[5px] w-fit ">
      <div className="flex-col flex gap-[0px] ">
        <p className="font-mont leading-[33px] font-normal text- text-[13px]">
          {props.title}{" "}
        </p>
        <p className="font-mont leading-[33px] font-normal text- text-[13px] w-[256px] ">
          {props.subheading}{" "}
          {props.switch ? (
            <span className="font-bold">{props.text}</span>
          ) : (
            <></>
          )}
        </p>
      </div>
      <GeneralButton
        width={`63px`}
        font={`ubuntu`}
        height={`28px`}
        radius={"0px"}
        title={`view`}
        color={"logogreen"}
        textcolor={"white"}
        link={"/#"}
        textsize={"13px"}
        fontstyle={`font-bold`}
        external={`px-[15px] py-[3px] self-center`}
      />
    </div>
  );
}

{
  /*
    <TemplateforAandR subheading={'20/12/2024'} title={'New school physic Summary Note'} switch={true}   />
    */
}

export default TemplateforAandR;
