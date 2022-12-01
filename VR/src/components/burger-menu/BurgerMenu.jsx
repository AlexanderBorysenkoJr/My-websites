import React from "react";
import { NavLink } from "react-router-dom";

import "./burgerMenu.css";
import { MENU } from "../menu/menu";
import { BurgerMenuIcon, Close } from "../icons";

export const BurgerMenu = ({
  handleOpenSignInDialog,
  isDialogVisible,
  isAuth,
  handleLogOut
}) => {
  const [burgerMenuIsVisible, setburgerMenuIsVisible] = React.useState(false);

  const handleOpenBurgerMenu = () => {
    setburgerMenuIsVisible(true);
  };

  const handleCloseBurgerMenu = () => {
    setburgerMenuIsVisible(false);
  };
  let userAvatar = "";
  let userName ="";
  if (isAuth) {
    userAvatar = JSON.parse(localStorage.getItem("User")).UserAvatar;
    userName = (JSON.parse(localStorage.getItem("User"))).UserName;
  }

  return (
    <div>
      <img
        className="burger-menu-icon"
        src={BurgerMenuIcon}
        alt="Burger menu"
        onClick={handleOpenBurgerMenu}
      />
      {burgerMenuIsVisible && !isDialogVisible && (
        <div className="burger-menu slide-in-top">
          <ul className="burger-menu-list">
            {isAuth && (
              <li className="burger-menu-authed__list-item burger-menu-authed__list-item-user">
                <img
                  className="burger-menu-authed__user-img"
                  src={userAvatar}
                  alt="User"
                />
                <p className="burger-menu-authed__user-name"> Hi, {userName}</p>
              </li>
            )}

            {MENU.map((menu) => {
              return (
                <li className="burger-menu__list-item" key={menu.id}>
                  <NavLink
                    to={menu.menuLink}
                    href="./index.html"
                    datacategory={menu.dataCategory}
                    className={({ isActive }) =>
                      isActive
                        ? "burger-menu__link burger-menu__link--active"
                        : "burger-menu__link"
                    }
                  >
                    {menu.menuList}
                  </NavLink>
                </li>
              );
            })}
            {!isAuth && (            <button
              className="burger-menu__btn header-sign-in"
              onClick={handleOpenSignInDialog}
            >
              Sign in
            </button>)}
            {isAuth && (
            <button className="burger-menu-authed__btn btn-log-out" onClick={handleLogOut}>Sign out</button>)}
          </ul>
          <img
            className="burger-menu__img"
            src={Close}
            alt="Close"
            onClick={handleCloseBurgerMenu}
          />
        </div>
      )}
    </div>
  );
};
