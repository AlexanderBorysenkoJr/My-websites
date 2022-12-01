import React from "react";
import "./headerGames.css";
import { AddGame } from "../../dialogs/add-game";

export const HeaderGames = ({ isAuth, gameLength, handleSortChange, sort , handleAddGameSubmit }) => {
  const [isAddGameVisible, setIsAddGameVisible] = React.useState(false);

  const handleOpenAddGameDialog = () => {
    setIsAddGameVisible(true);
  };

  const handleCloseDialog = () => {
    setIsAddGameVisible(false);
  };

  return (
    <div className="narrow-container">
      <section className="games-header">
        <h3 className="games-header__title">VR Games</h3>
        <div className="games-header_btns">
          {isAuth && (
            <button
              className="games-header__btn"
              onClick={handleOpenAddGameDialog}
            >
              Add new card
            </button>
          )}
          {gameLength > 1 && (
            <select className="sort" value={sort} onChange={handleSortChange}>
              <option className="sort__item" value="newLast">
                New last
              </option>
              <option className="sort__item" value="newFirst">
                New first
              </option>
            </select>
          )}
        </div>
      </section>
      {isAddGameVisible && (
        <AddGame handleCloseDialog={handleCloseDialog} handleAddGameSubmit={handleAddGameSubmit}/>
      )}
    </div>
  );
};
