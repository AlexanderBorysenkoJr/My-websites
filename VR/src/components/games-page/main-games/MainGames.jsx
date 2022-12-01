import React from "react";
import { GamePage } from "../../dialogs";
import "./mainGames.css";

export const MainGames = ({ currentItems }) => {
  const [isGamePageVisible, setIsGamePageVisible] = React.useState(false);
  const [gameCardId, setGameCardId] = React.useState(null);

  const handleOpenGamePageDialog = (gameId) => {
    setIsGamePageVisible(true);
    setGameCardId(gameId);
  };

  const handleCloseDialog = () => {
    setIsGamePageVisible(false);
  };

  return (
    <div className="narrow-container">
      <section className="games-body">
        {currentItems.length > 0 ? (
          <ul className="games-list">
            {currentItems.map((game) => {
              return (
                <li
                  className="games-list__item"
                  key={game.gameId}
                  onClick={() => handleOpenGamePageDialog(game.gameId)}
                >
                  <img
                    className="games-list__img"
                    src={game.gameImageUrl}
                    alt="Game"
                  />
                  <div className="games-list__text">
                    <div className="games-list__text-game">
                      <h4 className="games-list__title" id="games-title">
                        {game.gameName}
                      </h4>
                      <p className="games-list__caption" id="games-description">
                        {game.gameDescription}
                      </p>
                    </div>
                    <div className="games-list__text-user">
                      <h4 className="games-list__title" id="user-name">
                        {game.user.UserName}
                      </h4>
                      <p className="games-list__caption" id="user-review">
                        {game.gameReview}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="games-list__empty">
            <h2 className="games-list__empty__text">Game list is empty</h2>
          </div>
        )}
        {isGamePageVisible && (
          <GamePage
            handleCloseDialog={handleCloseDialog}
            gameCardId={gameCardId}
            currentItems={currentItems}
          />
        )}
      </section>
    </div>
  );
};
