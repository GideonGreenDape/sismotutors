import {
  AboutSismoText,
  SismoPolicy,
  ContactSismo,
  SismoLinks,
  SimsoCourses,
  SismoMission,
} from "../footer";

function FooterMobile() {
  return (
    <footer className="px-[6px] pt-[55px] pb-[10px] flex-col flex items-center gap-[39px] bg-darkgreen ">
       {/* The footer width is not defined and is assummed to be the display screen size */}
      <div className="w-full px-[2%] ">
        <AboutSismoText />
      </div>
       {/*The above is the about sismo component wrapped in a div so display of type flex can be carried out on it */}
      <div className="w-full px-[7%] ">
        <SismoMission />
      </div>
       {/*The above is the sismo mission component */}
        {/*Below to carry out appropiate styling in line with the figma design file...please refer to the figma design file the div is used to enclose */}
      <div className="px-[8%] flex mt-[44px] w-full justify-between ">
         {/*The div here takes sismolinks and contactlink component then carry out a display flex of column on them */}
        <div className="flex-col gap-[67px]">
          <div>
            <SismoLinks />
          </div>
          <div className="mt-[67px] ">
            <ContactSismo />
          </div>
        </div>
        <div>
          <SimsoCourses />
        </div>
      </div>
      <div>
        <SismoPolicy />
      </div>
    </footer>
  );
}

export default FooterMobile;
