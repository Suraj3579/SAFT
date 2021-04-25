import React, { useState } from "react";
import "./style.css";

const DropdownMenu = (props) => {
  return (
    <div className="headerDropdownContainer">
      {props.menu}
      <div className="dropdown">
        <div className="upArrow"></div>
        {props.firstMenu}
        <ul className="headerDropdownMenu">
          {props.menus &&
            props.menus.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
