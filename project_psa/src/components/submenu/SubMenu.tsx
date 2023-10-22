import React from "react";
import { Link } from "react-router-dom";
import styles from "./SubMenu.module.scss";

interface SubMenuProps {
  items: Array<{ label: string; to: string }>;
}

const SubMenu: React.FC<SubMenuProps> = ({ items }) => {
  return (
    <div className={styles.subMenu}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
