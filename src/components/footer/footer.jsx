// To update the year dynamically, I used the Date object to get the current year and store it in a variable called currentYear. I then used the currentYear variable to update the year in the footer. This way, the year will always be updated to the current year.
const currentYear = new Date().getFullYear();


function AboutSismoText() {
  return (
    <p className="font-ubuntu text-[14px] text-center  text-white ">
     Sismo Tutors is a dedicated ed-tech company specializing in personalized
     one-on-one coaching in academic subjects, arts, practical life skills, and 
     modern technology skills for students.
    </p>
  );
}

function SismoMission() {
  return (
    <p className="font-ubuntu text-[14px] min-[0px]:text-center min-[540px]:text-left text-white ">
      Our mission is to provide quality and personalized learning, equipping
      students with both academic knowledge and essential skills for the future. 
    </p>
  );
}


function SismoMissionDesktop() {
    return(
        <p className="font-ubuntu text-[14px] font-thin text-left text-white ">
      Our mission is to provide quality and personalized learning, equipping
      students with both academic knowledge and essential skills for the future. 
      We strive to create an inclusive and supportive educational environment that 
      fosters growth, confidence, and a passion for lifelong learning, ensuring 
      that every student reaches their full potential.
    </p>
    )
}


function SismoLinks() {
    return(
        <nav className=" flex-col flex gap-[10px]" >
            <p className="font-ubuntu font-medium  min-[0px]:text-[14px] min-[1000px]:text-[15px] text-medium text-white">About</p>
            <ul className="flex-col flex gap-[4px]  ">
                <li id={1} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">impact</li>
                <li id={2} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Our team</li>
                <li id={3} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Our content specialist</li>
                <li id={4} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Our leadership</li>
                <li id={5} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Careers</li>
            </ul>
        </nav>
    )
}


function SimsoCourses() {
    return(
        <nav className="flex-col flex gap-[10px]" >
            <p className="font-ubuntu font-medium min-[0px]:text-[14px] min-[1000px]:text-[15px] text-medium text-white">Courses</p>
            <ul className="flex-col flex gap-[4px]  ">
                <li id={1} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Math: pre-k-8th grade</li>
                <li id={2} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Math: Get ready courses</li>
                <li id={3} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Math: high school</li>
                <li id={4} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Test preps</li>
                <li id={5} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Science</li>
                <li id={6} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Computing</li>
                <li id={7} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Art & humanities</li>
                <li id={8} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Economics</li>
                <li id={9} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Reading & language arts</li>
                <li id={10} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Life skills</li>
            </ul>
        </nav>
    )
}


function ContactSismo() {
    return(
        <nav className="flex-col flex gap-[10px]" >
            <p className="font-ubuntu font-medium min-[0px]:text-[14px] min-[1000px]:text-[15px] text-medium text-white ">Contact center</p>
            <ul className="flex-col flex gap-[4px]  ">
                <li id={1} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Help center</li>
                <li id={2} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Support community</li>
                <li id={3} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">cookies preferences</li>
            </ul>
        </nav>
    )
}

function AboutSismoDesktop() {
    return(
        <p className="font-ubuntu text-[14px] font-thin text-left text-white ">
     Sismo Tutors is a dedicated ed-tech company specializing in personalized
     one-on-one coaching in academic subjects, arts, practical life skills, and 
     modern technology skills for students.Our experienced tutors are committed 
     to providing high-quality education tailored to each student's unique needs, 
     helping them achieve their academic goals and develop essential skills for the 
     future. We believe in fostering a supportive and engaging learning environment 
     that encourages curiosity, creativity, and a lifelong love of learning.
    </p>
    )
}


function SismoPolicy() {
    return(
        <nav className="flex-col flex items-center gap-[3px]" >
            <p className="font-ubuntu font-medium min-[0px]:text-[14px] min-[1000px]:text-[15px] text-medium text-white "> Copyright &copy; <span className="text-[12px] ">{currentYear}</span> Sismo Tutors</p>
            <ul className="flex-col flex gap-[2px]  ">
                <li id={1} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Terms of use</li>
                <li id={2} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Privacy Policy</li>
                <li id={3} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Cookies Notice</li>
            </ul>
        </nav>
    )
}


function SismoPolicyDesktop() {
    return(
           <ul className="flex-col flex gap-[4px]  ">
                <li id={1} className="font-ubuntu font-medium mb-[5px] min-[0px]:text-[14px] min-[1000px]:text-[15px] text-white">Terms of use</li>
                <li id={2} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Privacy Policy</li>
                <li id={3} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Cookies Notice</li>
                <li id={4} className="font-ubuntu min-[0px]:text-[13px] min-[1000px]:text-[14px]  text-white">Copyright &copy; <span className="text-[12px] ">{currentYear}</span> Sismo Tutors</li>
            </ul>
    )
}


export {AboutSismoText,SismoLinks,
    SismoPolicy,SismoMissionDesktop,
    AboutSismoDesktop,SimsoCourses,
    ContactSismo,SismoMission,
    SismoPolicyDesktop}