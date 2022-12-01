import React from "react";
import { DialogWrapper } from "../wrapper";
import { USERS } from "./users";
import "./signIn.css";

export const SignIn = ({ handleCloseDialog, setIsAuth}) => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmitSignInDialog = (e) => {
    e.preventDefault();
    USERS.forEach((u) => {
      if (name === u.userName && password === u.userPassword) {
        const user = {
          UserName: name,
          UserPassword: password,
          UserAvatar: u.userAvatar,
        };
        localStorage.setItem("User", JSON.stringify(user));
        setIsAuth(true);
        handleCloseDialog();
      }
    });
  };

  return (
    <DialogWrapper title="Autorization" handleCloseDialog={handleCloseDialog}>
      <form
        className="sign-in-form"
        action=""
        method="post"
        onSubmit={handleSubmitSignInDialog}
      >
        <h3 className="sign-in-form__title">Sign in</h3>
        <input
          className="sign-in-form__input"
          name="name"
          type="text"
          value={name}
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="sign-in-form__input"
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input className="sign-in-form__btn" type="submit" value="Sign in" />
      </form>
    </DialogWrapper>
  );
};
