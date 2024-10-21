import React from "react";
import styles from "./Newnav.module.css";
import logo from "../../images/images01/mobileLogo.png";
import navbarData from "../../data/navbarData";
import { useState, useRef, useEffect } from "react";
import dashRemover from "../../util/dashRemover";

const Newnav = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeLink, setActiveLink] = useState(null);
  const navbarRef = useRef(null);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
    setActiveLink(index);
  };

  const handleSubmenuClick = () => {
    setOpenMenu(null);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.navbarContainer}>
        {navbarData.map((ele, index) => {
          console.log(index);
          return (
            <div key={index}>
              <div
                className={styles.navbarItems}
                onClick={() => handleMenuClick(index)}
              >
                <div className={styles.navbarTypoContainer}>
                  <span
                    className={
                      activeLink === index
                        ? `${styles.navbarTypo} ${styles.active}`
                        : styles.navbarTypo
                    }
                  >
                    {dashRemover(ele.menu)}
                  </span>
                </div>
                {ele.submenu.length > 0 && (
                  <div
                    className={
                      openMenu === index
                        ? `${styles.submenuContainer} ${styles.open}`
                        : styles.close
                    }
                  >
                    {ele.submenu.map((item, i) => {
                      return (
                        <div
                          className={styles.submenuItems}
                          key={i}
                          onClick={handleSubmenuClick}
                        >
                          <span className={styles.subnavTypo}>
                            {dashRemover(item)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newnav;
