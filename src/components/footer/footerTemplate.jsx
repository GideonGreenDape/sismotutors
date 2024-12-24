import FooterMobile from "./mobileview/footerMobile";
import FooterDesktop from "./desktopview/footerdesktop";
import FooterTablet from "./tabview/footerTab";
import React, {useState, useEffect} from "react";

function Footer() {
  const [view, setView] = useState(getView(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setView(getView(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getView(width) {
    if (width < 600) {
      return 'mobile';
    } else if (width >= 600 && width <= 1000) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }

  return (
    <div>
      {/* Other components */}
      {view === 'mobile' && <FooterMobile />}
      {view === 'tablet' && <FooterTablet />}
      {view === 'desktop' && <FooterDesktop />}
    </div>
  );
}

export default Footer;
