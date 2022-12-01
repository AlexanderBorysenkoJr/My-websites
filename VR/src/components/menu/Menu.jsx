import React from "react";
import "./menu.css";
import { MENU } from "./menu";
import { UserMenu } from "../user-menu";
import { NavLink } from "react-router-dom";

export const Menu = ({
  isAuth,
  setIsAuth,
  handleOpenSignInDialog,
  isDialogVisible,
  setisUserMenuVisible,
  isUserMenuVisible,
  handleCloseUserMenu,
  handleLogOut
}) => {
  let userAvatar = "";
  if (isAuth) {
    userAvatar = JSON.parse(localStorage.getItem("User")).UserAvatar;
  }

  const handleOpenUserMenu = () => {
    setisUserMenuVisible((prev) => !prev);
  };


  return (
    <nav className="menu">
      <ul className="menu__list">
        {MENU.map((menu) => {
          return (
            <li key={menu.id} className="menu__list-item">
              <NavLink
                to={menu.menuLink}
                dataсategory={menu.dataCategory}
                className={({ isActive }) =>
                  isActive ? "menu__link menu__link--active" : "menu__link"
                }
              >
                {menu.menuList}
              </NavLink>
            </li>
          );
        })}
        {!isAuth && (
          <li className="menu__list-item">
            <button
              className="menu__btn header-sign-in"
              onClick={handleOpenSignInDialog}
            >
              Sign in
            </button>
          </li>
        )}
        {isAuth && (
          <li className="menu__list-item">
            <img
              onClick={handleOpenUserMenu}
              className="menu__img"
              src={userAvatar}
              alt="User"
            />
          </li>
        )}
      </ul>
      {isUserMenuVisible && (
        <UserMenu
          isDialogVisible={isDialogVisible}
          handleCloseUserMenu={handleCloseUserMenu}
          handleLogOut={handleLogOut}
        />
      )}
    </nav>
  );
};
