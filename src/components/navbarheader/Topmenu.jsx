import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Topmenu.module.css";
import dashRemover from "../util/dashRemover";

const menuItems = [
  { menu: "about", submenu: ["we-are-there-for-you", "our-team", "join-team"] },
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
  { menu: "training", submenu: [] },
  {
    menu: "information",
    submenu: ["document-and-client-area", "appeal-and-complaints"],
  },
  { menu: "media", submenu: [] },
  {
    menu: "verify",
    submenu: [
      "scope-certificate",
      "transaction-certificate",
      "ISO-certificate",
    ],
  },
  { menu: "contact-us", submenu: [] },
];

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation(); // Access the current URL

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  const handleSubmenuClick = () => {
    setOpenIndex(null);
  };

  // Function to check if the current path matches any submenu
  const isMenuActive = (menu, submenu) => {
    const mainPath = `/${menu}`;
    const isMainActive = location.pathname === mainPath;

    // Check if any of the submenu paths are active
    const isSubmenuActive = submenu.some(
      (sub) => location.pathname === `/${menu}/${sub}`
    );

    return isMainActive || isSubmenuActive;
  };

  return (
    <nav className="navbar">
      <div className={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={styles.menuItem}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Parent menu item */}
            <NavLink
              to={item.submenu.length > 0 ? null : `/${item.menu}`} // No link for menus with submenus
              className={
                isMenuActive(item.menu, item.submenu)
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
              end
            >
              {dashRemover(item.menu)}
              {item.submenu.length > 0 && (
                <IoIosArrowDown className={styles.arrowIcon} />
              )}
            </NavLink>

            {/* Submenu */}
            {item.submenu.length > 0 && openIndex === index && (
              <div className={styles.submenu}>
                {item.submenu.map((sub, idx) => (
                  <NavLink
                    key={idx}
                    to={`/${item.menu}/${sub}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.submenuLink} ${styles.activeSubmenu}`
                        : styles.submenuLink
                    }
                    onClick={handleSubmenuClick}
                  >
                    {dashRemover(sub)}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
// import styles from "./Topmenu.module.css";
// import dashRemover from "../util/dashRemover";

// const menuItems = [
//   {
//     menu: "about",
//     submenu: ["we-are-there-for-you", "our-team", "join-team"],
//   },
//   {
//     menu: "our-services",
//     submenu: [
//       "organic-certification",
//       "textile-and-fashion",
//       "commodity-inspection",
//       "management-system-certification",
//       "validation-&-verification-applied",
//     ],
//   },
//   {
//     menu: "training",
//     submenu: [],
//   },
//   {
//     menu: "information",
//     submenu: ["document-and-client-area", "appeal-and-complaints"],
//   },
//   {
//     menu: "media",
//     submenu: [],
//   },
//   {
//     menu: "verify",
//     submenu: [
//       "scope-certificate",
//       "transaction-certificate",
//       "ISO-certificate",
//     ],
//   },
//   {
//     menu: "contact-us",
//     submenu: [],
//   },
// ];

// const Navbar = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setOpenIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setOpenIndex(null);
//   };
//   const handleSubmenuClick = () => {
//     setOpenIndex(null);
//   };

//   return (
//     <nav className="navbar">
//       <div className={styles.menuContainer}>
//         {menuItems.map((item, index) => (
//           <div
//             key={index}
//             className={styles.menuItem}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <NavLink
//               to={!item.submenu.length > 0 && `/${item.menu}`}
//               className={styles.navLink}
//               activeClassName={styles.actve}
//             >
//               {dashRemover(item.menu)}
//               {item.submenu.length > 0 && (
//                 <IoIosArrowDown className={styles.arrowIcon} />
//               )}
//             </NavLink>

//             {item.submenu.length > 0 && openIndex === index && (
//               <div className={styles.submenu}>
//                 {item.submenu.map((sub, idx) => (
//                   <NavLink
//                     key={idx}
//                     to={`/${item.menu}/${sub}`}
//                     className={styles.submenuLink}
//                     onClick={handleSubmenuClick}
//                   >
//                     {dashRemover(sub)}
//                   </NavLink>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
