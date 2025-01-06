// localstorage of webtoken will be implemented here once
// backend is ready
import sismoicon from "../assets/icons/sismoicon.png";
import { useState, useEffect } from "react";
import MainHeader from "../components/header/header";
import homepagebanner from "../assets/homepagebanner.svg";
import homepagebanner2 from "../assets/homepagebanner2.png";
import { Link } from "react-router-dom";
import {
  ContactTutor,
  LearnersandStudent,
  TeacherandSchool,
  ParentandGuardian,
  Card1,
} from "../components/cards/card";
import ernest from "../assets/ernest.png";
import whysismo1 from "../assets/whysismo1.png"
import whysismo2 from "../assets/whysismo2.png"
import whysismo3 from "../assets/whysismo3.png"
import whysismo4 from "../assets/whysismo4.png"
import whysismo5 from "../assets/whysismo5.png"


import {
  JoinSismoTutor,
  WhySismoTemplates,
} from "../components/whySismo/whysismo";
import {
  Conversion,
  GettingHelp,
  ConversionTwo,
} from "../components/uncategorized/conversiontemplate";
import Footer from "../components/footer/footerTemplate";

import {
  BlogCardTemplate,
  ExploreBlog,
} from "../components/BlogCards/blogtemplate";

function Homepage() {
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
  return <>{isDesktop ? <DesktopAndTabSignUp /> : <MobileSignUp />}</>;
}

function MobileSignUp() {
  return (
    <>
      <MainHeader />
      <div className="flex-col flex items-center mt-[78px] bg-headerash ">
        <img className=" " src={homepagebanner2} alt="homepage banner" />
        <div className="self-start mt-[40px] pl-[6%]  ">
          <Card1 />
        </div>
        <div className="self-start mt-[45px] pl-[6%]  ">
          <ContactTutor />
        </div>
        <div className="self-start mt-[65px] pl-[6%]  ">
          <LearnersandStudent />
        </div>
        <div className="self-start mt-[65px] pl-[5%]  ">
          <TeacherandSchool />
        </div>
        <div className="self-start mt-[65px] pl-[5%]  ">
          <ParentandGuardian />
        </div>
        <div className="self-start mt-[65px] pl-[5%]  ">
          <ExploreBlog />
        </div>
        <div className="mt-[65px] pl-[5%] ">
          <BlogCardTemplate image={ernest} author={'Lotachukwu Ernest'} postTitle={'Real Life Application Of Fourier Series And How You Can Apply This In Your Daily Activities'} />
        </div>
        <div>
          <WhySismoTemplates image={whysismo1} title={ `Learn Your Way: In-Person 
or Online`} body={`choose the learning style that fits
 you best—whether in-person or online. 
Our expert tutors are ready to guide you, 
wherever you are. Flexibility and personalized 
education, all on your terms. `} />
        </div>
        <div>
          <WhySismoTemplates image={whysismo2} title={ `Personalized Learning`} body={`your learning experience is tailored just for you. 
Our personalized approach ensures that every session
 is designed to meet your unique needs, helping you 
achieve your goals at your own pace. Discover a 
learning path that’s as individual as you are. `} />
        </div>
        <div>
          <WhySismoTemplates image={whysismo3} title={ `Tools to empower teachers`} body={`From lesson notes to study materials and books, 
we equip educators with the resources to create
 impactful learning experiences. Empower your 
teaching with the support you deserve. `} />
        </div>
        <div>
          <WhySismoTemplates image={whysismo4} title={ `Mentorship Programs`} body={`Guidance and mentorship to nurture students
growth beyond the classroom.`} />
        </div>
        <div>
          <WhySismoTemplates image={whysismo5} title={ `Student Resource`} body={`Flashcards for quick revision of key concepts,
comprehensive notes and engaging tutorial 
videos across of various fields`} />
        </div>
        <div>
          <JoinSismoTutor />
        </div>
        <div className="mt-[120px] ">
          <Footer />
        </div>
      </div>
    </>
  );
}

function DesktopAndTabSignUp() {
  return (
    <>
      <MainHeader />
      <div className="flex-col flex items-center mt-[70px] bg-headerash ">
        <p className="mt-[190px] font-ubuntu font-bold text-[30px] ">Can't load from server use the navigation at the top, contact admin </p>
      </div>
    </>
  );
}

export default Homepage;
