import assignment from "../../assets/icons/assignment.svg";
import bookshelf from "../../assets/icons/bookshelf.svg";
import grades from "../../assets/icons/grades.svg";
import videoconference from "../../assets/icons/videoconference.svg";
import { GeneralButton } from "../Buttons/generalbuttontemplate";

function Grades() {
  return (
    <div
      onClick={() => {
        window.location.href = "/examprep";
      }}
      className="flex-col flex w-fit p-[5px] items-center gap-[15px] "
    >
      <img className=" w-[50px] h-[50px] " src={grades} alt="grades icon" />
      <p className="font-mont font-bold leading-[20px] text-[13px] text-darkgreen ">
        Exam Prep
      </p>
    </div>
  );
}

function VideoConference() {
  return (
    <div
      onClick={() => {
        window.location.href = "/updatecourse ";
      }}
      className="flex-col flex w-fit p-[5px] items-center gap-[15px] "
    >
      <img
        className=" w-[50px] h-[50px] "
        src={videoconference}
        alt="online video class icon"
      />
      <p className="font-mont font-bold leading-[20px] text-[13px] text-darkgreen ">
        Take Class
      </p>
    </div>
  );
}

function Bookshelve() {
  return (
    <div
      onClick={() => {
        window.location.href = "/studyMaterial";
      }}
      className="flex-col flex w-fit p-[5px] items-center gap-[15px] "
    >
      <img
        className=" w-[50px] h-[50px] "
        src={bookshelf}
        alt="online resource icon"
      />
      <p className="font-mont w-[66px] text-center font-bold leading-[20px] text-[13px] text-darkgreen ">
        Study Materials
      </p>
    </div>
  );
}

function Assignement() {
  return (
    <div
      onClick={() => {
        window.location.href = "/assignments";
      }}
      className="flex-col flex w-fit p-[5px] items-center gap-[15px] "
    >
      <img
        className=" w-[50px] h-[50px] "
        src={assignment}
        alt="assignment icon"
      />
      <p className="font-mont w-[98px] text-center font-bold leading-[20px] text-[13px] text-darkgreen ">
        Submit Assignements
      </p>
    </div>
  );
}

function GradesDesktop() {
  return (
    <div className="flex-col flex gap-[47px] w-fit px-[13px] py-[18px] border-[1px] border-logogreen items-center ">
      <Grades />
      <p className="m-0 font-ubuntu text-center w-[230px] font-regular text-[14px] ">
        Unlock Your full potential and Ace your desired exam with our
        comprehensive Past Questions and Effective preparation strategies
      </p>
      <GeneralButton
        width={`259px`}
        font={`ubuntu`}
        height={`53px`}
        radius={"3px"}
        title={`Take a practice question`}
        color={"darkgreen"}
        textcolor={"white"}
        link={"/examprep"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[28px] py-[10px] self-center mb-[10px] `}
      />
    </div>
  );
}

function VideoConferenceDesktop() {
  return (
    <div className="flex-col flex gap-[47px] w-fit px-[13px] py-[18px] border-[1px] border-logogreen items-center ">
      <VideoConference />
      <p className="m-0 font-ubuntu text-center w-[230px] font-regular text-[14px] ">
        Take Live Online Classes wih our expert tutors via zoom and achieve
        academic success!
      </p>
      <GeneralButton
        width={`259px`}
        font={`ubuntu`}
        height={`53px`}
        radius={"3px"}
        title={`Start class now`}
        color={"darkgreen"}
        textcolor={"white"}
        link={"/updatecourse"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[28px] py-[10px] self-center mb-[10px] `}
      />
    </div>
  );
}

function BookshelveDesktop() {
  return (
    <div className="flex-col flex gap-[47px] w-fit px-[13px] py-[18px] border-[1px] border-logogreen items-center ">
      <Bookshelve />
      <p className="m-0 font-ubuntu text-center w-[230px] font-regular text-[14px] ">
        Access comprehensive study materials, Notes, and Resources to boost your
        Academic Performance!
      </p>
      <GeneralButton
        width={`259px`}
        font={`ubuntu`}
        height={`53px`}
        radius={"3px"}
        title={`Access our study material`}
        color={"darkgreen"}
        textcolor={"white"}
        link={"/studyMaterial"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[28px] py-[10px] self-center mb-[10px] `}
      />
    </div>
  );
}

function AssignementDesktop() {
  return (
    <div className="flex-col flex gap-[47px] w-fit px-[4px] py-[18px] border-[1px] border-logogreen items-center ">
      <Assignement />
      <p className="m-0 font-ubuntu text-center w-[230px] font-regular text-[14px] ">
        Submit Your Assignments securely and Get Feedback from your Tutors to
        Enhance Your Learning!
      </p>
      <GeneralButton
        width={`259px`}
        font={`ubuntu`}
        height={`53px`}
        radius={"3px"}
        title={`Submit Assignment`}
        color={"darkgreen"}
        textcolor={"white"}
        link={"/assignments"}
        textsize={"14px"}
        fontstyle={`font-bold`}
        external={`px-[28px] py-[10px] self-center mb-[10px] `}
      />
    </div>
  );
}

export {
  Grades,
  Bookshelve,
  Assignement,
  VideoConference,
  GradesDesktop,
  VideoConferenceDesktop,
  AssignementDesktop,
  BookshelveDesktop,
};
