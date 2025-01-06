import {
  DashboardHeader,
  DashboardHeaderDesktop,
} from "../components/Dashboard/dashboardheader";
import ExamPractice from "../components/exampractice/pratice";
import { useState, useEffect } from "react";
import QuestionTemplate from "../components/questions/question";

import MainHeader from "../components/header/header";
import { GeneralButton } from "../components/Buttons/generalbuttontemplate";

function QuestionPage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <>{isDesktop ? <DesktopAndTabSignIn /> : <MobileSignIn />}</>;
}

function DesktopAndTabSignIn() {
  return (
    <>
      <MainHeader />
      <div className="flex-col flex gap-7 mt-[100px] overflow-x-hidden">
        <div className=" flex-col flex w-screen overflow-x-hidden items-center ">
          <DashboardHeaderDesktop />
        </div>
        <div className="flex gap-[20px] px-[4%] ">
          <div className="w-[33%] flex-col flex gap-4 ">
            <QuestionTemplate
              question={"1. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
            <QuestionTemplate
              question={"4. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
          </div>
          <div className="w-[33%] flex-col flex gap-4 ">
            <QuestionTemplate
              question={"2. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
            <QuestionTemplate
              question={"5. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
          </div>
          <div className="w-[33%] flex-col flex gap-4 ">
            <QuestionTemplate
              question={"3. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
             <QuestionTemplate
              question={"6. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />

          </div>
        </div>
        <GeneralButton width={`236px`}
            font={`ubuntu`}
            height={`42px`}
            radius={"4px"}
            title={`Submit Answers`}
            color={"darkgreen"}
            textcolor={"white"}
            link={"/#"}
            textsize={"15px"}
            fontstyle={`font-semibold`}
            external={`px-[21px] py-[10px] self-center mt-[29px] mb-[90px] `}
          />
      </div>
    </>
  );
}

function MobileSignIn() {
  return (
    <>
      <MainHeader />
      <div className="flex-col flex items-center overflow-x-hidden gap-5 mt-[90px] ">
        <DashboardHeader />
        <p className="self-start ml-5 mt-5 font-mont font-bold text-darkgreen text-[15px] ">Physic question</p>
        <div className="self-start ml-5 flex-col flex gap-4 items-start ">
        <QuestionTemplate
              question={"1. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
            <QuestionTemplate
              question={"2. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
            <QuestionTemplate
              question={"3. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
            <QuestionTemplate
              question={"3. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
            <QuestionTemplate
              question={"4. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            />
             <QuestionTemplate
              question={"5. The SI unit of force is what ?"}
              choices={[
                "A. Watts",
                "B. Joules",
                "C. Newtons/Seconds",
                "D Neptune",
              ]}
            /> <QuestionTemplate
            question={"6. The SI unit of force is what ?"}
            choices={[
              "A. Watts",
              "B. Joules",
              "C. Newtons/Seconds",
              "D Neptune",
            ]}
          /> <QuestionTemplate
          question={"7. The SI unit of force is what ?"}
          choices={[
            "A. Watts",
            "B. Joules",
            "C. Newtons/Seconds",
            "D Neptune",
          ]}
        />
        </div>
        <GeneralButton width={`236px`}
            font={`ubuntu`}
            height={`42px`}
            radius={"4px"}
            title={`Submit Answers`}
            color={"darkgreen"}
            textcolor={"white"}
            link={"/#"}
            textsize={"15px"}
            fontstyle={`font-semibold`}
            external={`px-[21px] py-[10px] self-center mt-[29px] mb-[90px] `}
          />
      </div>
    </>
  );
}

export default QuestionPage;
