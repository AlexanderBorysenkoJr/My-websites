import React from "react";
import { HeaderGames, MainGames, PaginationGames } from "../../components";

export const GamesPage = ({ isAuth }) => {
  const [games, setGames] = React.useState([]);
  const [itemOffset, setItemOffset] = React.useState(0);
  const [sort, setSort] = React.useState("newLast");

  React.useEffect(() => {
    setGames(JSON.parse(localStorage.getItem("Games")) || []);
  }, []);

  const handleAddGameSubmit = (newGame) => {
    setGames([...games,newGame]);
    localStorage.setItem("Games", JSON.stringify([...games,newGame]));
  };
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
    setItemOffset(newOffset);
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const sortedGames = React.useMemo(() => {
    if (!sort) return games;

    if (sort === "newLast") {
      return games.sort((a, b) => a.gameId - b.gameId);
    }

    return games.sort((a, b) => b.gameId - a.gameId);
  }, [sort, games]);

  const itemsPerPage = 4;
  const gameLength = sortedGames.length;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = sortedGames.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedGames.length / itemsPerPage);


  return (
    <>
      <HeaderGames
        isAuth={isAuth}
        gameLength={gameLength}
        handleSortChange={handleSortChange}
        sort = {sort}
        handleAddGameSubmit={handleAddGameSubmit}
      />
      <MainGames currentItems={currentItems} games={games}/>
      <PaginationGames
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        gameLength={gameLength}
      />
    </>
  );
};
