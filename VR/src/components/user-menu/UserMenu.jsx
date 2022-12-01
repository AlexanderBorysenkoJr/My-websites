import React from "react";
import "./userMenu.css";
import { USERMENU } from "./userMenu";
import { TopArrow } from "../icons";

export const UserMenu = ({ handleCloseUserMenu, handleLogOut }) => {
  const userName = (JSON.parse(localStorage.getItem("User"))).UserName || "";

  return (
    <div className="user-menu slide-in-top">
      <ul className="user-menu-list">
        <li className="user-menu__list-item">
          <button className="user-menu__btn user-menu-list__user-name" href=".">
            Hi, {userName}
          </button>
        </li>
        {USERMENU.map((usermenu) => {
          return (
            <li key={usermenu.id} className="user-menu__list-item">
              <button className="user-menu__btn" href=".">
                {usermenu.menuList}
              </button>
            </li>
          );
        })}
        <li className="user-menu__list-item">
          <button onClick={handleLogOut} className="user-menu__btn">
            Log out
          </button>
        </li>
      </ul>
      <img
        onClick={handleCloseUserMenu}
        className="user-menu__img"
        src={TopArrow}
        alt="Top arrow"
      />
    </div>
  );
};
