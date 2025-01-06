import { imagebutton } from "../Buttons/generalbuttontemplate";
import locationimage from "../../assets/locationimage.png";
import { GeneralButton } from "../Buttons/generalbuttontemplate";
import thumbnail from "../../assets/thumbnail.png";

function Card1() {
  return (
    <div className="flex-col flex gap-[20px] items-center">
      <p className="self-start font-ubuntu font-bold text-[23px] text-textdark ">
        Bridging knowledge and skills
      </p>
      <p className="w-[335px] min-[490px]:w-[390px] font-mont text-[14px] font-normal text-logogreen text-left ">
        We go beyond the classroom-equipping you with the knowledge and
        essential skills for the future.
      </p>

      <div className="mt-[7px] w-[284px] h-[98.78px] ">
        <img
          src={imagebutton}
          alt="you can learn anything button"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function ContactTutor() {
  return (
    <div className="flex-col flex gap-[30px] items-center ">
      <p className="font-ubuntu font-bold w-[330px] min-[490px]:w-[390px] leading-[26px] text-[20px] ">
        Find the{" "}
        <span className="inline-block p-[0px] text-white text-center bg-logogreen w-[139px] h-[26px] ">
          perfect tutors
        </span>{" "}
        for your learning needs with just a click
      </p>

      <p className="font-mont w-[340px] min-[490px]:w-[390px] leading-[22px] font-normal text-[14px] text-darkgreen text-left ">
        Whether you’re seeking help in math, science, or you desire to learn a
        new skill or any other subjects, Sismo Tutors connects you with
        qualified experts ready to guide you to success. Start your journey to
        better learning today.
      </p>

      <div className="w-[356px] ">
        <img
          src={locationimage}
          className=" mt-[6px] w-[340px] object-cover"
          alt="image showing sismo covers all areas in a city and country"
        />
      </div>

      <GeneralButton
        width={`141px`}
        font={`ubuntu`}
        height={`42px`}
        radius={"4px"}
        title={`Contact Tutor`}
        color={`logogreen`}
        textcolor={`white`}
        link={"/#"}
        textsize={"14px"}
        fontsyle={"bold"}
        external={`px-[11px] py-[10px] mt-[40px] `}
      />
    </div>
  );
}

// for learners and student and guardian i made app.js px-[5%] pt-[30px]

function LearnersandStudent() {
  return (
    <div className="flex-col flex gap-[32px] ">
      <p className="font-ubuntu leading-[26px] w-[335px] font-medium text-[22px] ">
        You can learn anything from our large
        <span className="w-[200px] h-[35px] inline-block p-[0px] text-white text-center bg-logogreen ">
          learning resource
        </span>
      </p>
      <p className="font-mont leading-[22px] w-[335px]  min-[490px]:w-[390px] font-normal text-[14px] text-darkgreen text-left ">
        Develop a strong, comprehensive understanding in Sciences, Technology,
        Engineering, Mathematics and beyond.
      </p>
      <img
        src={thumbnail}
        className="w-[300px] self-center mt-[10px] "
        alt="video thumbnail"
      />
      <GeneralButton
        width={`271px`}
        font={`ubuntu`}
        height={`42px`}
        radius={"4px"}
        title={`LEARNERS AND STUDENTS`}
        color={"logogreen"}
        textcolor={"white"}
        link={"/#"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[31px] py-[10px] self-center mt-[12px] `}
      />
    </div>
  );
}

function TeacherandSchool() {
  return (
    <div className="flex-col flex gap-[25px] ">
      <p className="font-ubuntu self-center leading-[26px] w-[335px] min-[490px]:w-[390px] font-medium text-[22px] ">
        Transform your classroom and captivate every student with the right{" "}
        <span className="w-[159px] h-[32px] inline-block p-[0px] text-white text-center bg-logogreen ">
          tools & support
        </span>
      </p>
      <p className="font-mont leading-[22px] w-[335px] font-normal text-[14px] text-darkgreen text-left ">
        From lesson notes, to learning activities and lesson plans we equip you
        with the resources to create impactful experiences.
      </p>
      <GeneralButton
        width={`271px`}
        font={`ubuntu`}
        height={`42px`}
        radius={"4px"}
        title={`TEACHERS AND SCHOOLS`}
        color={"logogreen"}
        textcolor={"white"}
        link={"/#"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[31px] py-[10px] self-center mt-[12px] `}
      />
    </div>
  );
}

function ParentandGuardian() {
  return (
    <div className="flex-col flex gap-[25px] ">
      <p className="font-ubuntu  leading-[26px] w-[315px] font-medium text-[22px] ">
        Get{" "}
        <span className="w-[189px] h-[32px] inline-block p-[0px] text-white text-center bg-logogreen ">
          tips and material
        </span>{" "}
        to support your child learning and growth.
      </p>
      <p className="font-mont leading-[22px] w-[305px] min-[490px]:w-[390px] font-normal text-[14px] text-darkgreen text-left ">
        We give you resources to help your child development in both academic
        and essential life skills
      </p>
      <GeneralButton
        width={`271px`}
        font={`ubuntu`}
        height={`42px`}
        radius={"4px"}
        title={`PARENTS AND GUARDIANS`}
        color={"logogreen"}
        textcolor={"white"}
        link={"/#"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[21px] py-[10px] self-center mt-[12px] `}
      />
    </div>
  );
}

export {
  ContactTutor,
  LearnersandStudent,
  TeacherandSchool,
  ParentandGuardian,
  Card1
};
