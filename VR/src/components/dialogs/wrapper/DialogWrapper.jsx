import React from "react";

export const DialogWrapper = ({ title, handleCloseDialog, children }) => {
  return (
    <div className="overlay" onClick={handleCloseDialog}>
    <div className="modal" onClick={e => e.stopPropagation()}>
      <div className="modal-header">
        <h3 className="modal-header__title">{title}</h3>
      </div>
      {children}
    </div>
    </div>
  );
};
