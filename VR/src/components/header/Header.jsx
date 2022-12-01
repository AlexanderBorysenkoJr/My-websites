import React from "react";
import "./header.css";
import { Logo } from "../icons";
import { NavLink } from "react-router-dom";
import { SignIn } from "../dialogs/sign-in";

export const Header = ({isDialogVisible, handleCloseDialog, setIsAuth, isAuth}) => {
  return (
    <div>
      <NavLink className="logo" to="/">
        <img className="logo__img" src={Logo} alt="logo" />
      </NavLink>
      {isDialogVisible && <SignIn handleCloseDialog={handleCloseDialog} setIsAuth={setIsAuth} isAuth={isAuth}/>}
    </div>
  );
};
