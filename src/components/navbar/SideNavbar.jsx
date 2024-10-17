import React from "react";
import styles from "./SideNavbar.module.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import dashRemover from "../../util/dashRemover";
import navbarData from "../../data/navbarData";
import logo from "../../images/images01/mobileLogo.png";

function SideNavbar() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const handleOpen = () => {
    setIsSidenavOpen(true);
  };
  const handleClose = () => {
    setIsSidenavOpen(false);
  };

  const menubar = (
    <div className={styles.navItemTypo}>
      <div onClick={handleOpen} className={styles.hamburger}>
        <GiHamburgerMenu />
      </div>

      <div className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ""}`}>
        <div onClick={handleClose} className={styles.cross}>
          <RxCross2 />
        </div>

        <div className={styles.navItemsContainer}>
          {navbarData.map((ele, index) => (
            <div className={styles.navItem} key={index}>
              <div>
                {ele.submenu.length > 0 ? (
                  <>
                    <span className={styles.sideMainMenu}>
                      {dashRemover(ele.menu)}
                    </span>{" "}
                    <IoIosArrowDown />
                    <div className={styles.dropdownContent}>
                      {ele.submenu.map((e, idx) => (
                        <div
                          className={styles.sideSubMenu}
                          onClick={handleClose}
                          key={idx}
                        >
                          <span className={styles.sideSubMenu}>
                            {dashRemover(e)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <span className={styles.sideMainMenu} onClick={handleClose}>
                    {dashRemover(ele.menu)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" />
      </div>
      {menubar}
    </div>
  );
}

export default SideNavbar;
