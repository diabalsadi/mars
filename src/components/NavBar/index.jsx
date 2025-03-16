import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import navBarData from "../../data/NavBar/navBar.json";
import MarsLogo from "../../assets/icons/mars-logo.svg";
import DropDownMenu from "@/components/DropDownMenu";

const NavBar = () => {
  const [isHoveredItem, setIsHoveredItem] = useState(false);

  return (
    <div className={styles.navBarContainer}>
      <MarsLogo className={styles.mainLogo} />
      <div className={styles.subItemsWrapper}>
        {navBarData.map((item) => (
          <div
            key={item.title}
            className={styles.navItemWrapper}
            onMouseEnter={() =>
              setIsHoveredItem(item.hasDropDown ? true : false)
            }
            onMouseLeave={() => setIsHoveredItem(false)}
          >
            <div className={styles.itemWrapper}>
              <a className={styles.subNavItem}>{item.title}</a>
              {item.hasDropDown && isHoveredItem && (
                <DropDownMenu items={item.dropDownItems} />
              )}
            </div>
          </div>
        ))}
        <a className={styles.contactBtn}>Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
