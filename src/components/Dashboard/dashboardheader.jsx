import profilepic from "../../assets/profilepic.png";
import mission from "../../assets/mission.svg";

function DashboardHeader() {
  return (
    <nav className="flex items-center w-fit pl-[28px] pr-[30px] pt-[26px] pb-[30px]  bg-darkgreen ">
      <div className="flex w-[326px] gap-[50px] p-0 m-0">
        {/*The image here will be gotten from the server so the api to fectch the image should be added to the src */}
        <img
          className="w-[91px] h-[91px] "
          src={profilepic}
          alt="profile picture"
        />
        <div className="flex-col items-start flex gap-[0px] p-0 m-0 ">
          {/* The name should be fetched from the server*/}
          <p className="font-ubuntu font-bold text-white text-[20px] leading-[43px] ">
            Welcome Ejike!
          </p>
          {/* This part should remain dummy for now */}
          <p className="font-mont font-bold text-white text-[13px] leading-[33px] ">
            view profile | Edit profile
          </p>
        </div>
      </div>
    </nav>
  );
}


function DashboardHeaderDesktop() {
    return(
        <nav className="flex w-screen pl-[28px] h-[147px] pr-[64px] items-center justify-between   bg-darkgreen ">
      <div className="flex w-[326px] gap-[50px] p-0 m-0">
        {/*The image here will be gotten from the server so the api to fectch the image should be added to the src */}
        <img
          className="w-[91px] h-[91px] "
          src={profilepic}
          alt="profile picture"
        />
        <div className="flex-col items-start flex gap-[0px] p-0 m-0 ">
          {/* The name should be fetched from the server*/}
          <p className="font-ubuntu font-bold text-white text-[20px] leading-[43px] ">
            Welcome Ejike!
          </p>
          {/* This part should remain dummy for now */}
          <p className="font-mont font-bold text-white text-[13px] leading-[33px] ">
            view profile | Edit profile
          </p>
        </div>
      </div>
      <div className="w-[333px] h-[75.77px] ">
        <img src={mission} alt="sismo vision" />
      </div>
    </nav>
    )
}


export{DashboardHeader,DashboardHeaderDesktop}
