import React from "react";
import "./paginationGames.css";
import ReactPaginate from "react-paginate";

export const PaginationGames = ({ pageCount, handlePageClick, gameLength }) => {
  return (
    <>
      {gameLength > 4 && (
        <div className="narrow-container">
          <ReactPaginate
            className="games-pages-list"
            pageClassName="games-pages-list__item"
            pageLinkClassName="games-pages-list__btn"
            activeClassName="games-pages-list__item--active"
            disabledClassName="games-pages-list__arrow-left"
            previousClassName="games-pages-list__item"
            previousLinkClassName="games-pages-list__btn"
            nextClassName="games-pages-list__item"
            nextLinkClassName="games-pages-list__btn"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </>
  );
};
