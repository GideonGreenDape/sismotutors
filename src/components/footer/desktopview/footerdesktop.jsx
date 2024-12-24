import {
  AboutSismoDesktop,
  ContactSismo,
  SismoLinks,
  SimsoCourses,
  SismoMissionDesktop,
  SismoPolicyDesktop
} from "../footer";

function FooterDesktop() {
  return (
    <footer className="px-[6px] h-screen  pt-[55px] pb-[30px] flex-col flex items-center gap-[39px] bg-darkgreen ">
      <div className="w-screen px-[8%] ">
        <AboutSismoDesktop />
      </div>
      <div className="w-screen px-[8%] ">
        <SismoMissionDesktop />
      </div>
      <div className="px-[8%] flex mt-[54px] w-full justify-between ">
        <SismoLinks />
        <ContactSismo />
        <SimsoCourses />
        <SismoPolicyDesktop />
      </div>
    </footer>
  );
}

export default FooterDesktop;
