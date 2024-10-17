import React from "react";
import styles from "./Sidemenu.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import dashRemover from "../util/dashRemover";

const menuItems = [
  {
    menu: "about",
    submenu: ["we-are-there-for-you", "our-team", "join-team"],
  },
  {
    menu: "our-services",
    submenu: [
      "organic-certification",
      "textile-and-fashion",
      "commodity-inspection",
      "management-system-certification",
      "validation-&-verification-applied",
    ],
  },
  {
    menu: "training",
    submenu: [],
  },
  {
    menu: "information",
    submenu: ["document-and-client-area", "appeal-and-complaints"],
  },
  {
    menu: "media",
    submenu: [],
  },
  {
    menu: "verify",
    submenu: [
      "scope-certificate",
      "transaction-certificate",
      "ISO-certificate",
    ],
  },
  {
    menu: "contact-us",
    submenu: [],
  },
];

function Navbar() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const handleOpen = () => {
    setIsSidenavOpen(true);
  };
  const handleClose = () => {
    setIsSidenavOpen(false);
  };

  return (
    <div className={styles.navItemTypo}>
      <div onClick={handleOpen} className={styles.hamburger}>
        <GiHamburgerMenu />
      </div>

      <div className={`${styles.sidenav} ${isSidenavOpen ? styles.open : ""}`}>
        <div onClick={handleClose} className={styles.cross}>
          <RxCross2 />
        </div>

        <div className={styles.navItemsContainer}>
          {menuItems.map((ele, index) => (
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
                        <div className={styles.sideSubMenu} key={idx}>
                          <NavLink to={`/${ele.menu}/${e}`}>
                            <span
                              className={styles.sideSubMenu}
                              onClick={handleClose}
                            >
                              {dashRemover(e)}
                            </span>
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink to={`/${ele.menu}`}>
                    <span className={styles.sideMainMenu} onClick={handleClose}>
                      {dashRemover(ele.menu)}
                    </span>
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
