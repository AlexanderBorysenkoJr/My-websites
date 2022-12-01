import React from "react";
import "./addGame.css";
import { DialogWrapper } from "../wrapper";

export const AddGame = ({ handleCloseDialog, handleAddGameSubmit}) => {
  const [gameName, setGameName] = React.useState("");
  const [gameDescription, setGameDescription] = React.useState("");
  const [gameImageUrl, setGameImageUrl] = React.useState("");
  const [gameReview, setGameReview] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let GamesInfo = {
      gameName: gameName,
      gameDescription: gameDescription,
      gameImageUrl: gameImageUrl,
      gameReview: gameReview,
      gameId: Date.now(),
      user: {
        UserName : JSON.parse(localStorage.getItem("User")).UserName,
        UserAvatar: JSON.parse(localStorage.getItem("User")).UserAvatar,
      }
    };
    handleAddGameSubmit(GamesInfo)
    handleCloseDialog();
  };

  return (
    <DialogWrapper title="Realities game" handleCloseDialog={handleCloseDialog}>
      <form
        className="form-adding-card"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="form-adding-card__title">Add new game</h3>
        <input
          className="form-adding-card__input"
          type="text"
          name="gameName"
          placeholder="Game name"
          value={gameName}
          onChange={(e) => setGameName(e.target.value)}
          required
        />
        <input
          className="form-adding-card__input"
          type="text"
          name="gameDescription"
          placeholder="Game description"
          value={gameDescription}
          onChange={(e) => setGameDescription(e.target.value)}
          required
        />
        <input
          className="form-adding-card__input"
          type="text"
          name="gameImageUrl"
          placeholder="Game image url"
          value={gameImageUrl}
          onChange={(e) => setGameImageUrl(e.target.value)}
          required
        />
        <input
          className="form-adding-card__input"
          type="text"
          name="gameReview"
          placeholder="Game review"
          value={gameReview}
          onChange={(e) => setGameReview(e.target.value)}
          required
        />
        <input
          className="form-adding-card__btn"
          type="submit"
          value="Add game"
        />
      </form>
    </DialogWrapper>
  );
};
