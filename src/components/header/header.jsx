import HeaderDesktop from "./headerdesktop";
import {HeaderMobile} from "./headermobile";
import { useState,useEffect } from "react";

function MainHeader() {
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

  return (
    <>
      {isDesktop ? <HeaderDesktop /> : <HeaderMobile  />}
    </>
  );
}

export default MainHeader;