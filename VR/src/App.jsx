import React from "react";
import { BurgerMenu, Header, Menu } from "./components";
import { GamesPage, HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  const [isDialogVisible, setisDialogVisible] = React.useState(false);
  const [isBurgerIconVisible, setisBurgerIconVisible] = React.useState(
    window.innerWidth <= 576
  );

  const handleResizeWindow = React.useCallback(() => {
    if (window.innerWidth <= 576 && !isBurgerIconVisible) {
      return setisBurgerIconVisible(true);
    }
    if (window.innerWidth > 576 && isBurgerIconVisible) {
      return setisBurgerIconVisible(false);
    }
  }, [isBurgerIconVisible]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [handleResizeWindow]);

  const CheckUserStatus = () => {
    if (localStorage.getItem("User")) {
      return true;
    } else {
      return false;
    }
  };
  const [isAuth, setIsAuth] = React.useState(CheckUserStatus());

  const handleCloseDialog = () => {
    setisDialogVisible(false);
  };

  const [isUserMenuVisible, setisUserMenuVisible] = React.useState(false);

  const handleCloseUserMenu = () => {
    setisUserMenuVisible(false);
  };

  const handleOpenSignInDialog = () => {
    setisDialogVisible(true);
  };

  const handleLogOut = () => {
    delete localStorage.User;
    setIsAuth(false);
    setisUserMenuVisible(false);
  };

  return (
    <>
      <div className="narrow-container">
        <header className="header">
          <Header
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            handleCloseDialog={handleCloseDialog}
            isDialogVisible={isDialogVisible}
          />
          {!isBurgerIconVisible ? (
            <Menu
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              handleOpenSignInDialog={handleOpenSignInDialog}
              isDialogVisible={isDialogVisible}
              setisDialogVisible={setisDialogVisible}
              handleCloseDialog={handleCloseDialog}
              setisUserMenuVisible={setisUserMenuVisible}
              isUserMenuVisible={isUserMenuVisible}
              handleCloseUserMenu={handleCloseUserMenu}
              handleLogOut={handleLogOut}
            />
          ) : (
            <BurgerMenu handleLogOut={handleLogOut} handleOpenSignInDialog={handleOpenSignInDialog} isDialogVisible={isDialogVisible} isAuth={isAuth}/>
          )}
        </header>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="games" element={<GamesPage isAuth={isAuth} />} />
        </Routes>
      </main>
    </>
  );
};
