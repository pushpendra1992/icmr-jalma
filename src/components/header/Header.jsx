import React from "react";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";
import { useMediaQuery } from "react-responsive";
import SideNavbar from "../navbar/SideNavbar";

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <div className={styles.container}>
      {isTabletOrMobile ? <SideNavbar /> : <Navbar />}
    </div>
  );
};

export default Header;
