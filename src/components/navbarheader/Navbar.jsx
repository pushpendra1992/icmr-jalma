import React from "react";
import logo from "../assets/Images/gscilogo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Topmenu from "./Topmenu";
import Sidemenu from "./Sidemenu";

function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.imageContainer}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {/*For larger screens*/}
        {!isTabletOrMobile && (
          <div className={styles.menuContainer}>
            <Topmenu />
          </div>
        )}
        {/* For tablet/mobile */}
        {isTabletOrMobile && <Sidemenu />}
      </div>
    </div>
  );
}

export default Navbar;
