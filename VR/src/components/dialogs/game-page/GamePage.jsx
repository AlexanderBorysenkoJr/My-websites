import React from "react";
import "./gamePage.css";

export const GamePage = ({ handleCloseDialog, gameCardId, currentItems }) => {
  const findGameCard = currentItems.find((game) => game.gameId === gameCardId);
  return (
    <>
      <div className="overlay" onClick={handleCloseDialog}>
        <div className="modal-item" onClick={(e) => e.stopPropagation()}>
          <img className="modal-item__game-img" src={findGameCard.gameImageUrl} alt="Item" />
          <h3 className="modal-item__game-name">
            {findGameCard.gameName}
          </h3>
          <p className="modal-item__game-description">{findGameCard.gameDescription}</p>
          <div className="modal-item__user">
            <img className="modal-item__user-avatar" src={findGameCard.user.UserAvatar} alt="Item" />
            <h3 className="modal-item__user-name">{findGameCard.user.UserName}</h3>
          </div>
          <p className="modal-item__user-review">{findGameCard.gameDescription}</p>
        </div>
      </div>
    </>
  );
};
