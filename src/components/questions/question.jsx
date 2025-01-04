import { useState } from "react";

function QuestionTemplate(props) {
  const [highlightedChoiceIndex, setHighlightedChoiceIndex] = useState(null);

  const handleChoiceClick = (index) => {
    setHighlightedChoiceIndex(index);
  };

  return (
    <div className="flex-col flex items-start gap-[5px] ">
      <p className="font-mont font-light mb-[5px] text-[14px]">
        {props.question}
      </p>
      {props.choices.map((item, index) => {
        let style = ` py-[9px] pl-[10px] cursor-pointer 
        w-fit py-[6px] pr-[30px] bg-lightgreen font-mont 
        text-[14px] font-thin `;
        let style2 = ` pl-[10px] hover:bg-ash 
        cursor-pointer w-fit py-[9px] pr-[30px] 
        bg-white font-mont text-[13px] font-thin `;
        return (
          <p
            key={index}
            onClick={() => handleChoiceClick(index)}
            className={highlightedChoiceIndex === index ? style : style2}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default QuestionTemplate;

/*
<QuestionTemplate  question={'1. The SI unit of force is what ?'} choices={
      [
        "A. Watts",
        "B. Joules",
        "C. Newtons/Seconds",
        "D Neptune"
      ]
     } />

*/