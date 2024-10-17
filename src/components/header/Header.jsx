import React from "react";
import Important from "../important/Important";
import Navbar from "../navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import SideNavbar from "../navbar/SideNavbar";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <div>
      <Important />
      {isTabletOrMobile ? <SideNavbar /> : <Navbar />}
    </div>
  );
};

export default Header;
